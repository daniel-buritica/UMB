package co.com.umb.crowdfunding.arquitectura.infrastructure.entrypoints.packageservices;

import co.com.umb.crowdfunding.arquitectura.domain.model.packagee.PackageModel;
import co.com.umb.crowdfunding.arquitectura.domain.usecase.PackageUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api/v1/crowdfunding")
@AllArgsConstructor
public class PackageService {

    private final PackageUseCase packageUseCase;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/package/create")
    private PackageModel create(@RequestBody PackageModel packageModel){
        return packageUseCase.create(packageModel);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/package/getAll")
    private List<PackageModel> getAll(){
        return packageUseCase.getAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/package/getAllByIdProject/{id}")
    private List<PackageModel> findByIdProject(@PathVariable int id){
        return packageUseCase.findByIdProject(id);
    }


}
