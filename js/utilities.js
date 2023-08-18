function getInputValue(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputVal = parseFloat(inputField.value);
    return inputVal;
}
function setText(elementId, text) {
    const currentId = document.getElementById(elementId);
    currentId.innerText = text.toFixed(2);
}
function calculationEntry(areaType,result){
    const calculation_entry = document.getElementById('calculation_entry');
    const count = calculation_entry.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${areaType} ${result.toFixed(2)} cm<sup>2</sup> <button class="bg-green-600 px-2 text-white rounded-md">convert</button>`;
    p.classList.add('mt-2')
    if(count < 15){
        calculation_entry.appendChild(p);
    }else{
        alert('please clear the all history');
        return;
    }
}