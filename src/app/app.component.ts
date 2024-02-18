import { Component, OnInit } from '@angular/core';
import { FeePaymentService } from './fee-payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  feePayments: any[] = [];

  constructor(private feePaymentService: FeePaymentService) { }

  ngOnInit(): void {
    this.fetchFeePayments();
  }

  fetchFeePayments(): void {
    this.feePaymentService.getFeePayments().subscribe(
      (data) => {
        this.feePayments = data;
      },
      (error) => {
        console.error('Error fetching fee payments:', error);
      }
    );
  }
}
