import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  characterId: number | null = null;
  characterDetails: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.characterId = +idParam;
        this.loadCharacterDetails();
      }
    });
  }

  loadCharacterDetails() {
    if (this.characterId !== null) {
      this.apiService.getDataById(this.characterId).subscribe(data => {
        this.characterDetails = data;
      });
    }
  }

  goBack() {
    this.router.navigate(['/details']);
  }
}

