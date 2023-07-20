
window.onload = () => {
    const signupBtn = document.getElementById("signupbtn");
  
    signupBtn.addEventListener("click", () => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;


      const user = {
        username,
        password,
        email,
        phone,
      }
      console.log(username,password,email,phone)
      
      if (username != "" && password!= "" && email!= "" && phone!= "" ){
      fetch("http://localhost/project/Full-stack-mini-project/api/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === "Sign up successful") {
            document.querySelector(".all-fields").style.display = "none"
            document.querySelector(".invalid-user").style.display = "none"
            document.querySelector(".valid-user").style.display = "block"
        } else {
            document.querySelector(".all-fields").style.display = "none"
            document.querySelector(".invalid-user").style.display = "block"
            document.querySelector(".valid-user").style.display = "none"
        }
    })
    .catch(error => console.log(error));

    }else{
        document.querySelector(".all-fields").style.display = "block"
        document.querySelector(".invalid-user").style.display = "none"
        document.querySelector(".valid-user").style.display = "none"
    }
    })


    const signinBtn = document.getElementById("signinbtn");

    signinBtn.addEventListener("click",()=>{

        const username = document.getElementById("signinusername").value;
        const password = document.getElementById("signinpassword").value;

        const user = {
            username,
            password,
          }

        fetch("http://localhost/project/Full-stack-mini-project/api/signin.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      })
      .then(response => response.json())
      
      .then(data => {

        if (data.status === "user not found") {
            document.querySelector(".invalid-u").style.display = "block"
            document.querySelector(".invalid-p").style.display = "none"
            document.getElementById("signinusername").value = "";
            document.getElementById("signinpassword").value = "";
        } else if(data.status === "logged in") {
            localStorage.setItem('username', username);
            window.location.href = "welcome.html";
            
        }else{
            document.querySelector(".invalid-u").style.display = "none"
            document.querySelector(".invalid-p").style.display = "block"
            document.getElementById("signinpassword").value = "";
        }
    })
    .catch(error => console.log(error));
        
        
    })
  
    
}