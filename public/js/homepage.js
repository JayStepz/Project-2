const play_button_element = document.querySelector(".play_button")

async function on_play_button_clicked(event){
  const response = await fetch("/api/users/", {method : "POST"})
  
  if(response){
    document.location.replace("/gameplay")
  }
}

play_button_element.addEventListener("click", on_play_button_clicked)