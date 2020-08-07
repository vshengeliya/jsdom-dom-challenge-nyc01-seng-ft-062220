document.addEventListener('DOMContentLoaded', (event) => {

    const counter = document.getElementById("counter")
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    
    
    function intervalCounter() {
        counter.innerText = parseInt(counter.innerText) +1
    }
  
    let intervalId = setInterval(intervalCounter, 1000)
    
    minus.addEventListener("click", function(e){
        counter.innerText = parseInt(counter.innerText) -1
    })

    plus.addEventListener("click", function(e){
        counter.innerText = parseInt(counter.innerText) +1
    })
    
    
    heart.addEventListener("click", function(e){
        
        if (document.getElementById(`${counter.innerText}`)==null){

            let li = document.createElement('li')
            li.id = `${counter.innerText}`
            li.innerHTML = `${counter.innerText} has been liked times: 1`
            let ul = document.querySelector(".likes")
            ul.append(li)
        } else{
            let updatedLi = document.getElementById(`${counter.innerText}`)
            let newNumber = parseInt(updatedLi.innerHTML.split(":")[1]) + 1
            console.log(newNumber)
            
            updatedLi.innerHTML = `${counter.innerText} has been liked times: ${newNumber}`
            let ul = document.querySelector(".likes")
            ul.append(updatedLi)
        }
        
    })
            pause.addEventListener("click", function(e) {
                console.log(e)
                
                if (document.querySelector("#pause").innerText === "pause") {
                    console.log(intervalId)
                    clearInterval(intervalId)
                    document.querySelector("#pause").innerText = 'resume' 
                    document.querySelector("#minus").disabled = true 
                    document.querySelector("#plus").disabled = true 
                    document.querySelector("#heart").disabled = true
                    document.querySelector("#submit").disabled = true
                } else {
                    intervalId = setInterval(intervalCounter, 1000)
                    document.querySelector("#pause").innerText = "pause"
                    document.querySelector("#minus").disabled = false
                    document.querySelector("#plus").disabled = false 
                    document.querySelector("#heart").disabled = false
                    document.querySelector("#submit").disabled = false 
                }
                
            })
            
            
            const form = document.getElementById("comment-form")
            form.addEventListener("submit", function(e){
                e.preventDefault()
                let commentInput = document.getElementById("comment-input").value
                let div = document.getElementById("list")
                let li = document.createElement('li')
                li.innerText = commentInput
    
                div.append(li)
                
            })
            
        })