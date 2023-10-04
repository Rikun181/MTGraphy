var name = document.forms['myForm']['name'];
var email = document.forms['myForm']['email'];
var pass = document.forms['myForm']['pass'];
var number = document.forms['myForm']['number'];
var birhtday = document.forms['myForm']['birthday'];
var subscribe = document.forms['myForm']['login'];

function validasi(){
    const form = document.forms['Join'];

    const name = form['nama'].value;
    const email = form['email'].value;
    const pass = form['password'].value;
    const age = form['age'].value;
    const term= form['term'].checked;

    //console.log(form)
    //return false

    let errorMsg = ''

    if(name == ""){
        errorMsg = "You must fill the username!!"  
    }else if(email == ""){
        errorMsg = "You must fill the email!!"
    }else if(pass.length < 6){
        errorMssg = "Password must be minimun 6 characters!!"
    }else if(age == ""){
        errorMsg = "You must fill the age!!"
    }else if(term == false){
        errorMsg = "Term must be agreed!!"
    }

    if(errorMsg){
        document.getElementById('error').innerHTML = errorMsg
        return false
    }
}
