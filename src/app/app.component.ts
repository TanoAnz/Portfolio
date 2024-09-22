import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { progetto } from './models/progetto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Portfolio-Tano';
  progetti: progetto[]= [];
  constructor(public dataService: DataService){}
  ngOnInit(): void {
    this.progetti=this.dataService.progetti
  }

}
