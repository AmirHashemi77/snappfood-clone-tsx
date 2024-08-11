export interface RestrantModel {
    
    id: string,
    title: string,
    subtitle: string,
    filterCategory: string[],
    logo: string,
    image: string,
    rate: number,
    tag: string,
    type: string,
    address: string,
    paymentType:string,
    openHours: number,
    closeHours: number,
    sendDetail: {
      type:string,
      price: number
    },
    "comments": CommentsItemModel[],
    "menu": RestrantMenuModel[]
  
}





export interface CommentsItemModel{
id: number,
auther: string,
date: string,
ordered: string[],
rate: number
}

export interface RestrantMenuModel{
id: string,
category: string,
foods: FoodItemModel[]
}


export interface FoodItemModel{
id: string,
img: string,
name: string,
ingredient: string,
price: number,
rate: number,
comments: CommentsItemModel[]
}