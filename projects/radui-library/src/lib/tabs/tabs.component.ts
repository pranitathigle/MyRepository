import { Component, OnInit, Input } from '@angular/core';
import { TabsInterface } from './tabs-interface';

@Component({
  selector: 'radui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  private _configText: TabsInterface;

  get configText(): TabsInterface {
    return this._configText;
  }

  @Input('configText')
  set configText(valueObject: TabsInterface) {
    valueObject.align = valueObject.align || 'center';
    valueObject.tabitems = valueObject.tabitems || [
      { label: 'Tab 1', content: 'Tab 1 Content' },
      { label: 'Tab 2', content: 'Tab 2 Content' },
    ];
    this._configText = valueObject;
  }

  constructor() {}

  ngOnInit(): void {}
}
