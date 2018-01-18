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

  readonly userName: string = 'beauty_nargis_salon';
  readonly instagramBaseURL = 'https://www.instagram.com/p/';

  items: IInstaItem[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    this.items = [];

    const query = `select * from json where url='https://www.instagram.com/${this.userName}/?__a=1'`;

    const qs = `?q=${query}&format=json&_${this.userName}`;
    this.http.get('https://query.yahooapis.com/v1/public/yql' + qs).subscribe(resp => {
      console.log('Response:', resp);
      if (resp['query']['results']) {
        this.items = this.normalizeItems(resp['query']['results']['json']['user']['media']['nodes']);
      }
    });
  }

  normalizeItems(nodes) {
    const items: IInstaItem[] = [];

    for (const node of nodes) {
      items.push({
        href: `${this.instagramBaseURL}${node.code}`,
        thumbnail_src: node.thumbnail_src
      });
    }

    return items;
  }

}
