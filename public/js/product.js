const score_element = document.querySelector(".score")

async function on_purchase_button_clicked(event){
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
      })
    }
  }
}

document
  .querySelector(".purchase_button")
  .addEventListener("click", on_purchase_button_clicked)