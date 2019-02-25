import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  language = 'UKR';

  changeLanguage = () => {
    if (this.language === 'UKR') {
      this.language = 'EN'
    } else {
      this.language = 'UKR'
    }
    console.log(this.language);
  }

  ngOnInit() {
  }

}
