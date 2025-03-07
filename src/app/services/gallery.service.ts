import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }
  
  getGalleryPhotos() {
    let galleryPath = `${environment.apiPath}/web/Photos` 
    return this.http.get(galleryPath);
  }
}
