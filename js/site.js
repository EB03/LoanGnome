

function calcMonthlyPayments() {
    let loanAmount = document.getElementById("loanAmount");
    let term = document.getElementById("term");
    let interestRate = document.getElementById("interestRate");

    let monthlyPayments = document.getElementById("monthlyPayments");

    monthlyPayments = (loanAmount) * (interestRate/1200) / (1-(1 + interestRate/1200)^(-term));
}
