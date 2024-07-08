import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'app-bar-container',
  templateUrl: './bar-container.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  styleUrls: ['bar-container.css']
})
export class BarContainerComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}


