import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Illness } from '../../models/illness';
import { IllnessService } from '../../services/illness.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-illness-page',
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
  templateUrl: './illness-page.component.html',
  styleUrls: ['./illness-page.component.css'],
})
export class IllnessPageComponent {
  public illness = signal<Illness[]>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'desc', 'status'];

  dataSource: any;

  constructor(
    private illnessService: IllnessService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getIllness();
  }

  getIllness() {
    this.illnessService.getIllness().subscribe({
      next: (r) => {
        this.illness.set(r);
        this.dataSource = new MatTableDataSource(this.illness());
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
