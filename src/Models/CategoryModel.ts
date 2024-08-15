export interface SubCategoryModel {
    id:string,
    name:string,
    img:string,
    menuNum:number,
    title: string,
}


export interface CategoryModel{
    id:string,
    name:string,
    img:string,
    menuNum:number,
    title: string,
    subCategory:SubCategoryModel[] | null
}



export interface BreadCrumbModel{
    id:string;
    title:string;
    link:string
}