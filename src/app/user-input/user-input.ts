import { Component } from '@angular/core';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInputComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;
  constructor(private investmentService: InvestmentResultsService) {}
  onSubmit() {
    const data = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    };
    this.investmentService.calculateInvestmentResults(data);
    this.initialInvestment = 0;
    this.annualInvestment = 0;
    this.expectedReturn = 0;
    this.duration = 0;
  }
}
