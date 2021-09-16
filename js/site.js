
function calcMonthlyPayments() {
    let loanAmount = document.getElementById("loanAmount").value;
    let term = document.getElementById("term").value;
    let interestRate = document.getElementById("interestRate").value;
    let results = document.getElementById("results");



    // Monthly Payments
    let payments = document.getElementById("monthlyPayments");
    let totalMonthly = (loanAmount) * (interestRate/1200) / (1 - (1 + interestRate/1200)**(-60));

    payments.innerHTML = `$${totalMonthly.toFixed(2)}`;

    let month = 0;
    let principal;
    let interest;
    let totalInterest = 0;
    let balance = loanAmount;

    let templateRows = "";

    for (let i = 0; i < term; i++) {
        month++;
        interest = balance * interestRate/1200;
        principal = totalMonthly - interest;
        totalInterest = totalInterest + interest;
        balance = balance - principal;
        templateRows += `<tr><td>${month}</td><td>$${totalMonthly.toFixed(2)}</td><td>${principal.toFixed(2)}</td><td>${interest.toFixed(2)}</td><td>${totalInterest.toFixed(2)}</td><td>${balance.toFixed(2)}</td></tr>`;
    }

    results.innerHTML = templateRows;
}

// Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(-Number of Months) )
// Remaining Balance before the very first month equals the amount of the loan.
// Interest Payment = Previous Remaining Balance * rate/1200
// Principal Payment = Total Monthly Payment - Interest Payment
// At end each month, Remaining Balance = Previous Remaining Balance - principal payments