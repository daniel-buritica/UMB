package co.com.umb.crowdfunding.arquitectura.infrastructure.entrypoints.projectservices;

import co.com.umb.crowdfunding.arquitectura.domain.model.project.ProjectModel;
import co.com.umb.crowdfunding.arquitectura.domain.usecase.ProjectUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api/v1/crowdfunding")
@AllArgsConstructor
public class ProjectService {

    private final ProjectUseCase projectUseCase;
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/project/create")
    public ProjectModel create(@RequestBody ProjectModel projectModel){
        return projectUseCase.create(projectModel);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/project/update")
    public ProjectModel update(@RequestBody ProjectModel projectModel){
        return projectUseCase.update(projectModel);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/project/findById/{id}")
    private ProjectModel findById(@PathVariable int id){
        return projectUseCase.getById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/project/findAll")
    private List<ProjectModel> findAll(){
        return projectUseCase.getAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/project/delete/{id}")
    public Boolean delete(@PathVariable int id) {
        return projectUseCase.delete(id);
    }


}
