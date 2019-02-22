import { Component, OnInit } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  query: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}




































