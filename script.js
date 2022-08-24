class Apunte {
    constructor(id, materia, descripcion, precio, img) {
        this.id = id
        this.materia = materia
        this.descripcion = descripcion
        this.precio = precio
        this.img = img
    }
}

const apunte1 = new Apunte(1, "Administracion", "Material de catedra A", 500, "./LibroEnBlanco.jpg")
const apunte2 = new Apunte(2, "Estados Contables", "Resumen de cursada y tps", 300, "./LibroEnBlanco.jpg")
const apunte3 = new Apunte(3, "Matematica para Economistas", "Apunte de la materia", 1000, "./LibroEnBlanco.jpg")
const apunte4 = new Apunte(4, "Introduccion a la economia", "Apuntes de catedra A", 250, "./LibroEnBlanco.jpg")
const apunte5 = new Apunte(5, "Contabilidad I", "Resumen para final", 800, "../LibroEnBlanco.jpg")

const apuntes = [apunte1, apunte2, apunte3, apunte4, apunte5]

const tBody = document.querySelector('#tBodyApuntes')
apuntes.forEach(apuntesArray => {
    tBody.innerHTML += `
        <tr>
            <th scope="row">${apuntesArray.id}</th>
            <td>${apuntesArray.materia}</td>
            <td>${apuntesArray.descripcion}</td>
            <td>${apuntesArray.precio}</td>
            <td><img src="${apuntesArray.img}"></td>
        </tr>
    `
})
localStorage.setItem('carrito', JSON.stringify(apuntes))
console.log(JSON.parse(localStorage.getItem("carrito")))
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}
const idForm = document.getElementById("idForm")
const botonUsers = document.getElementById("botonUsers")
const divUsers = document.getElementById("divUsers")
const users  = []
idForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = documento.getElementById("username").value
    const email = documento.getElementById("email").value
    const password = documento.getElementById("password").value
    const user = new User(username, email, password)
    users.push(user)
    idForm.reset()
    console.log(users)
})
