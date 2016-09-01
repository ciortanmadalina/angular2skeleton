Input text mask : https://github.com/text-mask/text-mask  

npm i angular2-text-mask --save  

### System JS  
```js
const map: any = {
  'app' : 'app',
  'main': 'app/main.js',
  '@angular' : 'node_modules/@angular',
  'angular2-in-memory-web-api' : 'node_modules/angular2-in-memory-web-api',
  'angular2-text-mask': 'node_modules/angular2-text-mask',
  'rxjs' : 'node_modules/rxjs'
};

// packages tells the System loader how to load when no filename and/or no
// extension
const packages: any = {
  'app' : {main : 'main.js', defaultExtension : 'js'},
  'api' : {defaultExtension : 'js'},
  'rxjs' : {defaultExtension : 'js'},
  'angular2-in-memory-web-api' : {main : 'index.js', defaultExtension : 'js'},
  'angular2-text-mask': { defaultExtension: 'js' }
};
```

### App module  

```js
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
```

### Usage

```js
import { Component } from '@angular/core';
import { NgControl } from '@angular/common';
import MaskedInput from 'angular2-text-mask/dist/angular2TextMask';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    Mask : <input [textMask]="{mask: mask, placeholderChar:'1'}" [(ngModel)]="myModel" type="text"/>
    Mask : <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
    {{myModel}}
  `,
  styleUrls: ['app.component.css'],
  directives: [MaskedInput]
})
export class AppComponent {
  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}

```
