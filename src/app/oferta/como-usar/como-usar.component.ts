import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'xyz-como-usar',
  standalone: true,
  imports: [],
  templateUrl: './como-usar.component.html',
  styleUrl: './como-usar.component.css',
  providers: [ OfertasService ]
})
export class ComoUsarComponent {


  public comoUsar: string = "";

   constructor(private router: ActivatedRoute, private ofertaService: OfertasService){}

   ngOnInit(){

    this.router.parent?.params.subscribe((params: Params)=>{
      this.ofertaService.getComoUsarOfertaPorId(params['id']).then((resposta: string)=>{
        this.comoUsar = (resposta);
      });
    });

    
   }

}
