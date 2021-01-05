import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import {MatIconModule} from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';
import { NoteComponent } from './components/note/note.component';
import { TakenoteComponent } from './components/takenote/takenote.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { IconComponent } from './components/icon/icon.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashbaordComponent,
    NoteComponent,
    TakenoteComponent,
    DisplaynoteComponent,
    IconComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatMenuModule,MatDialogModule,
    BrowserAnimationsModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,
    MatIconModule,MatInputModule,MatButtonModule,MatCardModule,HttpClientModule,MatSidenavModule,
    MatToolbarModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdateComponent]

})
export class AppModule { }