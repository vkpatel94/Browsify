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
import { ArtistComponent } from './component/artist/artist.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'redirect', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'search/:query', component: SearchComponent},
  {path: 'artist/:id/:url/:name/:genre', component: ArtistComponent},
  // {path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    ArtistComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ BrowsifyService ],
  bootstrap: [AppComponent],
  exports: [ArtistComponent, LoginComponent, HomeComponent, LogoutComponent]
  // exports: [HeaderComponent]
})
export class AppModule { }
