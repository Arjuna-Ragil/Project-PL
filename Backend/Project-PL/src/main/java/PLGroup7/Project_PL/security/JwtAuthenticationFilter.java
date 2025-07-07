package PLGroup7.Project_PL.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import PLGroup7.Project_PL.service.MyUserDetailsService;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;

    // public JwtAuthenticationFilter(JwtUtil jwtUtil, UserDetailsService userDetailsService) {
    //     this.jwtUtil = jwtUtil;
    //     this.userDetailsService = userDetailsService;
    // }

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        String path = request.getServletPath();

        // Bypass auth untuk endpoint publik
        if (
            path.startsWith("/api/auth") ||
            path.startsWith("/api/produk") ||
            request.getMethod().equalsIgnoreCase("OPTIONS")) {
    filterChain.doFilter(request, response);
    return;
}

        String authHeader = request.getHeader("Authorization");
        String token = null;
        String username = null;

        List<String> roles = Collections.emptyList();
        List<SimpleGrantedAuthority> authorities = Collections.emptyList();

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            username = jwtUtil.extractUsername(token);
        }

        // Jika username valid dan belum ada auth di security context
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            if (jwtUtil.validateToken(token)) {

            // Tambahkan otoritas (authority) minimal ROLE_CUSTOMER agar tidak ditolak
            roles = jwtUtil.extractRoles(token);
            authorities = roles.stream()
                    .map (role -> new SimpleGrantedAuthority("ROLE_" + role))
                    .toList();

                UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );

                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        System.out.println("Decoded username: " + username);
System.out.println("Decoded roles: " + roles);
System.out.println("Authorities: " + authorities);

        filterChain.doFilter(request, response);
    }
}
