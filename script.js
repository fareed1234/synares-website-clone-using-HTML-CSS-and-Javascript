
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})


document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})


const contactForm = document.querySelector(".contact-form")
contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields")
    return
  }

  // Simulate form submission
  alert("Thank you for your message! We will get back to you soon.")
  this.reset()
})

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  const logo = document.querySelector(".logo-img")

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
    // Switch to dark logo for white navbar
    logo.src = "synares-logo-dark.png"
  } else {
    navbar.classList.remove("scrolled")
    // Switch to light logo for dark navbar
    logo.src = "synares-logo-light.png"
  }
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe service cards and other elements
document.querySelectorAll(".service-card, .stat, .contact-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// FAQ Toggle Function
function toggleFaq(button) {
  const faqItem = button.parentElement
  const answer = faqItem.querySelector(".faq-answer")
  const icon = button.querySelector(".faq-icon")

  // Close all other FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    if (item !== faqItem) {
      item.classList.remove("active")
      const otherAnswer = item.querySelector(".faq-answer")
      const otherIcon = item.querySelector(".faq-icon")
      otherAnswer.style.maxHeight = null
      otherIcon.style.transform = "rotate(0deg)"
    }
  })

  // Toggle current FAQ item
  faqItem.classList.toggle("active")

  if (faqItem.classList.contains("active")) {
    answer.style.maxHeight = answer.scrollHeight + "px"
    icon.style.transform = "rotate(180deg)"
  } else {
    answer.style.maxHeight = null
    icon.style.transform = "rotate(0deg)"
  }
}
