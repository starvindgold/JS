const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if (height === '' || isNaN(height)){
        result.innerHTML = "Please enter valid height.";
    }else if (weight === '' || isNaN(weight)){
        result.innerHTML = "Please enter valid weight.";
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;
        if(bmi<18.5){
            const underweight = document.createElement('p');
            underweight.textContent = `You are underweight.`;
            result.appendChild(underweight);
        } else if(bmi>=18.5 && bmi<24.9){
            const normal = document.createElement('p');
            normal.textContent = `You have a normal weight.`;
            result.appendChild(normal);
        } else {
            const overweight = document.createElement('p');
            overweight.textContent = `You are overweight.`;
            result.appendChild(overweight);
        }
    }

});

