import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllergyView } from '../models/allergy-view';
import { AllergiesService } from '../allergies-service/allergies.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-allergy-add',
  templateUrl: './allergy-add.component.html',
  styleUrls: ['./allergy-add.component.css']
})
export class AllergyAddComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private allergiesService: AllergiesService) {
    this.addForm = this.formBuilder.group({
      pathogen: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.addForm.valid) {
      return;
    }

    this.allergiesService.createAllergy(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['allergies']);
      });
  }

  cancel() {
    this.router.navigate(['allergies']);
  }
}
