import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/data-table/data-table.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
