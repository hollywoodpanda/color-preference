import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { PreferedColorService } from '../../services/prefered-color.service';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDialogModule, ButtonComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit {

    constructor (private service: PreferedColorService, public dialogRef: MatDialogRef<DialogComponent>,) {}

  ngOnInit(): void {
  }

  color: string = '#000000'

  colorsGroup = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    age: new FormControl<number>(0, Validators.min(0)),
    color: new FormControl<string>('', Validators.required),
  })

  submit () {
    this.service.add({
      firstName: this.colorsGroup.controls.firstName.value || '',
      lastName: this.colorsGroup.controls.lastName.value || '',
      age: this.colorsGroup.controls.age.value || 0,
      color: this.colorsGroup.controls.color.value || ''
    })
    this.dialogRef.close()
  }
}
