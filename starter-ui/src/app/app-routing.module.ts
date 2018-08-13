import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
    {path: 'employee', loadChildren: './pages/employee/employee.module#EmployeeModule'},
    {path: 'test', loadChildren: './pages/test/test-component.module#TestComponentModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
