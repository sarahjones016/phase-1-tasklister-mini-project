document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    buildToDo(e["target"]["new-task-description"]["value"])
    //Had to use [] instead of . because the hyphens break the variable name
    form.reset()
  })
})

function buildToDo(toDoInput) {
  let paragraph = document.createElement("p")
  let deleteButton = document.createElement("button")
  let dropdown = document.createElement("select")

  let optionOne = document.createElement("option")
  let optionTwo = document.createElement("option")
  let optionThree = document.createElement("option")
  let allOptions = [optionOne, optionTwo, optionThree]

  optionOne.textContent = "High Prio"
  optionOne.id = "High Prio"
  optionTwo.textContent = "Medium Prio"
  optionTwo.id = "Medium Prio"
  optionThree.textContent = "Low Prio"
  optionThree.id = "Low Prio"

  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions
  
  function assignColor() {
    if (dropdown.selectedIndex === 0) {
      paragraph.style.color = "red";
    } else if (dropdown.selectedIndex === 1) {
      paragraph.style.color = "yellow";
    } else if (dropdown.selectedIndex === 2) {
      paragraph.style.color = "green";
    }
  }
  
  dropdown.addEventListener("change", assignColor)

  deleteButton.addEventListener('click', handleDelete)
  deleteButton.textContent = "x"
  paragraph.textContent = `${toDoInput}  `
  paragraph.appendChild(deleteButton)
  paragraph.appendChild(dropdown)
  dropdown.appendChild(optionOne)
  dropdown.appendChild(optionTwo)
  dropdown.appendChild(optionThree)
  document.querySelector("#tasks").appendChild(paragraph)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

