 const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight > 0 && height > 0) {
        
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        const category = getBmiCategory(bmi);

        document.getElementById('bmi-value').innerText = bmi.toFixed(2);
        document.getElementById('description').innerText = "Status: " + category;

    } else {
        alert("Please fill in all fields!");
    }

});

function getBmiCategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi <= 24.9) {
        return "Normal weight (Eutrophic)";
    } else if (bmi <= 29.9) {
        return "Overweight (Pre-obesity)";
    } else if (bmi <= 34.9) {
        return "Obesity Class I";
    } else if (bmi <= 39.9) {
        return "Obesity Class II (Severe)";
    } else {
        return "Obesity Class III (Morbid or Severe)";
    }
}
              