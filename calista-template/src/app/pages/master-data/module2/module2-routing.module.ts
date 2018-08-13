import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Module2ListComponent} from "./module2-list/module2-list.component";
import {Module2AddComponent} from "./module2-add/module2-add.component";

const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: Module2ListComponent},
    {path: 'add', component: Module2AddComponent},
    {path: 'edit/:id', component: Module2AddComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Module2RoutingModule {
}
