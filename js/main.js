import { TextAnalizer } from '../components/text-analizer/TextAnalizer.js';

const textarea = document.querySelector('textarea');
const submit = document.querySelector('input');
// console.log(submit);
let text = ""; 

submit.addEventListener('click', e => {
    e.preventDefault();
    
    text = textarea.value;
    
    const analizatorius = new TextAnalizer(text);
    analizatorius.addKalba('ru');
    const letterCount = analizatorius.letterCount();
    console.log(analizatorius);
    console.log(letterCount);
    console.log(`Raidziu kiekis:`, letterCount);
})



