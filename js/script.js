// Function to calculate BMI
function calculateBMI(event) {
    event.preventDefault(); // Prevent default form submission

    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;

    // Validate inputs
    if (!height || !weight || !gender) {
        alert('Mohon isi semua data dengan benar.');
        return;
    }

    const bmi = weight / (height * height); // Calculate BMI
    let category = '';

    // Determine BMI category
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Berat badan normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Obesitas';
    }

    // Display results
    document.getElementById('bmiValue').textContent = `BMI Anda: ${bmi.toFixed(2)}`;
    document.getElementById('bmiCategory').textContent = `Kategori: ${category}`;
    document.getElementById('result').classList.remove('hidden');
}

// Add event listener to the button
document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
