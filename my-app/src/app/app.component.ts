import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  desc = 'my super app';
  products = [
    {
      title: "Продукт 1",
      desc: "Описание 1"
    },
    {
      title: "Продукт 2",
      desc: "Описание 2"
    },
    {
      title: "Продукт 3",
      desc: "Описание 3"
    }
  ]
}
