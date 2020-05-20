import { TransferHttpCacheModule } from '@nguniversal/common';
import { StoreModule } from '@ngrx/store';

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { Config } from './app.config';
import { routes } from './app.routing';

import { metaReducers, reducers } from './reducers';

import { MainPageComponent } from './components/main-page/main-page.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { BoardCellComponent } from './components/board-cell/board-cell.component';

export function initApp(config: Config) {
  return () => config.init();
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GameBoardComponent,
    BoardCellComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [Config],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
