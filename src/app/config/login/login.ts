export interface Login {    
        id?: number,
        email: string,
        password: string,
        name: string,
        role: string,
        avatar: string, 
        refresh_token?:string;
        access_token?:string;
}

export class LoginC implements Login{
        id?: number;
        email: string;
        password: string;
        name: string;
        role: string;
        avatar: string;
        refresh_token?:string;
        access_token?:string;

        constructor(private obj:Login){
            this.email= this.obj &&obj.email||'';
            this.password= this.obj &&obj.password || '' ;
            this.name= this.obj &&obj.name || "" ;
            this.role= this.obj &&obj.role || '' ;
            this.avatar= this.obj &&obj.avatar || '' ; 
            this.refresh_token= this.obj &&obj.refresh_token || '' ; 
            this.access_token= this.obj &&obj.access_token || '' ; 
        }
}
