package PLGroup7.Project_PL;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "PLGroup7.Project_PL")
public class ProjectPlApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectPlApplication.class, args);
	}

}
