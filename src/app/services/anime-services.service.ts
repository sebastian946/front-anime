import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataAnimes } from '../interfaces/data-animes';


@Injectable({
  providedIn: 'root'
})
export class AnimeServicesService {
  private API_URL = 'https://api.jikan.moe/v4/anime';
  private BACK_URL = 'http://localhost:8000/api/evaluateScore/';

  private respose$ = new Subject<any>();

  constructor(private http: HttpClient) {}

    getAnimes(): Observable<DataAnimes>{
      return this.http.get<DataAnimes>(`${this.API_URL}`);
    }
    getSearchAnime(searchAnime: string): Observable<DataAnimes>{
        return this.http.get<DataAnimes>(`${this.API_URL}${'?q='}${searchAnime}`);
    }
    getAverageAnime(searchAnime:string){
      return this.http.get<DataAnimes>(`${this.BACK_URL}${searchAnime}`);
    }
    resultsAnime(anime:DataAnimes[]){
      this.respose$.next(anime);
    }
    getResultsAnime(): Observable<DataAnimes[]>{
      return this.respose$.asObservable();
    }
    getScore(): Observable<DataAnimes[]>{
      return this.respose$.asObservable();
    }
}
