import { RADUILibraryComponent } from './../../../radui-library/src/lib/radui-library.component';

import { Component, OnInit } from '@angular/core';
//import { RADUILibraryComponent } from 'radui-library/lib/RADUILibraryComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'RADUI-Application';
  ngOnInit() {}

}
