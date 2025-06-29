import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header';
import { UserInputModule } from './user-input/user-input.module';
import { InvestmentResultsModule } from './investment-results/investment-results.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, UserInputModule, InvestmentResultsModule],
})
export class AppModule {}
