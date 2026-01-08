const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const downloadBtn = document.getElementById('downloadBtn');

  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'Document 1.pdf'; // Vendos rrugën e PDF-it këtu
    link.download = 'MyCV.pdf'; // Emri me të cilin do shkarkohet
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });