import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing/app-routing.module';

import {AppComponent} from './components/app/app.component';
import {FcardActionsComponent} from './components/fcard-actions/fcard-actions.component';
import {FcardDetailComponent} from './components/fcard-detail/fcard-detail.component';
import {FcardsListComponent} from './components/fcards-list/fcards-list.component';
import {HttpClientModule} from '@angular/common/http';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

import {FlashCardsApiService} from './service/flash-cards-api.service';
import {MessageService} from './service/message.service';

@NgModule({
  declarations: [
    AppComponent,
    FcardsListComponent,
    FcardActionsComponent,
    FcardDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [FlashCardsApiService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
