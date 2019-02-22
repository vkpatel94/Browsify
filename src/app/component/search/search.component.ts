import { Component, OnInit, Input } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';
import { BrowsifyService } from '../../services/browsify.service';

import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';
import { Track } from '../../models/Track';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchStr: string;
  artist: Artist[];
  album: Album[];
  track: Track[];
 @Input() query: FormControl = new FormControl();
  // type: ['artist','album','track','playlist']
  constructor(private _browsifyService: BrowsifyService) { }


  ngOnInit() {
    this.query.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(query => this._browsifyService.getAuth()
        .subscribe(res => this._browsifyService.get(query, ['artist', 'album', 'track', 'playlist'], res.access_token).subscribe(
          res => {
            this.artist = res.artists.items
            this.album = res.albums.items
            this.track = res.tracks.items
          })
        ));
    
  }
}
