import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Speciality } from '../../models/speciality';
import { SpecialityService } from '../../services/speciality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speciality-page',
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
  templateUrl: './speciality-page.component.html',
  styleUrls: ['./speciality-page.component.css'],
})
export class SpecialityPageComponent {
  public specialities = signal<Speciality[]>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'desc', 'status'];

  dataSource: any;

  constructor(
    private specialityService: SpecialityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.specialityService.getSpecialities().subscribe({
      next: (r) => {
        this.specialities.set(r);
        this.dataSource = new MatTableDataSource(this.specialities());
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
