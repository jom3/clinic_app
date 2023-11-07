import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Attention } from '../../models/attention';
import { AttentionService } from '../../services/attention.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attention-page',
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
  templateUrl: './attention-page.component.html',
  styleUrls: ['./attention-page.component.css'],
})
export class AttentionPageComponent {
  public attentions = signal<Attention[]>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['position','staff', 'pattient', 'status', 'options'];

  dataSource: any;

  constructor(
    private attentionService: AttentionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAttentions();
  }

  getAttentions() {
    this.attentionService.getAttentions().subscribe({
      next: (r) => {
        this.attentions.set(r);
        this.dataSource = new MatTableDataSource(this.attentions());
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

  serveAttention(id:string){
    this.attentionService.serveAttention(id).subscribe({
      next:r=>{
        this.getAttentions()
        console.log('serve')
      }
    })
  }
}
