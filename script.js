let total = 0;

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = Number(document.getElementById("expenseAmount").value);

  if (!name || !amount) {
    alert("Please enter an expense name and amount.");
    return;
  }

  const item = document.createElement("li");
  item.textContent = `${name}: ₹${amount}`;

  document.getElementById("expenseList").appendChild(item);

  total += amount;
  document.getElementById("total").textContent = total;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
