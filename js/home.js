const openQ = (id) => {
    const element = document.getElementById(id);
    if (element.style.height == "fit-content") {
        element.style.height = "0px"
    } else
        element.style.height = "fit-content"
}
let maxHeight = 0;
const NewCards = Array.from(document.getElementById("suggest-new").children);

NewCards.forEach(ele => {
    if (ele.clientHeight > maxHeight) maxHeight = ele.clientHeight;
})
const OldCards = Array.from(document.getElementById("suggest-old").children);
OldCards.forEach(ele => {
    if (ele.clientHeight > maxHeight) maxHeight = ele.clientHeight;
})
NewCards.forEach(ele => {
    ele.style.height = `${maxHeight}px`;
})
OldCards.forEach(ele => {
    ele.style.height = `${maxHeight}px`;
})

const customers = document.querySelectorAll(".customers-content");
maxHeight = 0;
customers.forEach(ele => {
    if (ele.clientHeight > maxHeight) maxHeight = ele.clientHeight;
})

customers.forEach(ele => {
    ele.style.height = `${maxHeight}px`;
})

document.getElementById("suggest-old").classList.add("d-none")
const toggleClicked = (id) => {
    const ele = document.getElementById(id);
    const cardsNew = document.getElementById("suggest-new")
    const cardsOld = document.getElementById("suggest-old")
    let otherBtn;
    if (id === "btn-toggle-1") {
        otherBtn = document.getElementById("btn-toggle-2")
        ele.style.setProperty("background-position", "left")
        ele.style.setProperty("color", "var(--color-1)")
        otherBtn.style.setProperty("background-position", "left")
        otherBtn.style.setProperty("color", "var(--color-3)")

        cardsOld.classList.add("d-none")
        cardsNew.classList.remove("d-none")
    } else {
        ele.style.setProperty("background-position", "right")
        ele.style.setProperty("color", "var(--color-1)")
        otherBtn = document.getElementById("btn-toggle-1")
        otherBtn.style.setProperty("background-position", "right")
        otherBtn.style.setProperty("color", "var(--color-3)")

        cardsNew.classList.add("d-none")
        cardsOld.classList.remove("d-none")
    }
}



// =====================================
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 5
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})