import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'xyz-oferta',
  standalone: true,
  imports: [HttpClientModule, NgIf, RouterOutlet, RouterModule, NgFor, CurrencyPipe],
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css',
  providers: [ OfertasService ]
})
export class OfertaComponent {

  public oferta : Oferta;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService){}

  ngOnInit(){
    
    this.route.params.subscribe((params: Params) =>{

      this.ofertasService.getOfertasPorId(params['id']).then((resposta: Oferta) => this.oferta = resposta);
    });


    

    


  }
  

}
