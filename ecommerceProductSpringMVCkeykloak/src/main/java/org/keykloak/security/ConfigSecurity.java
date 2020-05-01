package org.keykloak.security;

import org.keycloak.adapters.springsecurity.KeycloakConfiguration;
import org.keycloak.adapters.springsecurity.authentication.KeycloakAuthenticationProvider;
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;


@KeycloakConfiguration
public class ConfigSecurity extends KeycloakWebSecurityConfigurerAdapter {

	@Override
	protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
		return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
	}

	
	// on précise que c'est keyCloak qui est en charge de la gestion d'authentification
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {

	/*	KeycloakAuthenticationProvider keycloakAuthenticationProvider = keycloakAuthenticationProvider();
		keycloakAuthenticationProvider.setGrantedAuthoritiesMapper(new SimpleAuthorityMapper());
		auth.authenticationProvider(keycloakAuthenticationProvider);*/
		
		auth.authenticationProvider(keycloakAuthenticationProvider());
	}

	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		super.configure(http);
	        http.authorizeRequests()
	          .antMatchers("/products/**", "/suppliers/**").authenticated();
	        
	        /*  .hasRole("user")
	          .anyRequest()
	          .permitAll();*/
	}
}
