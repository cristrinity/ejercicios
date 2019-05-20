window.addEventListener('load', function () {
    console.log('Cargado');



const contacts = [
    {
      "name": "Piedad",
      "surname": "Dunfee",
      "email": "piedad.dunfee@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Elsie",
      "surname": "Calvery",
      "email": "elsie.calvery@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Rodger",
      "surname": "Pye",
      "email": "rodger.pye@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Mohammad",
      "surname": "Pye",
      "email": "mohammad.pacheo@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Emmie",
      "surname": "Derryberry",
      "email": "emmie.derryberry@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Lino",
      "surname": "Kottwitz",
      "email": "lino.kottwitz@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Brittney",
      "surname": "Ruddock",
      "email": "brittney.ruddock@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Jaimie",
      "surname": "Human",
      "email": "jaimie.human@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Darleen",
      "surname": "Kesten",
      "email": "darleen.kesten@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Georgie",
      "surname": "Hannold",
      "email": "georgie.hannold@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Doreatha",
      "surname": "Wheeler",
      "email": "doreatha.wheeler@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Christie",
      "surname": "Solum",
      "email": "christie.solum@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Carlita",
      "surname": "Whitmire",
      "email": "carlita.whitmire@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Luciana",
      "surname": "Jobe",
      "email": "luciana.jobe@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Sade",
      "surname": "Selig",
      "email": "sade.selig@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Devon",
      "surname": "Goodridge",
      "email": "devon.goodridge@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Bruna",
      "surname": "Starkes",
      "email": "bruna.starkes@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Glynis",
      "surname": "Hudnall",
      "email": "glynis.hudnall@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Anissa",
      "surname": "Leggett",
      "email": "anissa.leggett@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Moshe",
      "surname": "Moxley",
      "email": "moshe.moxley@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Shannon",
      "surname": "Olivieri",
      "email": "shannon.olivieri@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Janel",
      "surname": "Vandever",
      "email": "janel.vandever@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Tashia",
      "surname": "Fontes",
      "email": "tashia.fontes@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Merrilee",
      "surname": "Lynde",
      "email": "merrilee.lynde@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Coral",
      "surname": "Eastin",
      "email": "coral.eastin@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Shandi",
      "surname": "Hunsaker",
      "email": "shandi.hunsaker@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Wilburn",
      "surname": "Meyer",
      "email": "wilburn.meyer@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Quintin",
      "surname": "Schrom",
      "email": "quintin.schrom@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Claribel",
      "surname": "Sipes",
      "email": "claribel.sipes@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Nevada",
      "surname": "Chappelle",
      "email": "nevada.chappelle@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    }
  ]

  var nombres = '';
  var surname;
  var email;
  var country;
  var phone;
  var group;
  
//  sitio.innerHTML = contacts[0].name;

  function printList(){
    var sitio = document.querySelector(".list__results");
    for(let i = 0;i < contacts.length; i++){
      //sitio += sitio.innerHTML = contacts[i].name; 
        var list = document.createElement("p", i);
        list.innerHTML = contacts[i].name + ' ' + contacts[i].surname;
        document.querySelector(".list__results").appendChild(list);
    }
  }

printList();

/*
var editar = [];
        for (let key in contacts) {
            div = document.createElement('div');
            button = document.createElement('button')
            div.innerHTML = '<h3>'+ data[key].name + data[key].surname  +'</h3>';
            button.innerHTML = 'Editar';
            button.setAttribute('id', data[key].id);
            printDom.appendChild(div);
            div.appendChild(button);
            button.setAttribute('class', 'remove');
        }

*/

// document.getElementsByClassName('form')[0].addEventListener('submit', function (e) {
//     e.preventDefault();

//     let nombre = document.getElementsByClassName('form__group')[0].value;
//     let apellidos = document.getElementsByClassName('form__group')[1].value;
//     let email = document.getElementsByClassName('form__group')[2].value;
//     let tel = document.getElementsByClassName('form__group')[3].value;
//     let country = document.getElementsByClassName('form__group')[4].value;
//     let group = document.getElementsByClassName('form__group')[5].value;
    
   
})



