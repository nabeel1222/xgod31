document.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("names")) || [];

  saved.forEach(name => {
    addToUI(name);
  });
});
const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;

  // ✅ SAVE IN LOCALSTORAGE
  let saved = JSON.parse(localStorage.getItem("names")) || [];
  saved.push(name);
  localStorage.setItem("names", JSON.stringify(saved));

  // ✅ SHOW IN UI
  addToUI(name);

  // ✅ SEND TO BACKEND
  await fetch("http://localhost:3000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  });

  form.reset();
});
const texts = [
  "Hi, I'm Nabeel!!!",
  "Web Developer:>",
  "Creative Designer:)",
  "I Build Cool Projects.."
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = texts[i].substring(0, j--);
    }

    document.getElementById("typing").textContent = currentText;

    if (j === texts[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelector(".floating").style.transform = `translateY(${scrollY * 0.3}px)`;
  document.querySelector(".floating2").style.transform = `translateY(${scrollY * -0.3}px)`;
});
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", function(e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = btn.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
const tilt = document.querySelector(".tilt");

tilt.addEventListener("mousemove", (e) => {
  const rect = tilt.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 10;
  const rotateY = (x - centerX) / 10;

  tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tilt.addEventListener("mouseleave", () => {
  tilt.style.transform = "rotateX(0) rotateY(0)";
});
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
  }
});
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / height) * 100;

  document.getElementById("progress").style.width = progress + "%";
});


window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  rocket.style.transform = `translateY(-${scrollY}px) rotate(${scrollY * 0.1}deg)`;
});
const rocket = document.getElementById("rocket");

let mouseX = 0;
let mouseY = 0;

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
createTrail(posX, posY);
function animate() {
  // smooth movement
  posX += (mouseX - posX) * 0.07;
  posY += (mouseY - posY) * 0.07;

  // move rocket
  rocket.style.left = posX + "px";
  rocket.style.top = posY + "px";

  // rotate rocket
  const angle = Math.atan2(mouseY - posY, mouseX - posX) * (180 / Math.PI);
  rocket.style.transform = `translate(-50%, -50%) rotate(${angle + 90}deg)`;

  // 🔥 THIS IS THE TRAIL MAGIC
  const rect = rocket.getBoundingClientRect();

// bottom center of rocket
const trailX = rect.left + rect.width / 2;
const trailY = rect.top + rect.height;

createTrail(trailX, trailY);

  // loop animation
  requestAnimationFrame(animate);
}
animate();

let hue = 0;

function createTrail(x, y) {
  const trail = document.createElement("div");
  trail.classList.add("trail");

  trail.style.left = x + "px";
  trail.style.top = y + "px";

  trail.style.background = `hsl(${hue}, 100%, 50%)`;

  hue += 5; // speed of color change
  if (hue > 360) hue = 0;

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 600);
}


function createStar() {
  const container = document.querySelector(".shooting-stars");

function createStar() {}
document.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("names")) || [];

  saved.forEach(name => {
    addToUI(name);
  });
});
// slower for visibility
setInterval(createStar, 800);
}
function addToUI(name) {
  const p = document.createElement("p");
  p.textContent = name;
  output.appendChild(p);
}