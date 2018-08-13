import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticateGuard} from 'inet-ui';

const routes: Routes = [
    {path: '', redirectTo: 'master-data', pathMatch: 'full'},
    {
        path: 'home', loadChildren: './pages/home/home.module#HomeModule'
    },
    {
        path: 'master-data', loadChildren: './pages/master-data/master-data.module#MasterDataModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
