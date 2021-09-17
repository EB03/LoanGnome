
function getUserInput() {
    let a = {}
    a.loanAmount = document.getElementById("loanAmount").value;
    a.term = document.getElementById("term").value;
    a.interestRate = document.getElementById("interestRate").value;
    a.results = document.getElementById("results");
    a.payments = document.getElementById("monthlyPayments");

    calcMonthlyPayments(a);
    displayPayments(a);
}

function calcMonthlyPayments(a) {
    let month = 0;
    let principal;
    let interest;
    let totalInterest = 0;
    let balance = a.loanAmount;

    a.templateRows = "";

    a.totalMonthly = (a.loanAmount) * (a.interestRate/1200) / (1 - (1 + a.interestRate/1200)**(-60));

    for (let i = 0; i < a.term; i++) {
        month++;
        interest = balance * a.interestRate/1200;
        principal = a.totalMonthly - interest;
        totalInterest = totalInterest + interest;
        balance = balance - principal;
        a.templateRows += `<tr><td>${month}</td><td>$${a.totalMonthly.toFixed(2)}</td><td>${principal.toFixed(2)}</td><td>${interest.toFixed(2)}</td><td>${totalInterest.toFixed(2)}</td><td>${balance.toFixed(2)}</td></tr>`;
    }

    return a;
}

function displayPayments(a) {
    a.payments.innerHTML = `$${a.totalMonthly.toFixed(2)}`;
    a.results.innerHTML = a.templateRows;
}