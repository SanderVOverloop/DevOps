import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalcComponent } from './calc/calc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FitnessComponent } from './fitness/fitness.component';
import { MapComponent } from './map/map.component';
import { WelcomeInfoComponent } from './welcome-info/welcome-info.component';
import { WeatherComponent } from './weather/weather.component';

import { OpendataService } from './common/opendata-service.service';
import { WeatherService } from './common/weather-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    CalcComponent,
    PageNotFoundComponent,
    NavBarComponent,
    FitnessComponent,
    MapComponent,
    WelcomeInfoComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'fitness', component: FitnessComponent},
      {path: 'map', component: MapComponent},
      {path: 'calc', component: CalcComponent},
      {path: 'calculator', component: CalcComponent},
      {path: 'weer', component: WeatherComponent},
      {path: 'weather', component: WeatherComponent},
      {path: 'hetweer', component: WeatherComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ], {useHash: true}),
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTryTg3zbR5wVXqreRm3VZv0xE73_zeKk'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    OpendataService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
