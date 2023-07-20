

window.onload = () => {
    
    const username = localStorage.getItem('username');


        document.getElementById("welcome").innerText = "Welcome " + username;
    
}