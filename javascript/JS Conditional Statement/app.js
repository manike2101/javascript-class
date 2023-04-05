// If Conditional Statement
// var age = 21;
// if(age > 18){
    // alert("User Is Old Enough To Vote");

// }

// If else conditional Statement
// var age = 15;
// if(age > 18){
    // alert("User Is Old Enough To Register For Schorlarship");
// }
// else{
    // alert("User Is Not Old Enough For Schorlarship");
// }

var age = 19;
if (age < 19){
    alert("User is not old enough to vote")
}
else{
    alert("User is not old to register for scholarship")
}
document.getElementById("submit").addEventListener("click", function(){
    var age = document.getElementById("age").value;
    if(age > 18){
        alert("User Is Old Enough To Vote");
    }else{
        alert("User Is Not Old Enough To Vote")
    }
})




