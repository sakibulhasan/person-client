import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../shared/service/person.service';
import {Person} from '../../shared/model/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  loading: boolean;
  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  private getPersons() {
    this.loading = true;
    this.personService.getPersons()
      .subscribe(
        (response: Person[]) => {
          this.persons = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
