import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-layout [appName]="'TEMPLATE'">
            <ng-template #menu>
                <app-common-menu></app-common-menu>
            </ng-template>
        </app-layout>`
})
export class AppComponent {
}
