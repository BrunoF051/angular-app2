import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormValidateReactiveComponent } from 'components/form-validate-reactive/form-validate-reactive.component';
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [FormValidateReactiveComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  username: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get('username');
    });
  }
}
