'use strict';

function checkLogin()
{
    let correct_username = "Admin";
    let correct_password = "TheMaster";


    // ask for username
    let username = prompt("Enter username", "");
    
    if (username === null || username === "") {
        
        alert("Canceled");

    } else if (username !== correct_username) {

        alert("I don't know you");

    } else {

        // ask for password
        let password = prompt("Enter password", "");
    
        if (password === null || password === "") {
            
            alert("Canceled");
    
        } else if (password !== correct_password) {
    
            alert("Wrong password");
    
        } else {

            alert("Welcome!");

        }

    }
}

checkLogin();
