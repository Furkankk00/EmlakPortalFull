import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBuildingsComponent } from './components/admin/admin-buildings/admin-buildings.component';
import { AdminMainComponent } from './components/admin/admin-main/admin-main.component';
import { OperationClaimAddComponent } from './components/admin/operation-claim-add/operation-claim-add.component';
import { OperationClaimListComponent } from './components/admin/operation-claim-list/operation-claim-list.component';
import { UserOperationClaimAddComponent } from './components/admin/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimListComponent } from './components/admin/user-operation-claim-list/user-operation-claim-list.component';
import { UsersComponent } from './components/admin/users/users.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { BuildingsComponent } from './components/ui/buildings/buildings.component';
import { MainComponent } from './components/ui/main/main.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [


  {path:'',component:MainComponent,children:[
    {path:'',component:BuildingsComponent,canActivate:[AuthGuard]},
    {path:'buildings',component:BuildingsComponent,canActivate:[AuthGuard]},
    {path:'building-detail/:id',component:BuildingsComponent,canActivate:[AuthGuard]}
  ]},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'admin',canActivate:[AuthGuard,AdminGuard],component:AdminMainComponent,children:[
    {path:'',component:AdminBuildingsComponent,canActivate:[AuthGuard,AdminGuard]},
    {path:'buildings',component:AdminBuildingsComponent,canActivate:[AuthGuard,AdminGuard]},
    {path:'users',component:UsersComponent,canActivate:[AuthGuard,AdminGuard]},
    {path:'operation-claim',children:[
      {path:'list',component:OperationClaimListComponent,canActivate:[AuthGuard,AdminGuard]},
      {path:'add',component:OperationClaimAddComponent,canActivate:[AuthGuard,AdminGuard]},
    ]},
    {path:'user-operation-claim',children:[
     {path:'list',component:UserOperationClaimListComponent,canActivate:[AuthGuard,AdminGuard]},
     {path:'add',component:UserOperationClaimAddComponent,canActivate:[AuthGuard,AdminGuard]}
   ]},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
