function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser2(data))
}

function displayUser2(data){
  const ul = document.getElementById('user-list');
   for(let user of data){
    console.log(user);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
   }
 }