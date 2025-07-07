package PLGroup7.Project_PL.security;

import io.jsonwebtoken.*;
import java.util.Arrays;
import java.util.Collections;

import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.security.Key;

@Component
public class JwtUtil {

    private static final long EXPIRATION_TIME = 86400000; // 1 hari
    private static final String SECRET = "MyJwtSecretKeyMyJwtSecretKeyMyJwtSecretKey"; // Harus 256 bit

    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

    public String generateToken(String username, List<String> roles) {
        return Jwts.builder()
                .setSubject(username)
                .claim("roles", roles)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build()
                .parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

    public List<String> extractRoles(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

            Object roles = claims.get("roles");
             if (roles instanceof List<?>) {
                return (List<String>) roles;
             } else if (roles instanceof String) {
                return Arrays.asList(((String) roles). split(","));
             } else {
                return Collections.emptyList();
             }
             
        } catch (JwtException e) {
            return Collections.emptyList();
        }
    }
}
