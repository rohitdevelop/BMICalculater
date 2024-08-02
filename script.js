let btn = document.querySelector('.button');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    let heightInput = document.querySelector('#height').value;
    let weightInput = document.querySelector('#weight').value;

    let Height = parseFloat(heightInput);
    let Weight = parseFloat(weightInput);

    let results = document.querySelector('.result');

    if (heightInput === '' || isNaN(Height) || Height <= 0) {
        results.innerHTML = "Invalid height input";
        results.style.color = "red";
    } else if (weightInput === '' || isNaN(Weight) || Weight <= 0) {
        results.innerHTML = "Invalid weight input";
        results.style.color = "red";
    } else {
        let bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
        results.style.color = "black";
        if (bmi <= 18.6) {
            results.innerHTML = `Your BMI is (${bmi}). You need to gain weight.
                                          suggesation for you
                                 Try eating more healthy, high-calorie foods 
                                 and talk to a nutritionist for advice.`;
            results.style.color = "green";
        } else if (bmi >= 24.9) {
            results.innerHTML = `Your BMI is (${bmi}). You need to lose weight.
                                             suggesation for you
                                Try to exercise more and eat healthier to help 
                                you lose weight.`;
            results.style.color = "red";
        } else {
            results.innerHTML = `Your BMI is ${bmi}. Your weight is perfect.`;
            results.style.color = "green";
        }
        
    }

});
