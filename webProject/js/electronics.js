const list = document.getElementById('list');

//get method

function getElectonics() {

    fetch('http://localhost:3000/electronice')
      .then(function (response) {
          
          response.json().then(function (electronics) {
              appendToDOM(electronics);
              console.log("get realizat");
          });
      });
      
};

//inserare elemente din fisier JSON in DOM

function appendToDOM(electronics) {
    
    for (let i = 0; i < electronics.length; i++) {
       
       
        //create elements
        let name = document.createElement('h3');
        name.innerText = electronics[i].name;
        console.log(electronics[i].name);

        let id = document.createElement('p');
        let Details = document.createElement('p');
        Details.innerHTML = "Details";
        id.innerText = electronics[i].details;

        let img = document.createElement('img');
        img.src = electronics[i].img;
        

        let div = document.createElement('div');
        let container = document.createElement('div');
        
        
        container.appendChild(name);
        container.appendChild(img);
        container.appendChild(Details);
        container.appendChild(id);
        
        

      

        
        list.appendChild(container);
        
    }
}


getElectonics();