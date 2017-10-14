import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../shared/service/person.service";
import {Person} from "../../shared/model/person.model";

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  searchKey: string;
  show: boolean;
  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.show = false;
  }

  searchPerson() {
    if (!this.searchKey) {
      return;
    }
    this.personService.findPersons(this.searchKey)
      .subscribe(
        (response: Person[]) => {
          this.show = true;
          this.persons = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
