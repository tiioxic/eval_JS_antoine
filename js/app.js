const burger = document.querySelector('#burgerMenu');
const navList = document.querySelector('#navItems');
const urlRandomUser = 'https://randomuser.me/api/';
const urlRandomComments = 'https://www.spreadshirt.fr/shopData/reviews?productTypeId=';
const btnReset = document.querySelector('#reset');
const imgProfile = document.querySelector('#imgProfile');
const firstName = document.querySelector('#firstName');
const firstName2 = document.querySelector('#firstName2');
const lastName = document.querySelector('#lastName');
const job = document.querySelector('#job');
const job2 = document.querySelector('#job2');
const tel = document.querySelector('#tel');
const mail = document.querySelector('#email');
const age = document.querySelector('#age');
const ville = document.querySelector('#ville');
const pays = document.querySelector('#pays');
const base = document.querySelector('#base');
const comment = document.querySelector('#comment')
const comment2 = document.querySelector('#comment2')
const comment3 = document.querySelector('#comment3')

burger.addEventListener('click', () => {
    if (window.innerWidth < 480) {
        navList.classList.toggle('dispNone');
    }
});
/**
 * 
 * @param {string} data 
 */
// fonction permet d'ajouter le contenu à la page html avec vérification du sexe de la personne
const createCard = (data) => {
    // console.log(data)
    imgProfile.src = data.results[0].picture.large;
    firstName.textContent = data.results[0].name.first;
    firstName2.textContent = data.results[0].name.first;
    lastName.textContent = data.results[0].name.last;
    age.textContent = data.results[0].dob.age;
    tel.textContent = data.results[0].phone;
    mail.textContent = data.results[0].email;
    pays.textContent = data.results[0].location.country;
    ville.textContent = data.results[0].location.city;

    if (data.results[0].gender === 'male') {
        job.textContent = 'développeur';
        job2.textContent = 'développeur';
        base.textContent = 'basé';

    } else {
        job.textContent = 'développeuse';
        job2.textContent = 'développeuse';
        base.textContent = 'basée';

    }
}

/**
 * 
 * @param {sring} url 
 */
// fonction permet d'obtenir une reponse en json
const fetchUrl = async (url) => {
    const data = await fetch(url);
    if (data.status == 200) { //permet de vérifier si la requete est correct
        const response = await data.json();
        createCard(response);
    } else {
        return console.log('erreur');
    }

};
fetchUrl(urlRandomUser);

/**
 * 
 */
// fonction pour reset 
const changeUser = () => {
    fetchUrl(urlRandomUser)
}
btnReset.addEventListener('click', changeUser)
/**
 * 
 * @param {string} url 
 * @returns 
 */
const fetchUrlComment = async (url) => {
    const data = await fetch(url);
    commentRandom(response);
    if (data.status == 200) { //permet de vérifier si la requete est correct
        const response = await data.json();
        commentRandom(response);
    } else {
        return console.log('erreur');
    }

};

const min = 812;
const max = 818;

// génére un nombre aléatoire entre 812 et 818
const commentRandom = () => {
    const nbrRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    const apiComment = urlRandomComments + nbrRandom + '&locale=fr_FR';
    fetchUrlComment(apiComment);
    


    console.log(apiComment)

};



console.log(commentRandom())

