package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.projectpostgresql;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

    Project getProjectById(int id);

    Boolean deleteById(int id);



}
