let budget = document.getElementById("presupuesto");
let expenseName = document.getElementById("nombreGasto");
let expenseAmount = document.getElementById("cantidadGasto");
let totalBudget = document.getElementById("totalPresupuesto");
let totalExpenses = document.getElementById("totalGastos");
let total = document.getElementById("saldo");

let currentBudget = 0;
let currentExpense = 0;
let difference = 0;

const loadBudget = () => {
  totalBudget.innerHTML = `$ ${budget.value}`;
  currentBudget = parseInt(budget.value);
  document.getElementById("botonBudget").disabled = true;
};

const addExpense = () => {
  const expenseValue = parseInt(expenseAmount.value);
  currentExpense += expenseValue;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>$ ${expenseName.value}</td>
    <td>$ ${expenseValue}</td>
    <td><button class="deleteExpense">Eliminar</button></td>
  `;

  const deleteButton = newRow.querySelector(".deleteExpense");
  deleteButton.addEventListener("click", function() {
    const row = this.parentNode.parentNode;
    const deletedExpense = parseInt(row.querySelector("td:nth-child(2)").textContent);
    currentExpense -= deletedExpense;
    row.remove();
    gastoActual();
  });

  document.getElementsByTagName("tbody")[0].appendChild(newRow);

  gastoActual();
  
  expenseName.value = "";
  expenseAmount.value = "";
};

const gastoActual = () => {
  difference = currentBudget - currentExpense;
  totalExpenses.innerHTML = `$ ${currentExpense}`;
  total.innerHTML = `$ ${difference}`;
};

const resetButton = () => {
  location.reload();
};