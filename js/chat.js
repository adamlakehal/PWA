
let form = document.getElementById('form');
let nom = document.getElementById('name');
let message = document.getElementById('message');

    form.addEventListener('submit',(e) =>{

        e.preventDefault();

        if(nom.value == ""){
            alert('Veuillez entrer un nom.')
        }
        if(message.value == ""){
            alert('Veuillez entrer un message.')
        }

        console.log(nom.value);

       let  item={
            id : Math.floor(Date.now()/100),
            nom:nom.value,
            message:message.value
        }

        let items = [];

        if(localStorage.getItem('item')){
            let insertItems = JSON.parse(localStorage.getItem('item'));
            item = items;
        }
        console.log(item);

        items.push(item);
        localStorage.setItem('nom',nom.value);
    })