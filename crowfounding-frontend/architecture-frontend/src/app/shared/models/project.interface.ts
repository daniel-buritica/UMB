export interface IProject{    
    projectName:string;
    idCreatorProject:number;
    description:string;
    total:number;
    categoryModel:ICategory;
    status:string;
};

export interface ICategory{    
    type:string;
    description:string;
};