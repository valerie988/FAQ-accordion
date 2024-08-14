var summits = document.querySelectorAll("button")
var plus = document.querySelectorAll(".plus")
var minus = document.querySelectorAll(".minus")
var note = document.querySelectorAll(".note")

summits.forEach(button => {
    button.addEventListener('click',function (event){
        var svgs = event.currentTarget.querySelectorAll('svg')
        var val = event.currentTarget.getAttribute('num')
        // console.log(val);
        for (const i of svgs) {
            i.classList.toggle("hidden")
        }
        note[val].classList.toggle("hidden")
    })
    
});
