const buttons=document.querySelectorAll(".btn")

buttons.forEach(button =>{
    button.addEventListener("click",() =>{
        button.style.backgroundColor ="hsl(75, 94%, 57%)"
        button.style.color="black"
    })
})