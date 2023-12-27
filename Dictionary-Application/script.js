const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');
const wordTitle = document.getElementById('wordTitle');
const wordDescription = document.getElementById('wordDescription');
const audioButton = document.getElementById('audioButton');

searchButton.addEventListener("click", ()=>{
    search();
});

searchInput.addEventListener("keyup",(event)=>{

    if(event.key === "Enter"){
        search();
    }
    
});

function search(){

    const searchItem = searchInput.value.trim();

    if(searchItem === ''){
        alert('Please Enter a Word to Search...');
        return;
    }

    fetchDictionaryData(searchItem);
}

async function fetchDictionaryData(searchItem){

    try{

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchItem}`);
        if(!response.ok){
            alert("Failed: An Error Occured")
        }

        const result = await response.json();
        displayResult(result);

    }
    catch(error){
        console.log(error);
        alert('An error Occured');
        
    }

}

function displayResult(result){

    resultContainer.style.display= 'block';

    const wordData = result[0];
    wordTitle.textContent = wordData.word;

     // Get the first meaning and definition if you want
    //  const firstMeaning = wordData.meanings[0];
    //  const firstDefinition = firstMeaning.definitions[0].definition;
    //<p><strong>Part of Speech: </strong> ${firstMeaning.partOfSpeech}</p>
    //<p><strong>Definition: </strong> ${firstDefinition}</p>

    wordDescription.innerHTML = `
    
    <ul>
        ${wordData.meanings.map(meaning => `
        
        <li>
            <p><strong>Parts of Speech: </strong>${meaning.partOfSpeech}</p>
            <p><strong>Definition: </strong>${meaning.definitions[0].definition}</p>
        </li>
        
        `).join('\n')}
    </ul>
    
    `;
}

audioButton.addEventListener("click", ()=>{

    const searchItem = searchInput.value.trim();

    if(searchItem === ''){
        alert('Please Enter a Word to Search...')
        return;
    }

    speak(searchItem);
})

function speak(word){

    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    speech.volume = 5;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}
