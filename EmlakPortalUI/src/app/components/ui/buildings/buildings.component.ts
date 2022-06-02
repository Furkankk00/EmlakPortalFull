import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/building';
import { BuildingService } from 'src/app/services/building.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  buildings:Building[];
  constructor(private buildingService:BuildingService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.buildingService.getAll().subscribe(response=>{
      this.buildings = response.listData;
    })
  }
}
