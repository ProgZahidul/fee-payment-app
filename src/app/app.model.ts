export interface FeePayment {
  feePaymentId: number;
  studentId: number;
  totalFeeAmount: number;
  discount: number;
  amountAfterDiscount: number;
  previousDue: number;
  totalAmount: number;
  amountPaid: number;
  amountRemaining: number;
  paymentDate: string; // Assuming a string for simplicity, you might want to use a Date object
  feePaymentDetails: FeePaymentDetail[];
}

export interface FeePaymentDetail {
  feePaymentDetailId: number;
  feePaymentId: number;
  feeTypeId: number;
  feeAmount: number;
  feeStructureId: number; // Ensure this property is defined
}
