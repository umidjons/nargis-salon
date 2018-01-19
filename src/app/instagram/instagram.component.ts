import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface IInstaItem {
  href: string;
  thumbnail_src: string;
}

@Component({
  selector: 'ns-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  items: IInstaItem[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    this.items = [];

    this.http.get('/insta_feeds.json').subscribe(resp => {
      console.log('Response:', resp);
      if (resp) {
        this.items = <IInstaItem[]>resp;
      }
    });
  }

}
