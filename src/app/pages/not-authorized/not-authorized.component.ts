import { AuthorizationService } from './../../services/authorization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.css'],
  standalone: true
})
export class NotAuthorizedComponent implements OnInit {

  constructor(private authorizationService : AuthorizationService) { }

  ngOnInit() {
    setTimeout(() => {
      this.authorizationService.redirectToLoginPage();
    }, 5000)
  }

}
