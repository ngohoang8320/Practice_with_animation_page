const container = document.getElementById('container')
const registionBtn = document.getElementById('registion')
const loginBtn = document.getElementById('login')

registionBtn.addEventListener('click', () => {
    container.classList.add("active")
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
})