import { Component, Inject, OnInit } from '@angular/core';
import { DossierService } from 'src/app/service/dossier.service';
import { StorageService } from 'src/app/service/storage.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { Cloudinary } from 'cloudinary-core';
import { PdfService } from 'src/app/service/pdf.service';

@Component({
  selector: 'app-bultin-de-paie-upload',
  templateUrl: './bultin-de-paie-upload.component.html',
  styleUrls: ['./bultin-de-paie-upload.component.css']
})
export class BultinDePaieUploadComponent implements OnInit {
  selectedFile:any
  filenames: string[] = [];
  utilisateurId: number;
  cloudinary: Cloudinary;
  pdfUrl: string;
  pdfData!:any[]
  constructor(
    public dialogref: MatDialogRef<BultinDePaieUploadComponent>,
    private dossierService: DossierService,
    private fileService :FileUploadService,
    private storgservice:StorageService,
    private pdfService:PdfService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.utilisateurId = data.utilisateurId;
    this.cloudinary = new Cloudinary({
      cloud_name: 'syfax',
      api_key: '836798284526591',
      api_secret: 'TfEOEiQuibpTmKfFST_bF-AOJgw'
    });
    this.pdfUrl='https://res.cloudinary.com/syfax/image/upload/v1697214393/ufpo9ygwmimxltl9vkxy.pdf'
   }

  ngOnInit(): void {
    this.getPdfData()
  }

  isUserAdmin(): boolean {
    const user = this.storgservice.getUser();
    return user && user.roles && user.roles.includes('ROLE_ADMIN');
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files;

}
onSubmit(): void {
  if (this.selectedFile && this.selectedFile.length > 0) {
    const formData: FormData = new FormData();

    for (const file of this.selectedFile) {
      formData.append('files', file, file.name);
    }

    // Ajoutez l'ID de l'utilisateur à la requête directement ici
    formData.append('user_id', this.utilisateurId.toString());

    this.fileService.uploadFiles(this.selectedFile, this.utilisateurId).subscribe(
      response => {
        console.log('Fichiers téléchargés avec succès:', response);
        // Faites quelque chose avec la réponse du serveur si nécessaire
        this.filenames = response;
        this.getPdfData();
      },
      error => {
        console.error('Erreur lors du téléchargement des fichiers:', error);
        // Gérez les erreurs ici
      }
    );
  } else {
    console.log('Aucun fichier sélectionné.');
  }
}
getPdfData(): void {
  const userRoles = this.storgservice.getUser().roles;
  console.log('User Roles:', userRoles);

  if (userRoles && userRoles.includes('ROLE_ADMIN')) {
    // Si l'utilisateur est un administrateur, récupérez les données PDF
    this.pdfService.getPdfData().subscribe(data => {
      this.pdfData = data;
    });
  } else if (userRoles && userRoles.includes('ROLE_USER')) {
    // Si l'utilisateur est un utilisateur normal, récupérez les données PDF appropriées
    // Utilisez this.storgservice.getUser().id pour obtenir l'ID de l'utilisateur
    this.pdfService.getPdfDataForUser(this.storgservice.getUser().id).subscribe(data => {
      this.pdfData = data;
    });
  } else {
    // Gérer d'autres rôles ou aucune information d'utilisateur
    console.error('Rôle d\'utilisateur non reconnu ou aucune information d\'utilisateur disponible.');
  }
}


}
