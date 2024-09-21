document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".copyBtn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const command = document.getElementById(targetId).innerText;

      navigator.clipboard
        .writeText(command)
        .then(() => {
          alert("Copied: " + command);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
          alert("Failed to copy text.");
        });
    });
  });
});
