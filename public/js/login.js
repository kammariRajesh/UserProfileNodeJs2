
let Email = document.getElementById("email");
let Password = document.getElementById("password");
form.addEventListener("submit",() =>{
  const login = {
    email:Email.value,
    password:Password.value
  }
  fetch("/api/login",{
    method:"POST",
    body:JSON.stringify(login),
    headers:{"Content-Type":"application/json"}
  }).then(res => res.json())
    .then(data =>{
      if(data.status == "error"){
        success.style.display = "none";
        error.style.display = "block";
        error.innerText = data.error;
      }else{
        window.location.href = "/loggedIn";
        success.style.display = "block";
        error.style.display = "none";
        success.innerText = data.success;
      }
    })
});