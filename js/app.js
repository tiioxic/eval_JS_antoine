const burger=document.querySelector('#burgerMenu');
const navList = document.querySelector('#navItems');
const urlRandomUser = 'https://randomuser.me/api/';
const btnReset = document.querySelector('#reset').addEventListener('click', async () => {
    createCard    
});
const imgProfile = document.querySelector('#imgProfile');
const firstName = document.querySelector('#firstName');
const firstName2 = document.querySelector('#firstName2');
const lastName = document.querySelector('#lastName');
const job = document.querySelector('#job')
const job2 = document.querySelector('#job2')
const tel = document.querySelector('#tel')
const mail = document.querySelector('#email')
const age = document.querySelector('#age')
const ville = document.querySelector('#ville')
const pays = document.querySelector('#pays')
const t = document.querySelector('#base')


burger.addEventListener('click', () => {
    if (window.innerWidth < 700) {
        navList.classList.toggle('dispNone');
    }
});
const createCard = (data) => {
    console.log(data)
    imgProfile.src = data.results[0].picture.large
    firstName.textContent = data.results[0].name.first
    firstName2.textContent = data.results[0].name.first
    lastName.textContent = data.results[0].name.last
    age.textContent = data.results[0].dob.age;
    tel.textContent = data.results[0].phone;
    mail.textContent = data.results[0].email;
    pays.textContent = data.results[0].location.country;
    ville.textContent = data.results[0].location.city;
    
    if (data.results[0].gender === 'male') {
        job.textContent = 'développeur';
        job2.textContent = 'développeur';
        t.textContent = 'basé';
        
    }else{
        job.textContent = 'développeuse';
        job2.textContent = 'développeuse';
        t.textContent = 'basée';
        
    }
console.log(ville)
} 

/**
 * 
 * @param {sring} url 
 */
const fetchUrl = async (url) => {
    console.log(url);
    const data = await fetch(url);
    if (data.status == 200) { //permet de vérifier 
        const response = await data.json();
        // creation de la card
        createCard(response);
    } else {
        //message d'erreur TO DO
    }

};
fetchUrl(urlRandomUser)
// createCard()
// console.log(fetchUrl(urlRandomUser))







