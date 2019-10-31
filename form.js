"use strict"

function FormsValidation() {

    var firstname = document.getElementById("fname").value;
    var Lastname = document.getElementById("lname").value;
    var Address = document.getElementById("address").value;
    var Emailaddress = document.getElementById("E-address").value;
    var pasword = document.getElementById("pasword").value;
    var comment=document.getElementById("comment").value;
    var indexAt= Emailaddress.indexOf("@");
    var indexPoint= Emailaddress.indexOf(".",indexAt);
    var indexCaractere=Emailaddress.substring(indexPoint+1).length ;  


    
if(( firstname=="")||(Lastname=="")||(Address=="")||(pasword=="")||(comment=="")||(Emailaddress=="")){

alert("Vous avez oublié de remplir un ou plusieur champ. Merci de recommencer")}

if((indexAt < 1) || (indexPoint<1)||(indexCaractere>3)||(indexCaractere<2)){
alert("Please enter correct email")

} 
validationPsw()


 
/*
if((upperCaseLetters<1 )&&(lowerCaseLetters<1)&&(numbers<1)&&(pasword.length<8)){
alert("entre a valid gggg Password")}
}
*/
}
function validationPsw(){

    let regx = /([aA-Z]|[0-9])/g;
 if (pasword.value.length<7){
 alert("invalid Password moins de 8 caractèr fffffe");
add.focus();
return false;
  }
  else
if (pasword.value.match(regx))
{return true} 
else alert("entre a valid password")
}
//var myForm =document.getElementById("registation-form");
//myForm.addEventListener("submit",validationPsw);






function resetForms() {
    firstname=("");
    Lastname=("");
    pasword=("");
    Emailaddres=("");
    comment=("");
    Address=("");
}
   
