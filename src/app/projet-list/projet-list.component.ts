import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit {
  myResume!: Projet[];
  myExeperiences!: Projet[];
  myProjet!: Projet[];
  me!: Projet;
  contact!: Projet;

  ngOnInit() {
    this.me = {
      description: 'Hello I\'m Axel LOPES, I\'m a computer engineering student, I\'m a passionate and motivated developer, specializing in software development. I\'m in apprenticeship at Capgemini at Toulouse. I\'ve learned to code in my BTS and since I try to constantly improve my skills and learn new things.',
      imageUrl: './assets/photo.jpg'
    }
    this.myResume = [
      {
        title: 'Bac professionnel Système Numérique',
        description: 'High school degree in Digital System',
        date: '2016 - 2019',
        location: 'Lycée st pierre - Tarbes - France'
      },
      {
        title: 'BTS Systèmes Numérique',
        description: '2 years college degree in Digital System',
        date: '2019 - 2021',
        location: 'Lycée International Victor Hugo - Colomiers - France'
      },
      {
        title: 'Bachelor concepteur développeur d\'applications',
        description: 'Bachelor in application developpement',
        date: '2021 - 2022',
        location: 'EPSI - Toulouse - France'
      },
      {
        title: 'Diplome d\'ingenieur informatique',
        description: 'Computer engineer degree',
        date: '2022 - today',
        location: 'CESI - LABEGE - France'
      }
    ];

    this.myExeperiences = [
      {
        title: 'Appliance maintenance technician intern',
        date: '02/2019 - 03/2019',
        location: 'Ets Bégaries - Argelès-Gazost - France'
      },
      {
        title: 'Computer maintenance technician intern',
        date: '10/2020 - 06/2020',
        location: 'LSA Multimedia - Colomiers - France'
      },
      {
        title: 'Students on ATM project',
        date: '02/2022 - today',
        location: 'Capgemini - Toulouse - France'
      }
    ];

    this.myProjet = [
      {
        title: 'Initcube',
        date: '2021',
        description: 'In this project my mission was to create a program in C++ which could receive via a socket server JSON frames and translate them in a format called "protocol" (which I defined with the person in charge of recovering the frames) and transmit them on a serial link connected to an Xbee antenna.',
        link: 'https://github.com/dremaux/initcubesolcom2021',
        linkIMG: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      },
      {
        title: 'EasySave',
        date: '2023',
        description: 'This C# project is a WPF interface that allows users to automatically backup files or folders to another location. The program was designed to be user-friendly, with a simple and intuitive interface that allows users to easily configure backups and schedule them as needed. ',
      },
      {
        title: 'Web Site',
        date: '2023',
        description: 'This project is this web site, it have to purpose to describe myself and my project.',
        link: 'https://github.com/aLopes1/Site_web',
        linkIMG: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      },
      {
        title: 'CoSNET',
        date: 'NOW',
        description: 'This is my apprenticeship project, the main purpose is to analyze the air traffic in France and display alert to the air traffic controller witch can contact the aircraft to avoid problem.It\'s a C++ legacy project.'
      }
    ];

    this.contact = {
      description: 'axellopes2001@hotmail.fr'
    }
  }
}
