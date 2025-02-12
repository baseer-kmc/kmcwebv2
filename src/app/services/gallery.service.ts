import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }
  
  getGalleryPhotos() {
    let functionsPath = `${environment.apiPath}/GetPhotos` 
    return this.http.get(`${functionsPath}`);
  }
}
