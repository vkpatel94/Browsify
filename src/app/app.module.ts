import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BrowsifyService } from './services/browsify.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './component/search/search.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HeaderComponent},
  {path: 'search', component: SearchComponent}
  // {path: 'artist', component: ArtistComponent},
  // {path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ BrowsifyService ],
  bootstrap: [AppComponent]
  // exports: [HeaderComponent]
})
export class AppModule { }
