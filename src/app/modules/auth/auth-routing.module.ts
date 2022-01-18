import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackLoginComponent } from 'src/app/components/feedback-login/feedback-login.component';

const routes: Routes = [
  {path:'',component:FeedbackLoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
