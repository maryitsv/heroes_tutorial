import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// internal
import { AppComponent } from './app.component';
import { PicturesListComponent } from './pictures-list/pictures-list.component';
import { PictureCardComponent } from './picture-card/picture-card.component';

// external
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PicturesListComponent,
    PictureCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
