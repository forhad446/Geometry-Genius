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
    const deleteHistory = document.createElement('p');
    p.innerHTML = `${count + 1}. ${areaType} ${result.toFixed(2)} cm<sup>2</sup> <button class="bg-green-600 px-2 text-white rounded-md">convert</button>`;
    p.classList.add('mt-2')
    if(count < 15){
        calculation_entry.appendChild(p);
    }else{
        if(count == 16){
            alert('please clear the all history');
            return;
        }
        deleteHistory.innerText = 'Delete all history';
        deleteHistory.setAttribute('onclick','deleteHistory()')
        deleteHistory.setAttribute('id','deleteHistory')
        deleteHistory.classList.add('bg-red-600','px-2','text-white','rounded-md','mt-2','cursor-pointer')
        calculation_entry.appendChild(deleteHistory);
    }
}
function deleteHistory(){
    const parent = document.getElementById('deleteHistory').parentNode;
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild)
    }
}