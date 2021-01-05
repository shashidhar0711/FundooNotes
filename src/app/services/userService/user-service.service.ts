import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpserviceService } from '../httpService/httpservice.service'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpserviceService) { }

  registerUser(data) {
    console.log(" data in user service ", data);
    return this.httpService.post('user/userSignUp', data);
  }

  loginUser(data) {
    return this.httpService.post('user/login', data);
  }
}
