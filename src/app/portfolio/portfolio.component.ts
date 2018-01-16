import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  items: IPortfolio[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        image: 'nail.jpg',
        title: 'Наращивание ногтей'
      },
      {
        image: 'portfolio-8.jpg',
        title: 'Наращивание волосы холодное микро, средние, большое капсулы'
      },
      {
        image: 'portfolio-1.jpg',
        title: 'Увеличение губ гелем'
      },
      {
        image: 'portfolio-3.jpg',
        title: 'Лазерное удаление тата и татуаж'
      },
      {
        image: 'portfolio-7.jpg',
        title: 'Лазерное удаление татуировок'
      },
      {
        image: 'portfolio-4.jpg',
        title: 'Наращивание ресницы 2D/3D'
      },
      {
        image: 'portfolio-5.jpg',
        title: 'Растушевка и татуаж'
      },
      {
        image: 'portfolio-6.jpg',
        title: 'Растушевка и татуаж'
      },
    ];
  }

}

interface IPortfolio {
  image: string;
  title: string;
}
