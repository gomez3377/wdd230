const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++){
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlaces = document.createElement('p');
        let prophetImg = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        birthPlaces.textContent = 'Place of Birth: ' + prophets[i].birthplace; 
        prophetImg.src = prophets[i].imageurl;
        prophetImg.alt = 'prophetImg';

        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlaces);
        card.appendChild(prophetImg);
        
        document.querySelector('div.cards').appendChild(card);
    }
});

WebFont.load({
    google: {
        families: [

            'Volkorn',
            'Cinzel'
        ]
    }
});
