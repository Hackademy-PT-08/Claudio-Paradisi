const categories = [
    {
        text:`Manga`,
        url: `#`,
    },
    {
        text:`Anime`,
        url:`#`,
    },
    {
        text:`Games`,
        url: `#`,
    },
    {
        text:`Recensioni`,
        url: `#`
    },
]
const menu = document.getElementById(`menu`);
const menuItems = [
    {
        text: `Home`,
        url: `#`,
        submenu: [],
    },
    {
        text: `Contatti`,
        url: `#`,
        submenu: [],
    },
    {
        text: `About`,
        url:`#`,
        submenu: [],
    },
    {
        text: `Categorie`,
        url: `#`,
        submenu:[...categories]
    }
];
console.log(menuItems)

//ho creato la struttura dati e procedo a creare le voci del menu dinamico con le maledette funzioni

function createMenuItems(target, menuItems){
    menuItems.forEach((item) => {
        //creo i tag
        let li =document.createElement(`li`);
        let anchor= document.createElement(`a`);
        //aggiungo le classi
        li.classList.add(`nav-item`);
        anchor.classList.add(`nav-link`);
        //aggiungo attributo e dato
        anchor.setAttribute(`href`, item.url);
        //aggiungo i nomi dei menu
        anchor.innerHTML = item.text;

        //setto i figli ai padri
        li.appendChild(anchor);
        target.appendChild(li);

        //richiamo la proprietà submenu
        if(item.submenu.length > 0){
            //true sottointeso, creo le nuove classi e trributi solo per i tag che hanno la condizione vera
            li.classList.add(`dropdown`)
            anchor.classList.add(`dropdown.toggle`)
            anchor.setAttribute(`data-bs-toggle`,`dropdown`)

            //creo il nuovo tag
            let dropdownDiv = document.createElement(`div`);
            dropdownDiv.classList.add(`dropdown-menu`)
            
            //immetto il submenu con un altro forEach
            
            item.submenu.forEach((submenuItem)=>{
                let a = document.createElement(`a`);
                a.classList.add(`dropdown-item`);
                a.setAttribute(`href`, submenuItem.url);
                a.textContent = submenuItem.text;
                dropdownDiv.appendChild(a);
                
                    let divideDiv = document.createElement(`div`);
                    divideDiv.classList.add(`dropdown-divider`);
                    dropdownDiv.appendChild(divideDiv)[3] ;
    
                
                

                li.appendChild(dropdownDiv);

                console.log(submenuItem)

                
            })
            
                
        } 
         
    });

};


const articlesRow = document.getElementById(`articlesRow`)






//come consigliato richiamo la funzione mentre la creo

createMenuItems(menu, menuItems);


function createArticleCards(target, articles){
    articles.forEach(article=>{
        let divCol = document.createElement(`div`);
        divCol.classList.add(`col-12`, `col-md-6`, `col-lg-6`, `mb-3`);
        let cardTemplate = `
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">${article.title}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${article.shortText}</h6>
            <p class="card-text">${article.fullText}</p>
           
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            <div class="img"><img class="img-fluid" src=${article.img} alt=""></div>
          </div>
        </div>
      `;
      divCol.innerHTML = cardTemplate;
      target.appendChild(divCol);
      
    })

}


createArticleCards(articlesRow, articles)