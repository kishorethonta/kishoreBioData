document.getElementById("showBtn").addEventListener("click", function () {
  const details = document.getElementById("moredetails");

  if (details.style.display === "none") {
    details.style.display = "block";
    this.textContent = "Show less Details";
  } else {
    details.style.display = "none";
    this.textContent = "Show more Details";
  }
});
