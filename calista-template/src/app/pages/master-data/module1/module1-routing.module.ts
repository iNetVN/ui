import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Module1ListComponent} from "./module1-list/module1-list.component";
import {Module1AddComponent} from "./module1-add/module1-add.component";

const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: Module1ListComponent},
    {path: 'add', component: Module1AddComponent},
    {path: 'edit/:id', component: Module1AddComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Module1RoutingModule {
}
