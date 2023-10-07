import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import * as _ from 'lodash';
import { Lightbox } from 'ngx-lightbox';


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
  dataLoaded:boolean=false;

  constructor(private galleryService: GalleryService, private _lightbox: Lightbox) { }

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
        .map((x: any) => {
          return {
            src: x.LargePhoto,
            caption: '',
            thumb: x.ThumbnailPhoto
          }
        })
        .value();
        this.dataLoaded=true;
    });
  }

  switchAlbum(album: string) {
    this.selectedAlbum = album;
    this.albumPhotosList = _.chain(this.photosList)
      .filter((x: any) => x.AlbumName === this.selectedAlbum)
      .map((x: any) => {
        return {
          src: x.LargePhoto,
          caption: '',
          thumb: x.ThumbnailPhoto
        }
      })
      .value();
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.albumPhotosList, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
