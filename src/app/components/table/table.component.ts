import { Component, OnInit } from '@angular/core';

import { MatTableModule } from '@angular/material/table'
import { ColorPreference } from '../../interfaces/color-preference'
import { PreferedColorService } from '../../services/prefered-color.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  colorPreferences: ColorPreference[] = []

  constructor (private preferedColorService: PreferedColorService) {}

  ngOnInit(): void {
    this.preferedColorService.load().subscribe((colors: ColorPreference[]) => {
      this.colorPreferences = colors
    })
  }

  displayedColumns = ['name', 'age', 'color']

  colorStyle (color: string): string { return `background-color: ${color}` }

}
