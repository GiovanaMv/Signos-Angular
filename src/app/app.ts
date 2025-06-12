import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header';
import { CarousselComponent } from './caroussel/caroussel';
import { PhrasesComponent } from './phrases/phrases';
import { AboutComponent } from './about/about';
import { SignosComponent } from './signos/signos';
import { ElementsComponent } from './elements/elements';
import { CompatibilidadeComponent } from './compatibilidade/compatibilidade';
import { ContactComponent } from './contact/contact';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    HeaderComponent,
    CarousselComponent,
    PhrasesComponent,
    AboutComponent,
    SignosComponent,
    ElementsComponent,
    CompatibilidadeComponent,
    ContactComponent,
    FooterComponent,
    ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'signos';
}
