const list = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');
button.onclick = function() {
if (input.value === "") {
    alert("Please add a scritpure");
}
else {
    let favScripture = input.value;
    input.value = '';

     
    const listScripture = document.createElement('li');
    const listScriptureText = document.createElement('span');
    const listScriptureButton = document.createElement('button')
    
    listScripture.appendChild(listScriptureText);
    listScriptureText.textContent = favScripture;
    listScripture.appendChild(listScriptureButton);
    listScriptureButton.textContent = '❌'  
    list.appendChild(listScripture);
    
    
    
    listScriptureButton.addEventListener('click', e => {
        list.removeChild(listScripture)
        input.focus();
    } )


input.focus();
}
}
