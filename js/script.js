
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
            alert("Sign up successful!");
        } else {
            alert("Invalid username. Sign up failed.");
        }
    })
    .catch(error => console.log(error));
  
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
        console.log(data)
        if (data.status === "user not found") {
            alert("user not found");
        } else if(data.status === "logged in") {
            alert("logged in");
        }else{
            alert("wrong password");
        }
    })
    .catch(error => console.log(error));
        
        
    })
  
    
}