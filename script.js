const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>Old news t'as kapté message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector('#msg-container').innerHTML += newMessage;


  function counter() {

  let messagesCount = document.querySelectorAll('p').length;
  document.querySelector('#count').textContent = messagesCount;  
}
counter()


let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;


function deleteMessage() {
for (let i = 0; i < document.querySelectorAll(".delete").length; i++) {
  document.querySelectorAll(".delete")[i].addEventListener('click',
    function () {
      this.parentNode.remove();
      // document.querySelector(".delete").parentNode.remove()

      if (this.parentNode.remove()) {
        // messagesCount --;
        document.querySelector('#count').textContent -= messagesCount ;
      }
      counter()
    }
  );
 }
}
deleteMessage()

 // quand on clique > ok
document.querySelector('#btn-add').addEventListener('click',
function () {

  let inputTexte = "";

 // le message tapé dans la barre > récupérer l'input

  inputTexte = document.querySelector('#add-message').value
  console.log(inputTexte);

    // incrémenter un nouveau message avec son input

  let Message2 = ` <div class="row new-row">
<img class="avatar" src="images/avatar-1.jpg" />
<div class="text-container">
  <h6>Marine</h6>
  <p> ${inputTexte} </p>
</div>
<span class="delete">✖</span>
</div> `;

 // ajouter nouveau message dans le container

document.querySelector('#msg-container').innerHTML += Message2

// enlever le texte dans le placeholder



if (document.querySelector('#add-message').value =""){
  document.querySelector('#add-message').value ="le truc d'avant"

}

counter()
deleteMessage()
} 
)

// -------------------------------------

function searchh() {   
document.querySelector('#btn-search').addEventListener('click',
    function() {

    
      let textToCompare = document.querySelector('#search-message').value.toLowerCase()
      
      console.log(textToCompare.length)


for (let i=0; i < document.querySelectorAll('h6').length ; i++ ) {

if (document.querySelectorAll('h6')[i].textContent.toLowerCase().includes(textToCompare)=== false) {

const match = document.querySelectorAll('h6')[i].parentNode.parentNode;

match.style.display ="none";
} else {
  const match = document.querySelectorAll('h6')[i].parentNode.parentNode;
  match.style.display ="flex";
}

document.querySelector('#search-message').value ="";

} 
} 
)
};
searchh()


