
//Function validateForm() {
    const nameinput = document.getElementById('name-input');

    if (nameinput.value === '') {
        alert('tolong masukin namamu!');
        
        } else {
            //If the input is valid, display the name in the result form
            document.getElementById('result-form').innerHTML=nameinput.value;
    }
