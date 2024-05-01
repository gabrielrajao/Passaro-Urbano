import { Component } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xyz-diversao',
  standalone: true,
  imports: [ HttpClientModule, NgFor, RouterLink, CurrencyPipe],
  templateUrl: './diversao.component.html',
  styleUrl: './diversao.component.css',
  providers: [OfertasService]
})
export class DiversaoComponent {

    public ofertas: Oferta[]

    constructor(private ofertaService: OfertasService){}

    ngOnInit(){
      this.ofertaService.getOfertasPorCategoria("diversao").then((ofertas: Oferta[])=> this.ofertas=ofertas);
    }

}
