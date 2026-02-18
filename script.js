const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        
          const heightInMeters = height / 100;
        const bmi = weight/(heightInMeters * heightInMeters);
 const category = getBmiCategory(bmi);
        
        document.getElementById('bmi-value').innerText = bmi.toFixed(2);
    } else {
        alert("Please fill in all fields!");
    }

    function getBmiCategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight (Eutrophic)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "Overweight (Pre-obesity)";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        return "Obesity Class I";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
        return "Obesity Class II (Severe)";
    } else {
        return "Obesity Class III (Morbid or Severe)";
    }
}

});