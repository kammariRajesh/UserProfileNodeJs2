
document.querySelector("#profile").addEventListener("click", function(){
  fetch('/api/loggedIn')
  .then(response => response.json())
  .then( data => {
    console.log(data);
    let nameEl = document.getElementById("name");
    let emailEl = document.getElementById("mail");
    nameEl.textContent = "Name: "+ data.success.Name;
    emailEl.textContent = "Email: "+ data.success.Email;
    console.log(data.success.Email);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
});
