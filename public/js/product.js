async function on_purchase_button_clicked(event){
  const response = await fetch(`/api/users/cart/${event.target.id}`, {
    method : "POST"
  })
  
  if(response.ok){
    const response = await fetch("/api/users/cart", {
      method : "GET"
    })
    
    if(response.ok){
      response.json().then(function(score){
        
      })
    }
  }else{
    
  }
}

document
  .querySelector(".purchase_button")
  .addEventListener("click", on_purchase_button_clicked)