function calculateInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").innerText = "Please enter valid values for Principal, Rate, and Time.";
    } else {
        var interest = (principal * rate * time) / 100;
        document.getElementById("result").innerText = "Simple Interest: $" + interest.toFixed(2);
    }
}