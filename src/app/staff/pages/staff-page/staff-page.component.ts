import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Staff } from '../../models/staff';
import { StaffService } from '../../services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css'],
})
export class StaffPageComponent {
  public staff = signal<Staff[]>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'department', 'speciality', 'status'];

  dataSource: any;

  constructor(
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStaffs();
  }

  getStaffs() {
    this.staffService.getStaffs().subscribe({
      next: (r) => {
        this.staff.set(r);
        console.log(r)
        this.dataSource = new MatTableDataSource(this.staff());
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  register() {
    this.router.navigate([`${this.router.url}/register`]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
