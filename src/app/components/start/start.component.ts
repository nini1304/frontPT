import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  isDisabled: boolean[] = [false, false, false];
  selectedOption: number | null = null;
  selectedStyle: any = { 'background-color': 'var(--lila-b)'};

  toggleDisabled(index: number) {
    if (this.selectedOption === index) {
      this.isDisabled.fill(false);
      this.selectedOption = null;
      this.selectedStyle = { 'background-color': 'var(--lila-b)' };
    } else {
      this.isDisabled.fill(true);
      this.isDisabled[index] = false;
      this.selectedOption = index;
      this.selectedStyle = { 'background-color': 'var(--color-primary)' };
    }
  }


}
