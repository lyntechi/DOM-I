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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let servicesLinkOne = document.getElementsByTagName("a")[0]
servicesLinkOne.textContent = siteContent.nav["nav-item-1"]
console.log(servicesLinkOne);

let servicesLinkTwo = document.getElementsByTagName("a")[1]
servicesLinkTwo.textContent = siteContent.nav["nav-item-2"]

let servicesLinkThree = document.getElementsByTagName("a")[2]
servicesLinkThree.textContent = siteContent.nav["nav-item-3"]

let servicesLinkFour = document.getElementsByTagName("a")[3]
servicesLinkFour.textContent = siteContent.nav["nav-item-4"]

let servicesLinkFive = document.getElementsByTagName("a")[4]
servicesLinkFive.textContent = siteContent.nav["nav-item-5"]

let servicesLinkSix = document.getElementsByTagName("a")[5]
servicesLinkSix.textContent = siteContent.nav["nav-item-6"]

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent.cta.h1;
ctaH1.style.fontFamily = 'Bangers', 'cursive';
ctaH1.innerHTML = `DOM <br/>  Is <br/> Awesome`;
console.log(ctaH1);


let codeSnippetImg = document.querySelector("#cta-img");
codeSnippetImg.src = siteContent.cta["img-src"];
console.log(codeSnippetImg);


let ctaBtn = document.querySelector(".cta button");
ctaBtn.textContent = siteContent["cta"]["button"];

console.log(ctaBtn);



let textContentH4 = document.querySelector(".top-content h4");
textContentH4.textContent = siteContent["main-content"]["features-h4"];
console.log(textContentH4);

let featuresContent = document.querySelector(".top-content p");
featuresContent.textContent = siteContent["main-content"]["features-content"];
console.log(featuresContent);

let aboutH4= document.querySelectorAll(".top-content h4")[1];
aboutH4.textContent = siteContent["main-content"]["about-h4"];
console.log(aboutH4);

let aboutContent = document.querySelectorAll(".top-content p")[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];
console.log(aboutContent);

document.querySelectorAll(".text-content h4").forEach(function(item){
 console.log(item);
})



let middleImgSource = document.querySelector("#middle-img")
middleImgSource.src = siteContent["main-content"]["middle-img-src"]

let servicesH4 = document.querySelector(".bottom-content h4")
servicesH4.textContent = siteContent["main-content"]["services-h4"]

let servicesContent = document.querySelector(".bottom-content p")
servicesContent.textContent = siteContent["main-content"]["services-content"]

let productH4 = document.querySelectorAll(".bottom-content h4")[1]
productH4.textContent = siteContent["main-content"]["product-h4"]

let productContent = document.querySelectorAll(".bottom-content p")[1]
productContent.textContent = siteContent["main-content"]["product-content"]

let visionH4 = document.querySelectorAll(".bottom-content h4")[2]
visionH4.textContent= siteContent["main-content"]["vision-h4"]

let visionContent=document.querySelectorAll(".bottom-content p")[2]
visionContent.textContent = siteContent["main-content"]["vision-content"]

let contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent["contact"]["contact-h4"]

let contactAddress = document.querySelector(".contact p")
contactAddress.textContent = siteContent["contact"]["address"]
contactAddress.innerHTML = `123 Way 456 Street <br/> Somewhere, USA`;

let contactPhone = document.querySelectorAll(".contact p")[1]
contactPhone.textContent = siteContent["contact"]["phone"]

let contactEmail = document.querySelectorAll(".contact p")[2]
contactEmail.textContent = siteContent["contact"]["email"]

let footerCopyRight = document.querySelector("footer p")
footerCopyRight.textContent = siteContent["footer"]["copyright"]