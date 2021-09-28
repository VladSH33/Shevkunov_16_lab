import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vkpage',
  templateUrl: './vkpage.component.html',
  styleUrls: ['./vkpage.component.css']
})
export class VkpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  url = "./assets/photo.jpg";
  hidden = false;

  onClickHideButton() {
    this.hidden = !this.hidden;
  }
}
