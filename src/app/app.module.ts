import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabMenuModule, DataTableModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonSearchComponent } from './persons/person-search/person-search.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonService } from './shared/service/person.service';
import { HttpModule } from '@angular/http';

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
    TabMenuModule, DataTableModule
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
