import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-layout [menuVisible]="false">
      <ng-template #layoutMenuTpl>
          <app-custom-menu></app-custom-menu>
      </ng-template>
  </app-layout>`
})
export class AppComponent {
}
