export interface Categories {
    id?: number,
    name:string,
    image: string
}

export class CategoriesC implements Categories{
    id?: number;
    name:string;
    image: string;
    constructor(private obj:Categories){
        this.id=this.obj && this.obj.id || 0;
        this.name=this.obj && this.obj.name || '';
        this.image=this.obj && this.obj.image || '';

    }
}
