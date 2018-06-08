import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParalaxCornersComponent } from './paralax-corners/paralax-corners.component';
import { AppRoutingModule } from './app.routing';
import { FooterComponent } from './footer/footer.component';
import { RotatingArrowComponent } from './rotating-arrow/rotating-arrow.component';
import { ContactForProjectsComponent } from './contact-for-projects/contact-for-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    ParalaxCornersComponent,
    FooterComponent,
    RotatingArrowComponent,
    ContactForProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
