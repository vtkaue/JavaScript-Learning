const element = document.getElementById("main-text")

console.log(element)

const element2 = document.getElementsByClassName("paragraph")
console.log(element2)

const element3 = document.querySelector("p")
console.log(element3)

const element4 = document.querySelectorAll('p')

element4.forEach(element => {
    console.log(element)
});

const element5 = document.querySelector("input")
console.log(element5.name)

const element6 = document.querySelector("h1")

element6.innerHTML = `
<i>Hello word</i> 
<h2>Eu sou Victor</h2> 
<p>Desenvolvedor Front-End</p>`

const element7 = document.querySelector("h1")

element7.style.color = 'red'

const element8 = document.querySelector("input")

element8.onclick = () => {
    alert("socoroooooo")
}
const element9 = document.querySelector("input")
element9.addEventListener("click", () => {
    alert("denovo")
})

