import generateJoke from './generateJoke';
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughing-img');
laughImg.src = laughing

const jokeBtn = document.getElementById('joke-btn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();

