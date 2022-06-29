import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

export interface questions {
  question: string;
  number: string;
}

const QUESTIONS_DATA: questions[] = [
 {question: "Was the Guardhouse prepared for your arrival/departure?", number: "one"},
 {question: "Was the staff attentive, timely, and professional?", number: "two"},
 {question: "Did you feel the customer facilities provided you ample space to allow you to safely operate your tractor or trailer?", number: "three"},
 {question: "Was there any information that was missin in your trip that was needed to successfully completer your pickup/delivery?", number: "four"},
 {question: "Did this location have appropriate facilities and amenities available during your time spent there?", number: "five"},


]

@Component({
  selector: 'app-location-feedback',
  templateUrl: './location-feedback.page.html',
  styleUrls: ['./location-feedback.page.scss'],
})
export class LocationFeedbackPage implements OnInit {

  constructor() { }

  public formData: FormGroup

  questions = QUESTIONS_DATA;

  ngOnInit() {
    this.formData = new FormGroup({
      one: new FormControl(),
      two: new FormControl(),
      three: new FormControl(),
      four: new FormControl(),
      five: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.formData.value)
  }

}
