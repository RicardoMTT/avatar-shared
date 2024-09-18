import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AvatarService } from './services/avatar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'avatar-shared-angular';
  constructor(private avatarService: AvatarService) {}
  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });
  public URLPublica = '';
  public finalizado = false;
  public isLoading = false;

  filePath;
  public selectedFile: File;

  chooseFile(event) {
    this.selectedFile = event.target.files;
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
      this.avatarService.avatarObservableData = this.filePath;
    };
    reader.readAsDataURL(file); //usado para leer el contenido del especificado Blob o File.
    /*
    En ese momento, el atributo result contiene  la información como una URL representando la información del archivo como una cadena de caracteres codificados en base64
    */
  }
}
