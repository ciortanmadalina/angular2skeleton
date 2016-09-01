Input text mask : https://github.com/text-mask/text-mask

npm i angular2-text-mask --save

System JS
==========
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
