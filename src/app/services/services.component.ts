import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  items: IService[];

  constructor() {
    this.items = [
      {
        image: 'srv6.png',
        title: 'Парикмахерская',
        description: 'Мелирование, укладки, стрижка и наращивание волос'
      },
      {
        image: 'srv2.png',
        title: 'Ногтевые услуги',
        description: 'Наращивание ногтей гелем, дизайн, маникюр, шеллак'
      },
      {
        image: 'srv3.png',
        title: 'Ресницы и растушевка',
        description: 'Наращивание ресниц, растушёвка'
      },
      {
        image: 'srv4.png',
        title: 'Удаление тату',
        description: 'Лазерное удаление тату и растушевка'
      },
      {
        image: 'srv1.png',
        title: 'Уход за бородой',
        description: 'Отрастить и стричь бороду, уход за бородой'
      },
    ];
  }

  ngOnInit() {
  }

}

interface IService {
  image: string;
  title: string;
  description: string;
}
