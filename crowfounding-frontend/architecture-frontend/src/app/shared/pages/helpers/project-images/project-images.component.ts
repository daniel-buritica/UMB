import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.scss']
})
export class ProjectImagesComponent implements OnInit {
  private imageUrls: string[] = [
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-1.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-2.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-3.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-4.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-5.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-6.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-7.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-8.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-9.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-10.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-11.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-12.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-13.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-14.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-15.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-16.png',
    'https://www.exploramas.com/wp-content/uploads/2019/07/ods-objetivos-desarrollo-sostenible-17.png'
  ];

  selectedImageUrls: string[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.getRandomImage(i);
    }
  }

  getRandomImage(index: number): void {
    const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
    this.selectedImageUrls[index] = this.imageUrls[randomIndex];
  }
}
