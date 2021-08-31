import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Api } from '../interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public urlBase = environment.api;
  constructor(private _http:HttpClient) { }

  getAll() {
    return this._http.get<Array<Api>>(this.urlBase)
  }
}
