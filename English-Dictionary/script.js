const inputElem = document.getElementById('search-bar');
const meaningElem= document.getElementById('meaning');


let word = '';

inputElem.addEventListener('input', (event) => {
    word = event.target.value;
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchWord();
    }
});

async function searchWord() {
    try{
    meaningElem.innerText='Loading...';
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let data = await response.json();
    
    const dataStructure=data[0].meanings[0].definitions[0].definition;
    meaningElem.innerText = `${dataStructure}`;
    word = '';
}
    catch(err){
    meaningElem.innerText = 'An Error occurred, try again later';
    }
}
