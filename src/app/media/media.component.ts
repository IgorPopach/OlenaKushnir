import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];

  msaapPlaylist: Track[] = [
    {
      title: 'Audio One Title',
      link: './../../assets/Малюй менеMx2!!!.mp3'
    },
    {
      title: 'Audio Two Title',
      link: 'Link to Audio Two URL'
    },
    {
      title: 'Audio Three Title',
      link: 'Link to Audio Three URL'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
