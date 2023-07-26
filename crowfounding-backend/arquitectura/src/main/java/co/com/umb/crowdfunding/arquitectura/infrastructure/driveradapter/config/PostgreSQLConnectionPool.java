package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.config;

import org.hibernate.internal.log.ConnectionPoolingLogger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PostgreSQLConnectionPool {

    @Bean
    public ConnectionPoolingLogger getConnectionConfig(){
        PostgresqlConnectionProperties pgProperties = new PostgresqlConnectionProperties();
        pgProperties.setDatabase("forum");
        pgProperties.setHost("localhost");
        pgProperties.setPort(5432);
        pgProperties.setUsername("postgres");
        pgProperties.setPassword("1234");
        pgProperties.setSchema("public");


        return buildConnectionConfiguration(pgProperties);

    }

    private ConnectionPoolingLogger buildConnectionConfiguration(PostgresqlConnectionProperties properties) {

        return null;
    }

}
