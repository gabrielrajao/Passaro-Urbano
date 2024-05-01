import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';
import localePtbr from '@angular/common/locales/pt'
registerLocaleData(localePtbr)

@Component({
  selector: 'xyz-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopoComponent, RodapeComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ { provide: LOCALE_ID, useValue: 'pt-Br'}]
})
export class AppComponent {
  title = 'app2';
}
