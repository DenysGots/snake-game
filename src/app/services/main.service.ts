import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { StateService } from './state.service';
import { ChangeGameSpeedDelay, Difficulty, FoodAppearanceDelay } from "../interfaces/public-api";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private speedTimer: any;
  private difficultyChangeTimer: any;
  private foodSpawnTimer: any;

  constructor(
    private httpService: HttpService,
    private stateService: StateService
  ) {}

  initiateApplication() {
    this.stateService.resetState();
    this.startSnakePositionUpdateTimer();
    this.startDifficultyChangeTimer();
    this.startFoodSpawnTimer();

    // initiate movement by setting Timer and emitting snake change on each tick
    // initiate Timer to set food on each tick
    // update state on each action an rewrite view

    // initiate difficultyChangeTimer to change speed on it

    // save all Timers into fields, add logic to clear them up on demand
  }

  private startSnakePositionUpdateTimer() {
    this.stateService.getCurrentGameSpeed().subscribe((speed: number) => {
      this.speedTimer = setInterval(() => this.updateSnakePosition(), speed)
    });
  }

  private updateSnakePosition() {
    // get current snake data and direction
    // update snake cells
    // save them in state
  }

  private startDifficultyChangeTimer() {
    this.stateService.getCurrentGameDifficulty().subscribe((difficulty: Difficulty) => {
      // TODO: check if not hard already, if yes - skip this action
      this.difficultyChangeTimer = setInterval(() => this.updateDifficulty(difficulty), ChangeGameSpeedDelay[difficulty]);
    });
  }

  private updateDifficulty(difficulty: Difficulty) {
    // change difficulty and game speed, easy => medium => hard

    // restart food spawn timeout
    this.foodSpawnTimer && this.foodSpawnTimer.clearInterval();
  }

  private startFoodSpawnTimer() {
    this.stateService.getCurrentGameDifficulty().subscribe((difficulty: Difficulty) => {
      this.foodSpawnTimer = setInterval(() => this.generateFoodCell(), FoodAppearanceDelay[difficulty]);
    });
  }

  private generateFoodCell() {

  }

  private checkIfOutOfBound() {

  }

  private consumeFoodAndUpdateSnake() {

  }
}
