// Listen for submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  // UI
  const UIamount = document.getElementById("amount").value;
  const UIinterest = document.getElementById("interest").value;
  const UIyears = document.getElementById("years").value;

  // Calculate
  const principal = parseFloat(UIamount);
  const calcInterest = parseFloat(UIinterest) / 100 / 12;
  const calcdPayments = parseFloat(UIyears) * 12;

  // Computing Monthly Payments
  const x = Math.pow(1 + calcInterest, calcdPayments);
  const monthly = (principal * x * calcInterest) / (x-1);
  const monthlyPayment = monthly.toFixed(2);

  // Compute Interest
  const totalInterest = (monthly * calcdPayments - principal).toFixed(2);

  // Compute Total Payment
  const totalPayment = (monthly * calcdPayments).toFixed(2);

  // Show Results
  

  e.preventDefault();
}
