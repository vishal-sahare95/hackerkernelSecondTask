import { Categories } from "../categories/categories"

export interface Product {
    id?:number	
title:string	
price:number	
description	:string	
category:Categories	|null
images:	[]	
}

export class ProductC implements Product {
        id	?:number	;
        title:string;	
        price:number;	
        description	:string;	
    	category:Categories	|null
        images:	[];
    constructor(private obj :Product){
        
      this.title= this.obj && this.obj.title || '';
      this.price= this.obj && this.obj.price || 0;
      this.description= this.obj && this.obj.description || '';
      this.description= this.obj && this.obj.description || '';
      this.category= this.obj && this.obj.category || null;
      this.images= this.obj && this.obj.images || [];
   
    }
}