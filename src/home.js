const createHome = () => {
    let start = document.querySelector(".main-content")
    let section = document.createElement("section")
    section.classList.add("section")
    let divbox = document.createElement('div')
    divbox.classList.add('box', 'has-text-centered')
    section.appendChild(divbox)
    let h1 = document.createElement('h1')
    h1.innerText = 'Lucazzi Pizzeria'
    divbox.appendChild(h1)
    console.log(section)

    start.appendChild(section)
    createOurPizzaSection(start)
    createHours(start)
    createLocation(start)
}

const createOurPizzaSection = (htmlToAppend) => {
    let section = document.createElement("section")
    section.classList.add("section")
    let divbox = document.createElement('div')
    divbox.classList.add('message', 'is-warning')
    section.appendChild(divbox)
    let h3 = document.createElement('h3')
    h3.classList.add('message-header')
    h3.innerText = 'Our pizza'
    let message = document.createElement('div')
    message.classList.add('message-body')
    let p1 = document.createElement('p')
    p1.innerText = 'We are proud to bring the authentic taste of Naples to your table. Our pizza is made with only the finest and freshest ingredients, from the dough to the sauce to the toppings. We believe in using traditional techniques and recipes to create the most delicious pizza possible.'
    let p2 = document.createElement('p')
    p2.innerText = 'Our pizza is made with 00 flour, which is finely milled and low in protein, resulting in a soft and chewy crust. We then use San Marzano tomatoes, which are grown in the fertile soil at the base of Mount Vesuvius, and are known for their sweet and tangy flavor. Our mozzarella cheese is made from whole milk, giving it a rich and creamy texture.'
    let p3 = document.createElement('blockquote')
    p3.innerText = 'L.L. Lucazzi'

    divbox.appendChild(h3)
    divbox.appendChild(message)
    message.appendChild(p1)
    message.appendChild(p2)
    message.appendChild(p3)

    htmlToAppend.appendChild(section)
}

const createHours = (htmlToAppend) => {

    let section = document.createElement("section")
    section.classList.add("section")
    let divbox = document.createElement('div')
    divbox.classList.add('message', 'has-text-centered', 'is-warning')
    section.appendChild(divbox)
    let h3 = document.createElement('h3')
    h3.classList.add('message-header')
    h3.innerText = 'Hours'
    let divMessage = document.createElement('div')
    divMessage.classList.add('message-body')

    let p1 = document.createElement('p')
    p1.innerText = 'Sunday: 8am - 8pm'
    let p2 = document.createElement('p')
    p2.innerText = 'Monday: 8am - 8pm'
    let p3 = document.createElement('p')
    p3.innerText = 'Thursday: 8am - 8pm'
    let p4 = document.createElement('p')
    p4.innerText = 'Wednesday: 8am - 8pm'
    let p5 = document.createElement('p')
    p5.innerText = 'Thursday: 8am - 8pm'
    let p6 = document.createElement('p')
    p6.innerText = 'Friday: 8am - 8pm'

    divMessage.appendChild(p1)
    divMessage.appendChild(p2)
    divMessage.appendChild(p3)
    divMessage.appendChild(p4)
    divMessage.appendChild(p5)
    divMessage.appendChild(p6)
    section.appendChild(divbox)
    divbox.appendChild(h3)
    divbox.appendChild(divMessage)

    htmlToAppend.appendChild(section)
}

const createLocation = (htmlToAppend) => {
    let section = document.createElement("section")
    section.classList.add("section")
    let divbox = document.createElement('div')
    divbox.classList.add('message', 'has-text-centered', 'is-warning')
    let h3 = document.createElement('h2')
    h3.classList.add('message-header')
    h3.innerText = 'Location'
    let p1 = document.createElement('p')
    p1.classList.add('message-body')
    p1.innerText = '123 Forest Drive, Forestville, Maine'
    section.appendChild(divbox)
    divbox.appendChild(h3)
    divbox.appendChild(p1)

    htmlToAppend.appendChild(section)
}

export default { createHome }