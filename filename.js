
function alertSubFunc(event) {
    event.preventDefault();

    var emailValue = document.getElementById("email").value;
    alert("Email entered: " + emailValue);
}

window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
};