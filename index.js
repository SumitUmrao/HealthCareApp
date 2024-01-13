const medicineData = {
    aspirin: {
      uses: 'Pain relief, fever reduction, anti-inflammatory',
      sideEffects: 'Nausea, heartburn, stomach pain',
      dosage: 'Follow doctor\'s prescription'
    },
    ibuprofen: {
      uses: 'Pain relief, fever reduction, anti-inflammatory',
      sideEffects: 'Upset stomach, mild heartburn, dizziness',
      dosage: 'Follow doctor\'s prescription'
    },
    paracetamol: {
      uses: 'Pain relief, fever reduction',
      sideEffects: 'Allergic reactions are rare',
      dosage: 'Follow doctor\'s prescription'
    },
    // Add more medicines as needed
  };

  function searchMedicine() {
    const medicineInput = document.getElementById('medicine-input').value.toLowerCase();
    const medicineInfoContainer = document.getElementById('medicine-info');
    const selectedMedicine = medicineData[medicineInput];

    if (selectedMedicine) {
      // Display medicine information
      medicineInfoContainer.innerHTML = `
        <h2>${medicineInput.toUpperCase()}</h2>
        <p>Uses: ${selectedMedicine.uses}</p>
        <p>Side Effects: ${selectedMedicine.sideEffects}</p>
        <p>Dosage: ${selectedMedicine.dosage}</p>
      `;
    } else {
      // Display message if medicine is not found
      medicineInfoContainer.innerHTML = '<p>Medicine not found</p>';
    }
  }