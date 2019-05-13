const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
    "nav-item-7": "Sales",
    "nav-item-8": "Testimonials"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//navigation
const navigation = document.querySelector(".container > header > nav")
const navItems = document.querySelectorAll("header > nav > a");

navItems[0].textContent = siteContent ["nav"]["nav-item-1"]
navItems[0].style.color = "green"

navItems[1].textContent = siteContent ["nav"]["nav-item-2"]
navItems[1].style.color = "green"

navItems[2].textContent = siteContent ["nav"]["nav-item-3"]
navItems[2].style.color = "green"

navItems[3].textContent = siteContent ["nav"]["nav-item-4"]
navItems[3].style.color = "green"

navItems[4].textContent = siteContent ["nav"]["nav-item-5"]
navItems[4].style.color = "green"

navItems[5].textContent = siteContent ["nav"]["nav-item-6"]
navItems[5].style.color = "green"

const sales = document.createElement("a")
navigation.appendChild(sales)
sales.textContent = siteContent ["nav"] ["nav-item-7"]
sales.style.color = "green"

const testimonials = document.createElement("a")
navigation.prepend(testimonials)
testimonials.textContent = siteContent ["nav"] ["nav-item-8"]
testimonials.style.color = "green"

//cta section
const title = document.querySelector('h1')

const dom1 = siteContent.cta.h1.substring(0, 4)
const is1 = siteContent.cta.h1.substring(4, 7)
const awesome1 = siteContent.cta.h1.substring(7, 15)
title.innerHTML = `${dom1} <br> ${is1} <br> ${awesome1}`

title.style.color = "forestgreen"

const button1 = document.querySelector(".cta > .cta-text > button")

button1.textContent = siteContent ["cta"] ["button"]

button1.style.background = "gold"

button1.addEventListener('click', () => {alert('I am in the dom') })

button1.addEventListener('onmouseover', (event) => { event.target.style.backgroundColor = 'red'; })

const ctaImg = document.querySelector("#cta-img")

ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//top content
const topContentHeaders = document.querySelectorAll(".main-content > .top-content > .text-content > h4")

topContentHeaders[0].textContent = siteContent["main-content"]["features-h4"]

topContentHeaders[1].textContent = siteContent["main-content"]["about-h4"]

topContentHeaders[0].style.color = "forestgreen"
topContentHeaders[1].style.color = "forestgreen"

const topContentParas = document.querySelectorAll(".main-content > .top-content > .text-content > p")

topContentParas[0].textContent = siteContent["main-content"]["features-content"]

topContentParas[1].textContent = siteContent["main-content"]["about-content"]

//center image
const centerImage = document.querySelector("#middle-img")

centerImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom content
const botContentHeaders = document.querySelectorAll(".main-content > .bottom-content > .text-content > h4")

botContentHeaders[0].textContent = siteContent["main-content"]["services-h4"]

botContentHeaders[1].textContent = siteContent["main-content"]["product-h4"]

botContentHeaders[2].textContent = siteContent["main-content"]["vision-h4"]

botContentHeaders[0].style.color = "forestgreen"
botContentHeaders[1].style.color = "forestgreen"
botContentHeaders[2].style.color = "forestgreen"

const botContentParas = document.querySelectorAll(".main-content > .bottom-content > .text-content > p")

botContentParas[0].textContent = siteContent["main-content"]["services-content"]

botContentParas[1].textContent = siteContent["main-content"]["product-content"]

botContentParas[2].textContent = siteContent["main-content"]["vision-content"]

//contact
const contactTitle = document.querySelector(".contact > h4")

contactTitle.textContent = siteContent["contact"]["contact-h4"]

contactTitle.style.color = "forestgreen"

const contactInfo = document.querySelectorAll(".contact > p")

let address1 = siteContent.contact.address.substring(0,19)

let address2 = siteContent.contact.address.substring(19, siteContent.contact.address.lenght)

contactInfo[0].innerHTML = `${address1} <br> ${address2}`

contactInfo[1].textContent = siteContent["contact"]["phone"]

contactInfo[2].textContent = siteContent["contact"]["email"]

//footer
const footerInfo = document.querySelector("footer > p")
footerInfo.textContent = siteContent["footer"]["copyright"]