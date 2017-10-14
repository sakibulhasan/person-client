import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import {Person} from '../model/person.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()
export class PersonService {
  private serviceHostPath: string;

  constructor(private http: Http) {
    this.serviceHostPath = environment.servicePath;
  }

  public getPersons(): Observable<Person[]> {
    const apiUrl = this.serviceHostPath + '/persons';

    return this.http.get(apiUrl, null)
      .map((response: Response) => {
        const res: Person[] = JSON.parse(JSON.stringify(response.json()));
        return res;
    });
  }
}
