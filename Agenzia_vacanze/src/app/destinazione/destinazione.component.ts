import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'destinazione',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinazione.component.html',
  styleUrl: './destinazione.component.css'
})
export class DestinazioneComponent {
  des = "start";

destinazioneSap= [

    {nome: "Barcellona",abitanti: 1636193,nazione: "Spagna",lingua: "Catalano, Spagnolo",valuta: "Euro (EUR)",clima: "Mediterraneo, con estati calde e secche e inverni miti e umidi",aeroporto: "Aeroporto di Barcellona-El Prat (BCN)" ,img: "../../assets/image.png"},
    {nome: "Lisbona", abitanti: 545245, nazione: "Portogallo", lingua: "Portoghese", valuta: "Euro (EUR)", clima: "Mediterraneo, con estati calde e secche e inverni miti e umidi", aeroporto: "Aeroporto di Lisbona (LIS)", img: "../../assets/image_1.png"},
    {nome: "Roma", abitanti: 2873496, nazione: "Italia", lingua: "Italiano", valuta: "Euro (EUR)", clima: "Mediterraneo, con estati calde e secche e inverni miti e umidi", aeroporto: "Aeroporto di Roma-Fiumicino (FCO)",img: "../../assets/image_2.png"},
    {nome: "Parigi", abitanti: 2206488, nazione: "Francia", lingua: "Francese", valuta: "Euro (EUR)", clima: "Oceanico, con estati miti e inverni freddi", aeroporto: "Aeroporto di Parigi-Charles de Gaulle (CDG)"},
    {nome: "Amsterdam", abitanti: 862965, nazione: "Paesi Bassi", lingua: "Olandese", valuta: "Euro (EUR)", clima: "Oceanico, con estati miti e inverni freddi", aeroporto: "Aeroporto di Amsterdam-Schiphol (AMS)"},
  ]
  



}
