import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Building } from '../models/building';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  private readonly apiUrl:string = environment.baseApiUrl + 'Buildings';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    const getListUrl = this.apiUrl + '/get-all';
    return this.httpClient.get<ListResponseModel<Building>>(getListUrl);
  }

  getById(buildingId:number){
    const getByIdUrl = this.apiUrl + '/getby-building-id/' + buildingId;
    return this.httpClient.get<SingleResponseModel<Building>>(getByIdUrl);
  }

  add(building:Building){    
    const addUrl = this.apiUrl + '/add';
    return this.httpClient.post<ResponseModel>(addUrl,building);
  }

  update(building:Building){
    const updateUrl = this.apiUrl + '/update';
    return this.httpClient.put<ResponseModel>(updateUrl,building);
  }

  delete(building:Building){    
    const deleteUrl = this.apiUrl + '/delete';
    return this.httpClient.delete<ResponseModel>(deleteUrl,{body:building});
  }
}
