import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(
    private httpService: HttpService,
    private stateService: StateService
  ) {}

  initiateApplication() {
    this.stateService.resetState();
  }
}
