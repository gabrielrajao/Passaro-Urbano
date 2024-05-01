import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, catchError, debounceTime, distinctUntilChanged, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { HttpClientModule } from '@angular/common/http';
import { switchMap } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { DescricaoReduzida } from '../util/descricao-reduzida.pipe';




@Component({
  selector: 'xyz-topo',
  standalone: true,
  imports: [RouterModule, HttpClientModule, NgFor, DescricaoReduzida, AsyncPipe],
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.css',
  providers: [OfertasService]
})
export class TopoComponent {



    public ofertas:Observable<Oferta[]>;

  

    private subjectPesquisa: Subject<string> = new Subject<string>();

    constructor(private ofertaService:OfertasService){}

    ngOnInit(){
      this.ofertas = this.subjectPesquisa
      .pipe( 
        
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap ( (termo: string) =>{
          console.log('Requisição para API');

          if(termo.trim() == ''){
            return of<Oferta[]>([]);
          }



          return this.ofertaService.pesquisaOfertas(termo)
        }),
      
        catchError((err:any)=>{
          console.log(err);
          return of<Oferta[]>([]);
        })
        );



    }

    public pesquisa(entrada:string):void {

      console.log('Keyup ', entrada);
      this.subjectPesquisa.next(entrada);
      
    }

    public limpaPesquisa(): void {
      this.subjectPesquisa.next('');
    }

}
