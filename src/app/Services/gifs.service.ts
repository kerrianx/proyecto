import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GifsResponse, Gifs } from 'src/app/Interfaces/gifs.interfaces';

const API_KEY = environment.api_key;
const GIFS_URL = environment.gifs_api_url;

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial:string[]=[];
  results: Gifs[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  addSearchToHistorial = (query: string) => {
    const isRepetead = this._historial.some(historial => historial === query)
    const historialIsFulled = this._historial.length === 10 

    if (!isRepetead && !historialIsFulled){
      this._historial.unshift(query);
    } else if (!isRepetead && historialIsFulled) {
      this._historial.pop()
      this._historial.unshift(query);
    }
  }

  getGifs = (query: string='') => {
   
    this.addSearchToHistorial(query)

    const params = new HttpParams()
      .set('api_key', API_KEY)
      .set('limit', 20)
      .set('q', query);

    this.http.get<GifsResponse>(`${GIFS_URL}`, { params }).subscribe((res) => {
      this.results = res.data;
    });
  };

  cleanGifs = () =>{
    this.results = []
  }
}
