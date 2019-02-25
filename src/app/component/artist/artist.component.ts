import { Component, OnInit, Input, Query } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { BrowsifyService } from '../../services/browsify.service';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../models/Artist';

@Component({
  moduleId: module.id,
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: Artist[];
  name: string;
  imgUrl: string;
  genre: string;

  constructor(private _browsifyService: BrowsifyService, private route: ActivatedRoute) { }
  token = localStorage.getItem("token");
  ngOnInit() {
    
    this.route.params.subscribe(
      params => {
        this.name = params['name']
        this.imgUrl = params['url']
        this.genre = params['genre']
        this._browsifyService.getArtist(params['id'], ['album', 'single'], this.token)
        .subscribe( res => {
          this.artist = res.items
          console.log(this.artist);
        })
      }
    )
  }

}
