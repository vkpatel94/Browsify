import { Component, OnInit, Input, Query } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { BrowsifyService } from '../../services/browsify.service';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';
import { Track } from '../../models/Track';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchStr: string;
  artist: Artist[];
  album: Album[];
  track: Track[];
  @Input() query: string;

  constructor(private _browsifyService: BrowsifyService, private route: ActivatedRoute) { }
  token = localStorage.getItem("token");
  
  ngOnInit() {
    this.route.params.subscribe(
        params => this._browsifyService.get(params['query'], ['artist', 'album', 'track', 'playlist'], this.token)
        .subscribe( res => {
            this.artist = res.artists.items
            this.album = res.albums.items
            this.track = res.tracks.items
        })
    )}
}
