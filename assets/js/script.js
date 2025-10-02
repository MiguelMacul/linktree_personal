document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".links a");
  const previewBox = document.getElementById("preview-box");
  const previewImg = document.getElementById("preview-img");

  links.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
      const previewSrc = link.getAttribute("data-preview");
      if (previewSrc) {
        previewImg.src = previewSrc;
        previewBox.style.display = "block";
      }
    });

    link.addEventListener("mousemove", (e) => {
      previewBox.style.top = e.pageY + 15 + "px";
      previewBox.style.left = e.pageX + 15 + "px";
    });

    link.addEventListener("mouseleave", () => {
      previewBox.style.display = "none";
    });
  });
});
