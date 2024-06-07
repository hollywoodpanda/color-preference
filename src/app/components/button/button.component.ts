import { Attribute, Component, Input } from '@angular/core';

import { MatButton } from '@angular/material/button'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButton],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {


  @Input()
  disabled: boolean = false

  constructor(@Attribute('title') public title: string) {}

}
