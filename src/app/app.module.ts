import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from  './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { LocationComponent } from './location/location.component';
import { TitleComponent } from './title/title.component';
import { StackDetailsComponent } from './stack-details/stack-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LocationComponent,
    TitleComponent,
    StackDetailsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
