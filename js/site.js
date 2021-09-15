
function calcMonthlyPayments() {
    let loanAmount = document.getElementById("loanAmount").value;
    let term = document.getElementById("term").value;
    let interestRate = document.getElementById("interestRate").value;

    let monthlyPayments = document.getElementById("monthlyPayments");
    let total = (loanAmount) * (interestRate/1200) / (1 - (1 + interestRate/1200)**(-60));

    monthlyPayments.innerHTML = `$${total.toFixed(2)}`;
}
