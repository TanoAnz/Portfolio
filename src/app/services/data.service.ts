import { Injectable } from '@angular/core';
import { progetto } from '../models/progetto.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  progetti: progetto[]= [
    {titolo: "Menu' Royal", link: 'https://menu-royal-food-and-drink.netlify.app/',link2:'https://github.com/TanoAnz/Menu-royal', descrizione: "Menu' creato con angular per una panineria del mio paese", images:['../../assets/images/progetti/royal/1.png', '../../assets/images/progetti/royal/2.png', '../../assets/images/progetti/royal/3.png']},
    {titolo:'Air Travel Footprint Calculator', link:'https://airtravel-footprint.netlify.app/', link2:"https://github.com/TanoAnz/FootPrint-Calculator", descrizione: "Questa applicazione Angular calcola l'impronta di carbonio dei voli andata e ritorno tra due aeroporti. ", images: ['../../assets/images/progetti/Footprint.png']},
    {titolo:'Hacker News', link:"https://hacker-news-dfc38.web.app/", link2:'https://github.com/TanoAnz/Hacker-News', descrizione:'App che grazie ai servizi api di hacker news ti tiene aggiornato sulle tech news', images:['../../assets/images/progetti/hacker-news/1.png', '../../assets/images/progetti/hacker-news/2.png']},
    {titolo:'NTT-DATA', link:"https://ntt-data.netlify.app/", link2:"https://github.com/TanoAnz/NTT-dataa", descrizione:'Applicazione creata nel mio corso di studi per ntt-data. (visualizza il repository per sapere altro)', images:['../../assets/images/progetti/ntt-data/1.png', '../../assets/images/progetti/ntt-data/2.png', '../../assets/images/progetti/ntt-data/3.png', '../../assets/images/progetti/ntt-data/4.png']}
  ]
  constructor() { }
}
