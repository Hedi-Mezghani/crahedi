import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProjectPipePipe } from './searchFilter/list-project.pipe';
import { SidebareComponent } from './sidebare/sidebare.component';
import { LoginuserComponent } from './user/loginuser/loginuser.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { ListuserComponent } from './pages/listuser/listuser.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { ListprojectComponent } from './pages/project/listproject/listproject.component';
import { EditprojectComponent } from './pages/project/editproject/editproject.component';
import { AddprojectComponent } from './pages/project/addproject/addproject.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { DayPilotModule } from 'daypilot-pro-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddworksComponent } from './pages/works/addworks/addworks.component';
import { EditworksComponent } from './pages/works/editworks/editworks.component';
import { ListworksComponent } from './pages/works/listworks/listworks.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListWorksPipePipe } from './searchFilter/list-works-pipe.pipe';
import { DocumentsComponent } from './pages/documents/documents.component';
import { BultinDePaieComponent } from './pages/documents/bultin-de-paie/bultin-de-paie.component';
import { ComptActiviteComponent } from './pages/documents/compt-activite/compt-activite.component';
import { ContratComponent } from './pages/documents/contrat/contrat.component';
import { CraComponent } from './pages/cra/cra.component';
import { FraisComponent } from './pages/frais/frais.component';
import { AjouterFichesComponent } from './pages/mafiches/ajouter-fiches/ajouter-fiches.component';
import { ListFichesComponent } from './pages/mafiches/list-fiches/list-fiches.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { BultinDePaie1Component } from './pages/documents/bultin-de-paie1/bultin-de-paie1.component';



import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BultinDePaieUploadComponent } from './pages/documents/bultin-de-paie-upload/bultin-de-paie-upload.component';







@NgModule({
  declarations: [
    AppComponent,
    SidebareComponent,
    LoginuserComponent,
    ListProjectPipePipe,
    AdduserComponent,
    ListuserComponent,
    EdituserComponent,
    ListprojectComponent,
    EditprojectComponent,
    AddprojectComponent,
    AddworksComponent,
    EditworksComponent,
    ListworksComponent,
    ProduitComponent,
    DataTableComponent,
    ListWorksPipePipe,
    DocumentsComponent,
    BultinDePaieComponent,
    ComptActiviteComponent,
    ContratComponent,
    CraComponent,
    FraisComponent,
    AjouterFichesComponent,
    ListFichesComponent,
    UserDetailsComponent,
    BultinDePaie1Component,
    BultinDePaieUploadComponent,





  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DayPilotModule,
    Ng2SearchPipeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule







  ],

  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
