async function on_purchase_button_clicked(event){
  const score_element = document.querySelector(".score")

  const response = await fetch(`/api/users/cart/${event.target.id}`, {
    method : "POST"
  })
  
  if(response.ok){
    // Guys who doesnt love overloading variables hehe, its my favorite game
    const response = await fetch("/api/users/cart", {
      method : "GET"
    })
    
    if(response.ok){
      response.json().then(function(score){
        score_element.innerHTML = `Spent: $${score}`
        event.target.classList.remove("btn-success")
        event.target.classList.add("btn-danger")
      })
    }
  }
}

function setup_buttons(){
  const product_buttons = document.querySelectorAll(".purchase_button")
  for (let i = 0; i < product_buttons.length; i++) {
    product_buttons[i].addEventListener("click", on_purchase_button_clicked)
  }
}

setup_buttons()