import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'xyz-onde-fica',
  standalone: true,
  imports: [],
  templateUrl: './onde-fica.component.html',
  styleUrl: './onde-fica.component.css',
  providers:[ OfertasService ]
})
export class OndeFicaComponent {


  public OndeFica:string = "";

  constructor(private router: ActivatedRoute, private ofertaService: OfertasService ){}

  ngOnInit(){

    this.router.parent?.params.subscribe((params:Params)=>{
      this.ofertaService.getOndeFicaOfertaPorId(params['id']).then((resposta:string)=> this.OndeFica = resposta);
    });

   
  }

}
