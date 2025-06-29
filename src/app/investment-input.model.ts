export interface InvestemntInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}
export interface AnnualData {
  annualInvestment: number;
  interest: number;
  totalAmountInvested: number;
  totalInterest: number;
  valueEndOfYear: number;
  year: number;
}
