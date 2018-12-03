import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllergyView } from '../models/allergy-view';
import { AllergiesService } from '../allergies-service/allergies.service';

@Component({
  selector: 'app-allergies-list',
  templateUrl: './allergies-list.component.html',
  styleUrls: ['./allergies-list.component.css']
})
export class AllergiesListComponent implements OnInit {
  allergies: Array<AllergyView>;

  constructor(private router: Router, private allergiesService: AllergiesService) {
    this.allergiesService.getAllergies()
      .subscribe( data => {
        this.allergies = data;
      });
  }

  ngOnInit() {
  }

  addAllergy(): void {
    this.router.navigate(['add-allergy']);
  }

}
