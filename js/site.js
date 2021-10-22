
function getUserInput() {
    let loan = {}
    loan.loanAmount = document.getElementById("loanAmount").value;
    loan.term = document.getElementById("term").value;
    loan.interestRate = document.getElementById("interestRate").value;
    loan.results = document.getElementById("results");
    loan.payments = document.getElementById("monthlyPayments");
    loan.totalPrincipal = document.getElementById("totalPrincipal");
    loan.totalInterest = document.getElementById("totalInterest");
    loan.totalCost = document.getElementById("totalCost");

    calcMonthlyPayments(loan);
    displayPayments(loan);
}

function calcMonthlyPayments(loan) {
    let month = 0;
    let principal;
    let interest;
    let totalInterest = 0;
    let balance = loan.loanAmount;
    let monthlyPayments = parseInt(loan.payments);
    //Only allow numeric values
    loan.regex = /\B(?=(\d{3})+(?!\d))/g;

    loan.templateRows = "";

    loan.totalMonthly = (loan.loanAmount) * (loan.interestRate/1200) / (1 - (1 + loan.interestRate/1200)**(-loan.term));

    for (let i = 0; i < loan.term; i++) {
        month++;
        interest = balance * loan.interestRate/1200;
        principal = loan.totalMonthly - interest;
        totalInterest = totalInterest + interest;
        balance = balance - principal;
        
        if (balance < 0.00) {
            balance = 0.00;
        }
        loan.templateRows += `<tr><td>${month}</td><td>$${loan.totalMonthly.toFixed(2).replace(loan.regex, ",")}</td><td>$${principal.toFixed(2).replace(loan.regex, ",")}</td><td>$${interest.toFixed(2).replace(loan.regex, ",")}</td><td>$${totalInterest.toFixed(2).replace(loan.regex, ",")}</td><td>$${balance.toFixed(2).replace(loan.regex, ",")}</td></tr>`;
    }
    loan.principal = principal;
    loan.allInterest = totalInterest;
    return loan;
}

function displayPayments(loan) {
    loan.loanAmount = parseFloat(loan.loanAmount);

    loan.totalPrincipal.innerHTML = `$${loan.loanAmount.toFixed(2).replace(loan.regex, ",")}`;
    loan.totalInterest.innerHTML = `$${loan.allInterest.toFixed(2).replace(loan.regex, ",")}`;
    let totalCost = loan.loanAmount + loan.allInterest;
    loan.totalCost.innerHTML = `$${totalCost.toFixed(2).replace(loan.regex, ",")}`;

    loan.payments.innerHTML = `$${loan.totalMonthly.toFixed(2).replace(loan.regex, ",")}`;
    loan.results.innerHTML = loan.templateRows;
}