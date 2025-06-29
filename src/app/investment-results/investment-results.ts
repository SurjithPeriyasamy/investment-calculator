import { Component, computed, inject } from '@angular/core';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResultsComponent {
  // constructor(private investmentService:InvestmentResultsService){}
  investmentService = inject(InvestmentResultsService);
  // get tableData() {
  //   return this.investmentService.annualData;
  // }
  tableData = computed(() => this.investmentService.annualData());
  // tableData = this.investmentService.annualData.asReadonly();
}
