import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';




@Component({
  selector: 'xyz-home',
  standalone: true,
  imports: [ NgFor, HttpClientModule, RouterLink, CurrencyPipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [OfertasService]
})
export class HomeComponent {


  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService){}

  ngOnInit(){

      (this.ofertasService.getOfertas()).then(
        (ofertas:Oferta[]) => this.ofertas =  ofertas
      ).catch((param:any)=> console.log(param));
  }

}
