import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private httpService: HttpService, private stateService: StateService) {}

  initiateApplication() {
    this.stateService.resetState();

    // initiate movement by setting interval and emitting snake change on each tick
    // initiate interval to set food on each tick
    // update state on each action an rewrite view
  }
}
