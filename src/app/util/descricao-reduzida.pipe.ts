import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'descricaoReduzida', standalone: true})
export class DescricaoReduzida implements PipeTransform{


    public transform(texto:string, truncarEm:number): string{

        

        if(texto.length > truncarEm){
            return texto.substring(0,truncarEm) + '...';
        }

        return texto;
    }

}