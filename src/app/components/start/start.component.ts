import {Component} from '@angular/core';
import {StatusService} from "../../service/status.service";
import {ProfilesDto} from "../../dto/profiles.dto";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  isDisabled: boolean[] = [false, false, false];
  selectedOption: number | null = null;
  selectedStyle: any = { 'background-color': 'var(--lila-b)'};
  profilesDto: ProfilesDto[] = [];
  help: ProfilesDto[] = [];


  constructor(private service:StatusService) { }
  ngOnInit() {
    this.loadData();



  }
  loadData(){
    this.service.getProfiles().subscribe({
      next: (data) => {
        console.log(data);
        this.profilesDto = data;

      },
    });

  }

  toggleDisabled(index: number) {
    if (this.selectedOption === index) {
      this.isDisabled.fill(false);
      this.selectedOption = null;
      this.selectedStyle = { 'background-color': 'var(--lila-b)' };
      this.loadData();
    } else {
      this.isDisabled.fill(true);
      this.isDisabled[index] = false;
      this.selectedOption = index;
      this.selectedStyle = { 'background-color': 'var(--color-primary)' };
      if(index === 1){
        const country = 'Bolivia';
        this.profilesDto = this.profilesDto.filter(profile => profile.country === country);
      }else if(index === 2){
        const country = 'Argentina';
        this.profilesDto = this.profilesDto.filter(profile => profile.country === country);
      }
    }
  }



}
