import { Injectable } from '@angular/core'
import { ColorPreference } from '../interfaces/color-preference'
import COLOR_PREFERENCES from '../resources/color-preferences.json'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class PreferedColorService {

    private dataSource: BehaviorSubject<ColorPreference[]> = new BehaviorSubject<ColorPreference[]>([])

    constructor () {
        this.start()
    }

    private start (): void {
        COLOR_PREFERENCES.forEach((color: ColorPreference) => this.dataSource.value.push(color))
    }

    load (): BehaviorSubject<ColorPreference[]> { return this.dataSource }

    add (colorPreference: ColorPreference): void { 
        console.log('Adding ', colorPreference)
        this.dataSource.next([...this.dataSource.value, colorPreference])
        console.log('Colors now', this.dataSource.value)
    }

}