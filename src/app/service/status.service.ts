import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  BACK_URL = environment.url;

  constructor(private http: HttpClient) { }
  public getProfiles(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/profiles`);
  }
}
