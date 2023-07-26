package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.config;


import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PostgresqlConnectionProperties {
    private String database;
    private String schema;
    private String username;
    private String password;
    private String host;
    private Integer port;
}
