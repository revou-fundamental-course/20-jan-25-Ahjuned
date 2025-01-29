// Function to calculate BMI
function calculateBMI(event) {
    event.preventDefault(); // Prevent default form submission

    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.querySelector('input[name="gender"]:checked'); // Get selected gender
    const age = parseInt(document.getElementById('age').value); // Get age

    // Validate inputs
    if (!height || !weight || !gender || !age) {
        alert('Mohon isi semua data dengan benar.');
        return;
    }

    const bmi = weight / (height * height); // Calculate BMI
    let category = '';
    let description = '';
    let healthRisk = '';

    // Determine BMI category, description, and health risk
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
        description = 'Anda memiliki kekurangan berat badan. Disarankan untuk berkonsultasi dengan dokter atau ahli gizi.';
        healthRisk = 'Risiko kesehatan: Penyakit kekurangan gizi dan penurunan sistem imun.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Berat badan normal';
        description = 'Berat badan Anda berada dalam kisaran yang sehat.';
        healthRisk = 'Risiko kesehatan: Anda berada dalam rentang berat badan yang sehat.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan berat badan';
        description = 'Anda memiliki kelebihan berat badan. Disarankan untuk menjaga pola makan sehat dan berolahraga.';
        healthRisk = 'Risiko kesehatan: Penyakit jantung, diabetes tipe 2, hipertensi.';
    } else {
        category = 'Obesitas';
        description = 'Anda masuk dalam kategori obesitas. Disarankan untuk berkonsultasi dengan dokter untuk pengelolaan berat badan.';
        healthRisk = 'Risiko kesehatan: Diabetes tipe 2, penyakit jantung, stroke, dan masalah pernapasan.';
    }

    // Display results
    document.getElementById('bmiValue').textContent = `BMI Anda: ${bmi.toFixed(2)}`;
    document.getElementById('bmiCategory').textContent = `Kategori: ${category}`;
    document.getElementById('bmiDescription').textContent = description;
    document.getElementById('healthRisk').textContent = healthRisk;

    // Show result container and download button
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('downloadBtn').classList.remove('hidden');
}

// Function to download results
function downloadResults() {
    const bmiValue = document.getElementById('bmiValue').textContent;
    const bmiCategory = document.getElementById('bmiCategory').textContent;
    const bmiDescription = document.getElementById('bmiDescription').textContent;
    const healthRisk = document.getElementById('healthRisk').textContent;

    const text = `Hasil BMI\n\n${bmiValue}\n${bmiCategory}\n${bmiDescription}\n${healthRisk}`;
    
    // Create a Blob and a download link
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'hasil_bmi.txt';
    link.click();
}

// Add event listener to the button
document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
document.getElementById('downloadBtn').addEventListener('click', downloadResults);
