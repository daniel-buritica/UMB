package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.packagepostgresql;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PackageeRepository extends JpaRepository<Packagee,Integer> {

    Packagee findPackageeById(int id);
    List<Packagee> findPackageeByIdProject(int id);
}
