// Handling user input.

// function proceedGo(){
  btn.addEventListener('click', function () {

    // To stop listening when something is executing(go button is pressed)
    recognition.stop()
  
    console.log('Button clicked');
  
    // userText.value = 'hi';
    userText = userTextInp.value.toLowerCase()
  
  
    console.log(userText)
  
  
    if (userText.includes('open my instagram')) {
      speak('opening your instagram account')
      window.open('https://instagram.com/mohdfaizan_5')
    }
  
    // Clearing input from voice command
    if (userText.includes('clear input')) {
      console.log(`before clearing user input ${userText}`)
      userText = '';
      speak('clearing input')
      document.querySelector('.prompt-input').value = userText
      console.log(`after clearing user input ${userText}`)
      return;
    } 
  

  
    // OTher interactive questions
    if (userText.includes('what are your abilities')) {
  
    }
  
    if (userText.includes('suggest me some meals for') || userText.includes('meals for')) {
      let meal = '';
      
      if (userText.includes('dinner')) {
        meal = 'dinner'
      }
      else if (userText.includes('lunch')) {
        meal = 'lunch'
      }
      else if (userText.includes('breakfast')) {
        meal = 'breakfast'
      }
      else {
        meal = 'snacks'
      }
  
      window.open(`https://www.google.com/search?q=meals+for+${meal}/`)
      speak(`here are some meals suggested for your ${meal}`)
      return
    }
    if (userText.includes('how do i use you') || userText.includes('how should i use you')) {
      speak(`you can ask me to search for something on youtube, google!`)
      speak(`ask me to play the song`)
      speak(`ask me to open my inbuilt applications like, pomodoro, forgetting curve, todo,or your productivity dashboard`)
      speak('Here is my usage manaul to help you operate me effectively')
      window.open('./static/about.html#useagesection')
      return
    }
  
  
  
    if (userText.includes('sad')) {
      speak('Dont be sad man!! God is with you')
      return;
    }
    if(userText.includes('hello')){
      speak("hello sir.how its going?")
      return;
    }
    if(userText.includes('motivational')){
      speak("Just one small positive thought in the morning can change your whole day")
      return;
      }
      if(userText.includes('drive')){
        speak("opening your drive sir!")
      window.open("https://drive.google.com/drive/my-drive");
        return;
        }
        if(userText.includes('mails')){
          speak("checking your mails sir!")
        window.open("https://mail.google.com/mail/u/0/#inbox");
          return;
          }
          if(userText.includes('amazon')){
            speak("opening amazon shopping sir!")
          window.open("https://www.amazon.in/");
            return;
            }
            if(userText.includes('find my device') ){
              speak("locating your device sir!")
            window.open("https://www.google.com/android/find/");
            return;
          
              }
    if (userText.includes('forgetting curve') || userText.includes('for getting curve')) {
      window.location = ('./other-applications/forgetting-curve/')
      speak('What should I create a forgetting curve for,');
      console.log('What should I create a forgetting curve for,');
      createForgettingCurve();
      return;
    }
  
    if(userText.includes('weather today') || (userText.includes('todays weather report'))){
      speak("here is the report")
      window.open("https://www.accuweather.com/en/in/bengaluru/204108/weather-forecast/204108");
      return;
    }
    if(userText.includes('stocks today') || (userText.includes('stocks to buy today'))){
      speak("here are some suggestions!")
      window.open("https://in.investing.com/equities/most-active-stocks");
     return; 
    }
    if (userText.includes('pomodoro')) {
      console.log(userText.value)
      speak('opening pomodoro sir..')
      // window.location = './other-applications/pomodoro/'
      window.open('./other-applications/pomodoro/')
      return;
    }
  
    if (userText.includes('who are you') || userText.includes('tell me something about you')) {
      speak(`i'm Natasha, an personal interactive artificial consciousness assistant ! I'm made to serve you`)
      return;
    }
  
  
  
    if (userText.includes('open whatsapp')) {
      speak('Opening whats app Sir')
      window.open('https://web.whatsapp.com/')
      return;
    }
  
  
    if (userText.includes("open youtube")) {
      speak("opening youtube sir!");
      window.open("https://www.youtube.com/")
      return;
    }
  
    if (userText.includes("open google")) {
      speak("opening google sir!");
      window.open("https://www.google.com/");
      return;
    }
  
    // google search
    if (userText.includes("search for")) {
      let input = userText.split("search for").at(-1)
      console.log(input);
      speak(`searching for ${input}`)
      window.open(`https://www.google.com/search?q=${input}`)
      return;
    }
  
  
    // play spotify
    if (userText.includes('play the song')) {
      let input = userText.split("play the song").at(-1)
      speak(`playing ${input} from spotify`)
      input = input.replace(' ', '%20')
      console.log(input)
      window.open(`https://open.spotify.com/search/${input}`)
      return;
    }
  
  
    // Maps
  
    // locate kormangala
    if (userText.includes('locate')) {
      let input = userText.split("locate").at(-1)
      speak(`locating ${input} from google maps`)
      input = input.replace(' ', '+')
      console.log(input)
      window.open(`https://www.google.com/maps/search/${input}/`)
      return;
    }
  
  
    // youtube search
    if (userText.includes("play")) {
      let input = userText.split("play").at(-1)
      console.log(input);
      speak(`playing ${input} from youtube! sir..`)
      window.open(`https://www.youtube.com/results?search_query=${input}`);
      return;
    }
  
    if (userText.includes("open my github") || userText.includes('open my coding profile')) {
      speak('Opening github sir')
      window.open('https://github.com/mohdfaizan5')
      return;
    }
    if(userText.includes('twitter profile') ){
      speak("opening your twitter profile sir!")
    window.open("https://github.com/kupendrav");
      return;
      }
  
    if (userText) {
      speak("i didn't get your sir")
    }
  
  })