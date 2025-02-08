document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("dateOptions").classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = "I'm not asking, I'm telling 😏";
    document.getElementById("message").classList.remove("hidden");
});

document.getElementById("dateSelect").addEventListener("change", function() {
    if (this.value) {
        document.getElementById("placeOptions").classList.remove("hidden");
    } else {
        document.getElementById("placeOptions").classList.add("hidden");
    }
});

document.getElementById("placeSelect").addEventListener("change", function() {
    if (this.value) {
        document.getElementById("message").textContent = 
            `Great! See you on ${document.getElementById("dateSelect").value} at ${this.value}! 🎉`;
        document.getElementById("message").classList.remove("hidden");
    }
});
