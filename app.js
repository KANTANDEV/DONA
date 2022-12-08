const btn = document.querySelector('.input');
const content = document.querySelector('.content');


function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 0,5;

    window.speechSynthesis.speak(text_speak);
}



window.addEventListener('load', ()=>{
    speak("Chargements des systèmes");
    speak("Tout les systèmes sont opérationnels");
    recognition.start();
    recognition.addEventListener('end', recognition.start);
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "fr-FR";
SpeechRecognition.continuous = true;

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    // si le transcript contient Dona alors on lance la fonction speakThis
    if (transcript.includes('Dona') || transcript.includes('dona') || transcript.includes('Donna') || transcript.includes('donna')) {
       // on enleve le mot Dona du transcript
        speakThis(transcript.replace("Dona", "").replace("dona", "").replace("Donna", "").replace("donna", ""));
        
    }
}






function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    

    if(message.includes('Salut')  || message.includes('salut') || message.includes('Bonjour') || message.includes('bonjour') || message.includes('Bonsoir') || message.includes('bonsoir'))  {
        const finalText = "Bonjour";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('nom')) {
        const finalText = "Je suis  Dona";
        speech.text = finalText;
    }

    else if(message.includes('ouvre google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Ouverture de  Google";
        speech.text = finalText;
    }

    else if(message.includes('ouvre github')) {
        window.open("https://github.com", "_blank");
        const finalText = "Ouverture de GitHub";
        speech.text = finalText;
    }

    else if(message.includes('Que veut dire') || message.includes('Cherche') || message.includes('trouve')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Voici ce que j'ai trouvé" + message;
        speech.text = finalText; 
    }

    else if(message.includes('wikipédia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipédia", "")}`, "_blank");
        const finalText = "J'ai trouver ceci sur wikipédia " + message;
        speech.text = finalText;
    }

    else if(message.includes('heure')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text =  ' Il est  ' + finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = 'Nous sommes le ' + finalText;
    }

    else if(message.includes('calculatrice')) {
        window.open('Calculator:///')
        const finalText = "Ouverture de la Calculatrice";
        speech.text = finalText;
    }
        
    //joue de la musique
    else if (message.includes('joue') || message.includes('joue')) {
        message.replace('joue', '');
        windows.open('https://music.apple.com/us/search?term=' + message);
    }

    else if (message.includes('ouvre youtube') || message.includes('ouvre YouTube')) {
        window.open('https://www.youtube.com/', '_blank');
        const finalText = "Ouverture de YouTube";
        speech.text = finalText;
    }
        
    else if (message.includes('ouvre discord') || message.includes('ouvre Discord')) {
        window.open('https://discord.com/', '_blank');
        const finalText = "Ouverture de Discord";
        speech.text = finalText;
    }
        
    else if (message.includes('ouvre netflix') || message.includes('ouvre Netflix')) {
        window.open('https://www.netflix.com/', '_blank');
        const finalText = "Ouverture de Netflix";
        speech.text = finalText;
    }
    
    
    //on prend note de ce que dit l'utilisateur et on le stock dans le local storage
    else if (message.includes('prend note') || message.includes('prends note')) {
        const note = message.replace('note', '');
        localStorage.setItem('note', note);
        const finalText = "Note prise en compte";
        speech.text = finalText;
    }
    
    //on affiche les note
    else if (message.includes('affiche')) {
        const note = localStorage.getItem('note');
        const finalText = note;
        speech.text = finalText;
    }
        
    //on supprime les notes
    else if (message.includes('supprime')) {
        localStorage.removeItem('note');
        const finalText = "Notes supprimées";
        speech.text = finalText;
    }
        
    //on ouvre le site de la météo
    else if (message.includes('météo') || message.includes('meteo') || message.includes('Météo') || message.includes('Meteo')) {
        //on recupere la localisation de l'utilisateur
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            window.open(`https://www.google.com/search?q=meteo&rlz=1C1CHBF_frFR880FR880&oq=meteo&aqs=chrome..69i57j0l5.1108j0j4&sourceid=chrome&ie=UTF-8&latlng=${latitude},${longitude}`, "_blank");
        });
        const finalText = "Voici la météo";
        speech.text = finalText;
    }
        
     //actualité
    else if (message.includes('actualité')) {
        window.open('https://www.google.com/search?q=actualit%C3%A9&rlz=1C1CHBF_frFR880FR880&oq=actualit&aqs=chrome.0.69i59j69i57j0l4.1009j0j4&sourceid=chrome&ie=UTF-8', "_blank");
        const finalText = "Voici les actualités";
        speech.text = finalText;
    }
    
    
        
    else if (message.includes('rendez-vous') ) {
        window.open('https://calendar.google.com/calendar/r', '_blank');
        const finalText = "Veuillez choisir un rendez-vous";
        speech.text = finalText;
    }
        
    
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Je cherche plus d'informations pour " + message + " sur google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 0.8;
    speech.rate = 0.8;

    window.speechSynthesis.speak(speech);

    }