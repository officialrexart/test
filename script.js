
    function check() {
        let empty = document.getElementById("empty");
        let email = document.getElementById("email-input").value;
        if(email === "rex@gmail.com"){
            empty.textContent="Welcome rex we have been expecting you, go to your console for the secreat code  ";
        }
        else if(email === ""){
            empty.textContent="field cant be empty";
            empty.style.marginLeft = "30%";
        }
        else{
            empty.textContent="sorry we dont have any message for you thanks";
            empty.style.marginLeft = "20%";
              }
          
    }