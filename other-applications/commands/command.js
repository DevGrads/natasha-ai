// alert('hi')
function speak(input){
  console.log(input)
}


// target website


let inputBar = document.querySelector('input')
let submitBtn = document.querySelector('button')

 
submitBtn.addEventListener('click', function(){
  console.log(inputBar.value);
  if(inputBar.value.includes('sad')){
  speak("Dont be sad man!! God is with you")
  }

  if(inputBar.value.includes('who are you')){
  speak("im Natasha, an personal interactive artificial consciousness assistant ! I am made to serve you")
  }
  
  if(inputBar.value.includes('hello')){
    speak("hello sir,how its going?")
  }
  if(inputBar.value.includes('motivational')){
  speak("Just one small positive thought in the morning can change your whole day")
  }

  if(inputBar.value.includes('whatsapp')){
    speak("opening whats app sir!")
  window.open("https://web.whatsapp.com/");

    }

  if(inputBar.value.includes('youtube')){
    speak("opening youtube sir!")
  window.open("https://www.youtube.com/");

    }
  if(inputBar.value.includes('google')){
    speak("opening google sir!")
  window.open("https://www.google.com/");

    }
  if(inputBar.value.includes('drive')){
    speak("opening your drive sir!")
  window.open("https://drive.google.com/drive/my-drive");

    }
  if(inputBar.value.includes('mails')){
    speak("checking your mails sir!")
  window.open("https://mail.google.com/mail/u/0/#inbox");

    }
  if(inputBar.value.includes('amazon')){
    speak("opening amazon shopping sir!")
  window.open("https://www.amazon.in/");

    }
  if(inputBar.value.includes('git hub profile') || (inputBar.value.includes('coding profile'))){
    speak("opening your gihub profile sir!")
  window.open("https://github.com/kupendrav");

    }
  if(inputBar.value.includes('git hub ') ){
    speak("opening your gihub sir!")
  window.open("https://github.com/");

    }
  if(inputBar.value.includes('twitter profile') ){
    speak("opening your twitter profile sir!")
  window.open("https://twitter.com/kupendrav99");

    }
  if(inputBar.value.includes('instagram profile') ){
    speak("opening your instagram profile sir!")
  window.open("https://www.instagram.com/bloodraven961/");

    }
  if(inputBar.value.includes('linkedin profile') ){
    speak("opening your linkedin profile sir!")
  window.open("https://www.linkedin.com/in/kupendra-v2903/");

    }
  if(inputBar.value.includes('discord') ){
    speak("opening your discord channel sir!")
  window.open("https://discord.com/channels/@me");

    }
  if(inputBar.value.includes('find my device') ){
    speak("locating your device sir!")
  window.open("https://www.google.com/android/find/");

    }
  if(inputBar.value.includes('what special today') || (inputBar.value.includes('what is today'))){
    speak("today special is!")
  window.open(" https://nationaltoday.com/what-is-today/");
  
}
if(inputBar.value.includes('weather today') || (inputBar.value.includes('todays weather report'))){
    speak("here is the report")
    window.open("https://www.accuweather.com/en/in/bengaluru/204108/weather-forecast/204108");
    
  }
  if(inputBar.value.includes('stocks today') || (inputBar.value.includes('stocks to buy today'))){
    speak("here are some suggestions!")
    window.open("https://in.investing.com/equities/most-active-stocks");
    
  }
  // youtube search
  if (inputBar.value.includes("play")){
    let input = inputBar.value.split("play").at(-1)
    console.log(input);
    speak(`playing ${input} from youtube! sir..`)
    window.open(`https://www.youtube.com/results?search_query=${input}`);
   
  }
  // locate 
  if(inputBar.value.includes('locate')){
    let input = inputBar.value.split("locate").at(-1)
    speak(`locating ${input} from google maps`)
    input = input.replace(' ', '+')
    console.log(input)
    window.open(`https://www.google.com/maps/search/${input}/`)
    return;
  }
  // play spotify
  if (inputBar.value.includes('play the song')){
    let input = inputBar.value.split("play the song").at(-1)
    speak(`playing ${input} from spotify`)
    input = input.replace(' ', '%20')
    console.log(input)
    window.open(`https://open.spotify.com/search/${input}`)
   return;
  }
  // google search
  if (inputBar.value.includes("search for")){
    let input = inputBar.value.split("search for").at(-1)
    console.log(input);
    speak(`searching for ${input}`)
    window.open(`https://www.google.com/search?q=${input}`)
    return;
  }
  // calling all productive tool
  if(inputBar.value.includes('forgetting curve') || inputBar.value.includes('for getting curve')){
    window.location = ('')//location pending
    speak('What should I create a forgetting curve for,');
  console.log('What should I create a forgetting curve for,');
  createForgettingCurve();
}

if(inputBar.value.includes('pomodoro')){
  console.log(inputBar.value)
  speak('opening pomodoro sir..')
  window.location = ''//location pending
}
if(inputBar.value.includes('meditation')){
  console.log(inputBar.value)
  speak('opening meditation app sir..')
  window.location = ''//location pending
}
if(inputBar.value.includes('todo list')){
  console.log(inputBar.value)
  speak('opening todo list sir..')
  window.location = ''//location pending
}

})

// emty command 
  if(inputBar.value.includes('')){
    speak("i didnt get your sir")
    }