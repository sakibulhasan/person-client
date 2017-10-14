import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TabMenuModule, DataTableModule, InputTextModule, ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonSearchComponent } from './persons/person-search/person-search.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonService } from './shared/service/person.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonSearchComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    TabMenuModule, DataTableModule, InputTextModule, ButtonModule
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
