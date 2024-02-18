function disableButtons() {
    document.querySelectorAll('.primary').forEach(function(btn) {
        btn.disabled = true;
    });
}


function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}