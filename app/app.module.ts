import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import MaskedInput  from 'angular2-text-mask/dist/angular2TextMask';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MaskedInput
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
