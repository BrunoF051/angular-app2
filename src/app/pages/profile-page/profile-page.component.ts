import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormValidateReactiveComponent } from 'components/form-validate-reactive/form-validate-reactive.component';
import { TitleCasePipe } from '@angular/common';
import { AuthorizationService } from 'app/services/authorization.service';
import { CommonModule } from '@angular/common';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [FormValidateReactiveComponent, CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  username: string | null = null;
  KeycloakProfile: Promise<KeycloakProfile> | null = null;

  constructor(
    private route: ActivatedRoute,
    private authorizationService: AuthorizationService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get('username');
    });
    this.KeycloakProfile = this.authorizationService.getUserProfile();
    console.log(this.KeycloakProfile);
  }
}
