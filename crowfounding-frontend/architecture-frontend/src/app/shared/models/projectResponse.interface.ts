export interface IProjectResponse{
    id:number;
    projectName:string;
    idCreatorProject:number;
    description:string;
    total:number;
    categoryModel:ICategory;
    status:string;    
    imageCategory:string;
}

export interface ICategory{
    id:number;
    type:string;
    description:string;
    imageCategory:string;
}

