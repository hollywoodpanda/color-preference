import { Component, Attribute, Input, ContentChild, ElementRef, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {

  @ContentChild(ElementRef) content!: ElementRef;

  @Input()
  value!: string

  constructor (@Attribute('title') public title: string) {}

  calculateStyle () {
    return `background-color: ${this.value}`
  }
  
}
 