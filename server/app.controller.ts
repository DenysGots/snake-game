import { Controller, Headers, Post, Req } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('save-results')
  public async getWeather(@Headers() headers: any, @Req() request: any) {
    // const clientIp = request.headers['x-forwarded-for'] || '94.76.111.246';
    //
    // return this.appService.getLocation(clientIp).pipe(
    //   mergeMap((clientLocation: LocationDto) => this.appService.getWeather(clientLocation)),
    //   map((weatherData: any) => this.appService.adjustReceivedData(weatherData))
    // );
  }
}
