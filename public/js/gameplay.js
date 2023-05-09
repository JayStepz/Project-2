// TODO | Needs to show gameplay elements and start timer
function show_gameplay_elements(){
  const timer_section_element = document.querySelector(".timer_section")
  const score_element = document.querySelector(".score")
  
  timer_section_element.classList.remove("d-none")
  score_element.classList.remove("d-none")
}

show_gameplay_elements()