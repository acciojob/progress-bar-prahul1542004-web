//your JS code here. If required.
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

next.addEventListener("click", () => {
    if (currentStep < circles.length) {
        currentStep++;
        updateProgress();
    }
});

prev.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});

function updateProgress() {

    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    progress.style.width =
        ((currentStep - 1) / (circles.length - 1)) * 100 + "%";

    prev.disabled = currentStep === 1;
    next.disabled = currentStep === circles.length;
}

updateProgress();
