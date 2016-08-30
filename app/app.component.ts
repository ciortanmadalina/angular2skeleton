import { Component } from '@angular/core';
import { NgControl } from '@angular/common';
import MaskedInput from 'angular2-text-mask/dist/angular2TextMask';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    Mask : <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
  `,
  styleUrls: ['app.component.css'],
  directives: [MaskedInput]
})
export class AppComponent {
  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}
