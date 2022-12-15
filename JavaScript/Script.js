
function myFunction() {
    var x = document.getElementById("flexSwitchCheckDefault").value;
    if (x == 1){
        document.body.style.backgroundColor = "black";
        document.getElementById("flexSwitchCheckDefault").value = 2;
        document.body.style.color = "white";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.getElementById("flexSwitchCheckDefault").value = 1;
        document.body.style.color = "black";
    }
}