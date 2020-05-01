package org.keykloak.security;

import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class keyCloakConfig {

	   @Bean
	    public KeycloakSpringBootConfigResolver KeycloakConfigResolver() {
	        return new KeycloakSpringBootConfigResolver();
	    }
}
