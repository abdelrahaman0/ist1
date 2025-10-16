// Get buttons
const aboutBtn = document.getElementById("aboutBtn");
const coursesBtn = document.getElementById("coursesBtn");
const helpBtn = document.getElementById("helpBtn");

// Function to open popup
function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "flex";
  }
}

// Function to close popup
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
  }
}

// Event listeners
aboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup("aboutPopup");
});

coursesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup("coursesPopup");
});

helpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup("helpPopup");
});

// Subject links popup
const subjectLinks = document.querySelectorAll(".subject .dropdown a");

subjectLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const doctorName = "Dr. Fulan"; // ممكن تغيّر حسب المادة
    document.querySelector("#subjectPopup .subject-doctor").textContent = doctorName;
    openPopup("subjectPopup");
  });
});

// اظهار الفوتر عند نهاية الصفحة
window.addEventListener("scroll", () => {
  const footer = document.querySelector(".footer");
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled >= scrollableHeight - 50) { // قبل النهاية بشوية يظهر
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
});
