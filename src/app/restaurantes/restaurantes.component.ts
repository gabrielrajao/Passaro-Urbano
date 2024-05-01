import { Component } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xyz-restaurantes',
  standalone: true,
  imports: [HttpClientModule, NgFor, RouterLink, CurrencyPipe],
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.css',
  providers: [OfertasService]
})
export class RestaurantesComponent {

  public ofertas:Oferta[];

  constructor(private ofertaService:OfertasService){}

  ngOnInit(){
    this.ofertaService.getOfertasPorCategoria('restaurante').then((ofertas : Oferta[])=>this.ofertas = ofertas);
  }
}
