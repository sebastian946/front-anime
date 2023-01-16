import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
//Components
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScoreComponent } from './components/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultSearchComponent,
    NavbarComponent,
    ScoreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
