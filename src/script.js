/***Filtre des photos***/ 
window.onload = () => {
  let filters = document.querySelectorAll("#filters li");
  
  for (let filter of filters){
    filter.addEventListener("click", function(){
      let tag = this.id;

      let images = document.querySelectorAll("#gallery img");

      for(let image of images){
        image.classList.replace("active", "inactive");

        if(tag in image.dataset || tag === "tout"){
          image.classList.replace("inactive", "active");
        }
      }
    })
  }
  
}

/***Activation de la Barre de navigation des filtres***/ 
let itemsContainer = document.getElementById("filters");
let item = itemsContainer.getElementsByClassName ("item");

for (let i=0; i < item.length; i++) {
  item[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active");
    this.className += " active";
  })
}