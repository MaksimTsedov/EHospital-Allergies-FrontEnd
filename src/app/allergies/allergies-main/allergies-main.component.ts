import { Component, OnInit } from '@angular/core';
import { AllergyView } from '../models/allergy-view';
import { AllergiesService } from '../allergies-service/allergies.service';

@Component({
  selector: 'app-allergies-main',
  templateUrl: './allergies-main.component.html',
  styleUrls: ['./allergies-main.component.css']
})
export class AllergiesMainComponent implements OnInit {

  allergies: Array<AllergyView>;

  constructor() { }

  ngOnInit() {
  }

}
