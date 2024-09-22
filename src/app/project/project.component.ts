import { Component, Input } from '@angular/core';
import { progetto } from '../models/progetto.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  currentIndex: number= 0;
  idInterval: any;
  @Input()progetto!: progetto;
  constructor(public dataService: DataService){}

  onMouseOver():void{
    this.idInterval= setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.progetto.images.length;
    }, 3000);
  }
  stopInterval():void{
    if(this.idInterval){
      clearInterval(this.idInterval)
    }
  }
  onMouseLeave():void{
    setTimeout(()=>{
      this.stopInterval();
    }, 5000)
  }
  onClick(index:number){
    this.currentIndex=index;

  }

}
