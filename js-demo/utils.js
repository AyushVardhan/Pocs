function showMessage(msg){
    document.getElementById('message').textContent = msg;
    // document.getElementById('message').innerHTML = msg;
}

function changePercentOff(percent){
    document.getElementById('percent-off').textContent = percent + "% OFF";
}