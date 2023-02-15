import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTopCandidates(pageNumber: number, pageSize: number, searchText:string=''): Observable<any> {
    //const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    if (searchText != '') {
      return this.http.get(`${this.baseUrl}api/Candidates/Filtered?keyWord=` + searchText);
    }
    else {
      return this.http.get(`${this.baseUrl}api/Candidates`);
    }
   // return this.http.get(`${this.baseUrl}api/candidates/top?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
