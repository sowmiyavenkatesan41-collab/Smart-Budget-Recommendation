function calculateBudget() {
    const income = Number(document.getElementById("income").value);
    const expenses = Number(document.getElementById("expenses").value);
    const result = document.getElementById("result");

    if (income <= 0 || expenses < 0) {
        result.innerHTML = "Please enter valid income and expenses.";
        return;
    }

    const savings = income - expenses;
    const percentage = (savings / income) * 100;

result.innerHTML = 
    "Monthly Income: ₹" + income + 
    "<br>Monthly Expenses: ₹" + expenses + 
    "<br>Monthly Savings: ₹" + savings;

document.getElementById("percentage").innerHTML =
    "Savings Percentage: " + percentage.toFixed(2) + "%";
    
}

function getRecommendation() {
    const income = Number(document.getElementById("income").value);
    const expenses = Number(document.getElementById("expenses").value);
    const result = document.getElementById("aiResult");

    if (income <= 0 || expenses < 0) {
        result.innerHTML = "Please enter valid income and expenses.";
        return;
    }

    let advice;

    if (expenses > income) {
        advice = "Your expenses are higher than your income. Try to reduce spending.";
    } else if (expenses > income * 0.7) {
        advice = "Your expenses are high. Try to save more money.";
    } else {
        advice = "Good job! Continue saving money.";
    }

    result.innerHTML = "AI Recommendation: " + advice;
}