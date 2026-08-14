document.getElementById("downloadButton").onclick = function () {
    alert("You clicked the download button!");
};

document.getElementById("verifyButton").onclick = function () {
    alert("You clicked the verify button!");
};

const rivalButton = document.getElementById("RivalButton");

rivalButton.addEventListener("click", () => {
    window.location.href = "Clanrivals.html";
});