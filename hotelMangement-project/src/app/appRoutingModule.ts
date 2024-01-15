import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { routes } from './app.routes';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
    {path:" ",component:LandingComponent},
    // lazy loading
     {path : "admin", loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
     {path : "owner", loadChildren:()=>import("./owner/owner.module").then(m=>m.OwnerModule)},
     {path : "user", loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)}]


     @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutingModule {
}
