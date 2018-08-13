import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'module1', pathMatch: 'full'},
    {
        path: 'module1',
        loadChildren: './module1/module1.module#Module1Module'
    },
    {
        path: 'module2',
        loadChildren: './module2/module2.module#Module2Module'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterDataRoutingModule {
}
