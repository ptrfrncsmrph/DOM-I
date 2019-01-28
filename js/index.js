const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
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

const render = () => {
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])

  const navAnchors = document.querySelectorAll("nav a")
  navAnchors.forEach((a, i) => {
    a.innerText = siteContent.nav[`nav-item-${i + 1}`]
  })
  
  const [h1] = Array.from(document.getElementsByTagName("h1"))
  h1.innerHTML = siteContent.cta.h1.split(" ").join("<br/>")

  const button = document.querySelector(".cta-text button")
  button.innerText = siteContent.cta.button

  const ctaImg = document.getElementById("cta-img")
  ctaImg.setAttribute("src", siteContent.cta["img-src"])

  const mainContent = document.querySelector(".main-content")
  const textContents = mainContent.querySelectorAll(".text-content")
  const textContentNames = ["features", "about", "services", "product", "vision"]
  textContents.forEach((textContent, i) => {
     const h4 = textContent.querySelector("h4")
     const p = textContent.querySelector("p")
     const name = textContentNames[i]
     h4.innerText = siteContent["main-content"][`${name}-h4`]
     p.innerText = siteContent["main-content"][`${name}-content`]
  })

  const middleImg = document.getElementById("middle-img")
  middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

  const contactSection = document.querySelector(".contact")
  contactSection.querySelector("h4").innerText = siteContent.contact["contact-h4"]
  const [address, phone, email] = Array.from(contactSection.querySelectorAll("p"))
  address.innerText = siteContent.contact.address
  phone.innerText = siteContent.contact.phone
  email.innerText = siteContent.contact.email

  document.querySelector("footer").innerText = siteContent.footer.copyright
}

window.onload = render