
const wordInput = document.getElementById("wordInput");
const btn = document.getElementById("btn");
const wordCount = document.getElementById("wordCount");





btn.addEventListener("click", () => {

    let count = 0;

    for (let i = 0; i < wordInput.value.split(' ').length; i++){
       count++   
    }
    
    wordCount.innerText = count; 
})



