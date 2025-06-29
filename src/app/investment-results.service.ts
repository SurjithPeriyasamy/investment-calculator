import { Injectable, signal } from '@angular/core';
import { AnnualData, InvestemntInput } from './investment-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  annualData = signal<AnnualData[] | undefined>(undefined);
  calculateInvestmentResults(data: InvestemntInput) {
    const { initialInvestment, duration, annualInvestment, expectedReturn } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualData.set(annualData);
  }
}
