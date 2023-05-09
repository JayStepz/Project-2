function show_gameplay_elements(){
  const timer_section_element = document.querySelector(".timer_section")
  const score_element = document.querySelector(".score")
  
  timer_section_element.classList.remove("d-none")
  score_element.classList.remove("d-none")
}

async function end_round(){
  const response = await fetch("/api/users/highscore", {method : "POST"})
  
  if(response){
    document.location.replace("/highscores")
  }
}

function start_round(){
  const countdown_element = document.querySelector(".countdown")
  var timer_interval
  var time_left = 30
  
  countdown_element.innterHTML = `Time Left: ${time_left}`
  
  timer_interval = setInterval(function(){
    countdown_element.innerHTML = `Time Left: ${time_left}`
    
    time_left--
    
    if(time_left < 0){
      clearInterval(timer_interval)
      end_round()
    }
    
  }, 1000)
}

show_gameplay_elements()
start_round()