package co.com.umb.crowdfunding.arquitectura.domain.model.gateway;

import java.util.List;

public interface ICrudModelRepositoryGeneric<T> {

    public T getById(int id);
    public T create(T t);
    public void delete(int id);
    public List<T> getAll ();

    public T update(T t);


}
