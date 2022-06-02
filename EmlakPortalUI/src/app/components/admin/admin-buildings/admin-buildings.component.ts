import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Building } from 'src/app/models/building';
import { BuildingService } from 'src/app/services/building.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-admin-buildings',
  templateUrl: './admin-buildings.component.html',
  styleUrls: ['./admin-buildings.component.css']
})
export class AdminBuildingsComponent implements OnInit {

  addForm:FormGroup;
  buildings:Building[];

  constructor(private buildingService:BuildingService,
    private messageService:MessageService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.getAll();
  }

  
  createForm(){
    this.addForm = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required],
      location:['',Validators.required],
      phoneNumber:['',Validators.required],
      price:[0,Validators.required],
      squareMeter:['',Validators.required]
    })
  }

  add(){
    if (this.addForm.valid) {
      const formValue = Object.assign({},this.addForm.value);
      this.buildingService.add({
        id:0,
        title:formValue.title,
        description:formValue.description,
        image:formValue.image,
        location:formValue.location,
        phoneNumber:formValue.phoneNumber,
        price:formValue.price,
        squareMeter:formValue.squareMeter + " m2"
      }).subscribe( (response) =>{
        this.messageService.show(response.message)
      })
    } else {
      this.messageService.show("eksik")
    }
  }

  getAll(){
    this.buildingService.getAll().subscribe(response=>{
      this.buildings = response.listData;
    })
  }

  delete(building:Building){
    this.buildingService.delete(building).subscribe(response=>{
      this.messageService.show(response.message);
      this.getAll();
    })
  }
}
