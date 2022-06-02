import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/models/building';
import { BuildingService } from 'src/app/services/building.service';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {
  image:string = '';
  description:string = '';
  location:string = '';
  price:number;
  phoneNumber:string = '';
  squareMeter:string ='';
  title:string ='';
  constructor(private activatedRoute:ActivatedRoute,private buildingService:BuildingService) { }

  ngOnInit(): void {
    this.getValue();
  }

  getValue(){
    this.activatedRoute.params.subscribe( (response) =>{
      if (response['id']) {
        this.getById(response['id']);
      } else {
        console.log("hataaa");
      }
    })
  }

  getById(id:number){
    this.buildingService.getById(id).subscribe( response =>{
      this.image = response.singleData.image;
      this.description = response.singleData.description;
      this.location = response.singleData.location;
      this.phoneNumber = response.singleData.phoneNumber;
      this.price = response.singleData.price;
      this.squareMeter = response.singleData.squareMeter;
      this.title = response.singleData.title;
    })
  }
}
