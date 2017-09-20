import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from 'in-memory-data.service';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

