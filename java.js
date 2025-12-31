 
async function getJoke() {
    const category = document.getElementById("category").value;
    const type = document.getElementById("type").value;
    const jokeText = document.getElementById("joke");
    const button = document.querySelector("button");
  

  
    let blacklist = "";

    
    if (type === "clean") {
      blacklist = "&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    }
  
    
    const url = `https://v2.jokeapi.dev/joke/${category}?safe-mode=true${blacklist}`;
  

     
     button.disabled = true;
      button.textContent = "⚡ LOADING";
      jokeText.classList.remove("show");
       jokeText.textContent = "Calibrating humor core 🤖";
  

     
      try {
        const res = await fetch(url);
        const data = await res.json();
      

        
      const joke = data.type === "single"
        ? data.joke
        : `${data.setup} — ${data.delivery}`;
  

         
      setTimeout(() => {
        jokeText.textContent = joke;
        jokeText.classList.add("show");
      }, 300);

       
    } catch {
      jokeText.textContent = "System error 😢";
      jokeText.classList.add("show");
    }
  
    button.disabled = false;
    button.textContent = "⚡ GENERATE";
  }
  