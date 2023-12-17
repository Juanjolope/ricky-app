import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  public getDataById(id: number): Observable<any> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<any>(url);
  }
}

