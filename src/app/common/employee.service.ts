import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from './models/employee';

@Injectable()
export class EmployeeService{
constructor (private _httpClient: HttpClient){}

getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>('http://localhost:52681/api/EmployeeEmpty');
}
}