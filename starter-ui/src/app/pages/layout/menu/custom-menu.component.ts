import { Component } from '@angular/core';
import {CoreService} from "inet-core";
import {MenuComponent} from "inet-ui";
@Component({
  selector: 'app-menu',
  templateUrl: './custom-menu.component.html'
})
export class CustomMenuComponent extends MenuComponent {

  constructor(public coreService: CoreService
  ) {
    super(coreService);
  }
}
