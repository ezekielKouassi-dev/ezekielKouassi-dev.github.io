import { Component } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {
  images: any[] = [
    {
      id: 1,
      name: 'agri1',
      path: '../../../assets/img/agri1.webp'
    },
    {
      id: 2,
      name: 'agri2',
      path: '../../../assets/img/agri2.webp'
    }
  ];
}
