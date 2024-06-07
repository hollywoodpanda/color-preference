import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PreferedColorService } from './services/prefered-color.service';
import { ColorPreference } from './interfaces/color-preference';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, TableComponent, StatisticsComponent, DialogComponent, NgxMatColorPickerModule,MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'color-preference';

  stats0To12 = ''
  stats13To18 = ''
  stats19To30 = ''
  stats31To50 = ''
  stats51Plus = ''

  colors: ColorPreference[] = []

  constructor(
    private preferedColorService: PreferedColorService, 
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.preferedColorService.load().subscribe(
      colors => {
        this.colors = colors
        this.calculateStats()
      }
    )
    
  }

  private calculateStats () {

    this.stats0To12 = this.calculateStatsFor(this.colors, 0, 12)
    this.stats13To18 = this.calculateStatsFor(this.colors, 13, 18)
    this.stats19To30 = this.calculateStatsFor(this.colors, 19, 30)
    this.stats31To50 = this.calculateStatsFor(this.colors, 31, 50)
    this.stats51Plus = this.calculateStatsFor(this.colors, 51)


  }

  private calculateStatsFor(colors: ColorPreference[], initialAge: number, finalAge?: number) {

    return colors
      .filter(color => color.age >= initialAge && (finalAge ? color.age <= finalAge : true))
      .map(color => color.color)
      .sort((a, b) => colors.filter(v => v.color === a).length - colors.filter(v => v.color === b).length)
      .pop() || '-'
    
  }

  onAddPreferedColorClick () {

    this.dialog.open(DialogComponent, {})

  }

}
