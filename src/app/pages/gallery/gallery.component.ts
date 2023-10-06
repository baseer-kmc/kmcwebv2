import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  albumsList: any;
  photosList: any;
  albumPhotosList: any;
  selectedAlbum: any;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGalleryPhotos().subscribe((photos: any) => {
      this.photosList = photos;
      this.albumsList = _.chain(photos)
        .map(x => x.AlbumName)
        .uniq()
        .value();
      console.log(this.albumsList, 'this.albumsList')
      this.selectedAlbum = this.albumsList[0];
      this.albumPhotosList = _.chain(photos)
        .filter((x: any) => x.AlbumName === this.selectedAlbum)
        .value();
    });
  }

  switchAlbum(album: string) {
    this.selectedAlbum = album;
    this.albumPhotosList = _.chain(this.photosList)
      .filter((x: any) => x.AlbumName === this.selectedAlbum)
      .value();
  }
}
