const text_Btn = document.querySelector("#input")

const Chartsubmit_Btn = document.querySelector("#chart")

const chart_Area = document.querySelector(".final-chat-container")

let userInput;
  const API_KEY = "";

const createDiv = (message,ClassName)=>{
  const para = document.createElement("p")
  para.classList.add("ai-question",ClassName)
  let para_content = `  ${message}`
  para.innerHTML = para_content;
  return para;
}

const generateResponse = async(incomingchar)=>{
  const API_URL = "https://api.openai.com/v1/completions";
  const messageElement = incomingchar;



  const request_options = {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}` 
  },
  body:JSON.stringify({
    // model :"gpt-3.5-turbo",
    // messages:[{role: "user",content: userText}]
    model: "text-davinci-003",
    prompt:userInput,
    max_tokens:2048,
    temperature:0.2,
    n:1,
    stop:null
  })
  
}
try {
      const response = await (await fetch(API_URL , request_options)).json();
      messageElement.textContent=response.choices[0].text;

    }catch(error){
      messageElement.textContent="Oops! Something went wrong. Please try again.";
    }
}



const handleincoming = ()=>{
  userInput = text_Btn.value.trim();
  console.log(userInput)
  if(!userInput) return

  chart_Area.appendChild(createDiv(userInput,"chat-container1"))

  setTimeout(()=>{
    const incomingchar = createDiv("Thinking.....", "chat-container1")
    chart_Area.appendChild(incomingchar);
    generateResponse (incomingchar);
  },600)
}







Chartsubmit_Btn.addEventListener("click",handleincoming)








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