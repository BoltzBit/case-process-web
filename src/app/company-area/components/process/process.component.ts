import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, TreeModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {

}
