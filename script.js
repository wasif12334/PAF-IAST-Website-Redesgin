// Preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Active Navbar Link on Scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach((reveal) => observer.observe(reveal));

// Back to Top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Dark Mode Toggle
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Programs Data
const programs = {
  ug: [
    { name: "BS Computer Science", duration: "4 Years", eligibility: "FSc Pre-Engineering" },
    { name: "BS Software Engineering", duration: "4 Years", eligibility: "FSc / ICS" },
    { name: "BS Electrical Engineering", duration: "4 Years", eligibility: "FSc Pre-Engineering" },
  ],
  grad: [
    { name: "MS Artificial Intelligence", duration: "2 Years", eligibility: "BS CS / SE" },
    { name: "MS Data Science", duration: "2 Years", eligibility: "BS CS / Math" },
    { name: "MS Engineering Management", duration: "2 Years", eligibility: "BS Engineering" },
  ],
  short: [
    { name: "Web Development Bootcamp", duration: "3 Months", eligibility: "Basic IT Knowledge" },
    { name: "AI & ML Workshop", duration: "2 Months", eligibility: "Programming Basics" },
    { name: "Cyber Security Course", duration: "3 Months", eligibility: "Networking Basics" },
  ]
};

const programList = document.getElementById("programList");
const tabBtns = document.querySelectorAll(".tab-btn");

function showPrograms(category) {
  programList.innerHTML = "";

  programs[category].forEach((prog) => {
    const card = document.createElement("div");
    card.classList.add("program-card");

    card.innerHTML = `
      <h3>${prog.name}</h3>
      <p><b>Duration:</b> ${prog.duration}</p>
      <p><b>Eligibility:</b> ${prog.eligibility}</p>
      <button class="small-btn">Download Brochure</button>
    `;

    programList.appendChild(card);
  });
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    showPrograms(btn.dataset.category);
  });
});

showPrograms("ug");

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 80;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 40);w
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});

// Testimonials Slider
const testimonials = [
  {
    name: "Ali Raza",
    dept: "Software Engineering",
    review: "PAF-IAST has the best modern environment for learning and innovation.",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Ayesha Khan",
    dept: "Computer Science",
    review: "Faculty is supportive and labs are very advanced compared to other universities.",
    img: "https://randomuser.me/api/portraits/women/20.jpg",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Usman Shah",
    dept: "Electrical Engineering",
    review: "The research culture here is strong and industry projects are amazing.",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    stars: "⭐⭐⭐⭐"
  }
];

let currentTest = 0;
const testCard = document.getElementById("testimonialCard");

function showTestimonial(index) {
  testCard.innerHTML = `
    <img src="${testimonials[index].img}" alt="">
    <h3>${testimonials[index].name}</h3>
    <p><b>${testimonials[index].dept}</b></p>
    <p>${testimonials[index].review}</p>
    <p>${testimonials[index].stars}</p>
  `;
}

document.getElementById("nextTest").addEventListener("click", () => {
  currentTest = (currentTest + 1) % testimonials.length;
  showTestimonial(currentTest);
});

document.getElementById("prevTest").addEventListener("click", () => {
  currentTest = (currentTest - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTest);
});

showTestimonial(currentTest);

// Contact Form Validation
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  
  formMsg.style.color = "green";
  formMsg.innerText = "✅ Message Sent Successfully!";
  form.reset();
});
