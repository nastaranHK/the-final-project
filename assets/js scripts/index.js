const userName = document.getElementById("username");
const thirdRow =document.getElementById("thirdrow");
const fourthRow = document.getElementById("fourthrow");
const top10 = [
  {id: 1, image: "./assets/images/top 10 pics/assassin class top 10.jpg", title: "Assasination Classroom", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  {id: 2, image: "./assets/images/top 10 pics/free guy top 10.jpg", title: "Free Guy", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  {id: 3, image: "./assets/images/top 10 pics/jjk top 10.jpg", title: "Jujutsu Kaisen", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  {id: 4, image: "./assets/images/top 10 pics/barbie top 10.jpg", title: "Barbie", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  {id: 5, image: "./assets/images/top 10 pics/my hero academia top 10.png", title: "My Hero Academia", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  {id: 6, image: "./assets/images/top 10 pics/red notice top10.jpg", title: "Red Notice", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  {id: 7, image: "./assets/images/top 10 pics/naruto top 10.jpg", title: "Naruto", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  {id: 8, image: "./assets/images/top 10 pics/the creator top 10.jpg", title: "The Creator", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  {id: 9, image: "./assets/images/top 10 pics/tokyo ghoul top 10.jpg", title: "Tokyo Ghoul", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  {id: 10, image: "./assets/images/top 10 pics/scream top 10.jpg", title: "Scream", introduction: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati."},
  
];
const comingSoon=[
    { id:1, image:"./assets/images/coming soon/chicken run coming soon.jpg", title:"Chicken Run 2"},
    { id:2, image:"./assets/images/coming soon/deadpoolcoming soon.jpg", title:"DeadPool3"},
    { id:3, image:"./assets/images/coming soon/wish coming soon.jpg", title:"Wish"},
    { id:4, image:"./assets/images/coming soon/joker coming soon.jpg", title:"Joker: Folie à Deux "}
]



top10.map(item=>{ 
    const cardModel = document.createElement('div')
    cardModel.classList.add('card');
    cardModel.classList.add('mx-1');
    cardModel.classList.add('mb-3');
    cardModel.classList.add('col-md-3');
    cardModel.classList.add('card-css');
    cardModel.innerHTML=` 
    <img src="${item.image}" class="card-img-top mt-1" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">
        ${item.introduction}
      </p>
      <a href="#" class="btn btn-css">Read More</a>
    </div>`
   thirdRow.appendChild(cardModel)

});

comingSoon.map(item=>{
    const cardModel =document.createElement('div')
    cardModel.classList.add('card');
    cardModel.classList.add('mx-1');
    cardModel.classList.add('mt-1');
    cardModel.classList.add('col-md-3');
    cardModel.classList.add('card-css');
    cardModel.innerHTML=`
     <img src='${item.image}' class="card-img-top" alt="..." />
    <div class="card-body">
      <h3 class="card-title">${item.title}</h3>
      <a href="#" class="btn btn-css">More Details</a>`

    fourthRow.appendChild(cardModel)

});

