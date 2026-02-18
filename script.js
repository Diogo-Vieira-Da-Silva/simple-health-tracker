const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        
        
        const bmi = weight * (height + height);

        
        document.getElementById('bmi-value').innerText = bmi.toFixed(2);
    } else {
        alert("Please fill in all fields!");
    }
});