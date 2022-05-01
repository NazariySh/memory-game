const section = document.querySelector('section')
// let wrap = document.querySelector('.wrap');
// wrap.style.backgroundImage = 'url(img/easy-game/easy-bg.jpg)';
const getData =[
   {imgSrc: "./img/easy-game/angular.svg", name: "image1"},
   {imgSrc: "./img/easy-game/aurelia.svg", name: "image2"},
   {imgSrc: "./img/easy-game/backbone.svg", name: "image3"},
   {imgSrc: "./img/easy-game/ember.svg", name: "image4"},
   {imgSrc: "./img/easy-game/java.png", name: "image5"},
   {imgSrc: "./img/easy-game/react.svg", name: "image6"},
   {imgSrc: "./img/easy-game/vue.svg", name: "image7"},
   {imgSrc: "./img/easy-game/node-js.jpg", name: "image8"},
   {imgSrc: "./img/easy-game/js-badge.svg", name: "image9"},
   {imgSrc: "./img/easy-game/python.png", name: "image10"},
   {imgSrc: "./img/easy-game/angular.svg", name: "image1"},
   {imgSrc: "./img/easy-game/aurelia.svg", name: "image2"},
   {imgSrc: "./img/easy-game/backbone.svg", name: "image3"},
   {imgSrc: "./img/easy-game/ember.svg", name: "image4"},
   {imgSrc: "./img/easy-game/java.png", name: "image5"},
   {imgSrc: "./img/easy-game/react.svg", name: "image6"},
   {imgSrc: "./img/easy-game/vue.svg", name: "image7"},
   {imgSrc: "./img/easy-game/node-js.jpg", name: "image8"},
   {imgSrc: "./img/easy-game/js-badge.svg", name: "image9"},
   {imgSrc: "./img/easy-game/python.png", name: "image10"}
 
];
//randomize the array
const randomize = ()=>{
    const cardData = getData;
 
    cardData.sort(()=> Math.random() - 0.5);
    return cardData
 
}


//create cards
const cardGenerator=()=>{
   const cardData = randomize();
   console.log(cardData);
 
   cardData.forEach(item => {
      // console.log(item);

   let card = document.createElement("div");
   let face = document.createElement("img");
   let back = document.createElement("div");
   card.classList="card";
   face.classList="face";
   back.classList="back";

   face.src = item.imgSrc;
   back.setAttribute('id', item.name)
   section.append(card);
   card.append(face);
   card.append(back);
   
   card.addEventListener('click', (e) =>{
      card.classList.toggle('toggleCard') ;  
      checkCards(e);
   })

   });
   
 const checkCards = (e)=>{
       let clickedCard = e.target;
       clickedCard.classList.add('flipped');
       let flippedCards = document.querySelectorAll('.flipped');

       if(flippedCards.length===2){
         console.log(flippedCards[0].getAttribute('id'));
         console.log(flippedCards[1].getAttribute('id'))
         if(flippedCards[0].getAttribute('id') === flippedCards[1].getAttribute('id')){
            console.log('match')
            flippedCards.forEach((card) =>{
               card.classList.remove('flipped');
          
            });
      
      setTimeout(()=> {
         let toggleCard = document.querySelectorAll('.toggleCard');
         toggleCard.forEach((card) =>{
        
          card.style.opacity = '0';
          
          card.classList.add('opacity');
          let opacity = document.querySelectorAll('.opacity');
         //  console.log(opacity.length);
          if(opacity.length==20){
            alert('You won')
         }
       });
      }, 500);
            
  
    
    
         }else{
            console.log('wrong');
            flippedCards.forEach((card) =>{
               card.classList.remove('flipped');
          
            });
      
           
      setTimeout(()=> {
        let toggleCard = document.querySelectorAll(".toggleCard")
       toggleCard.forEach((card) =>{
       card.classList.remove('toggleCard')}
       );}
      , 500);
           
            
    
         }
       
         
       }
       
       
  }
  
} 

cardGenerator();

