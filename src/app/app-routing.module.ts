import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NoteComponent } from './components/note/note.component';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashbaordComponent,
    
    children: [

      {
        path: '', redirectTo: 'note', pathMatch: 'full'
      },

      { path: 'note', component: NoteComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
