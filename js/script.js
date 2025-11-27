/* File: js/script.js */
console.log("Hệ thống đã sẵn sàng - MSSV: 710-XXXXXX");

document.addEventListener("DOMContentLoaded", function() {
    // Hiệu ứng đơn giản: Highlight link khi di chuột
    const links = document.querySelectorAll('.btn-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => link.style.opacity = "0.8");
        link.addEventListener('mouseleave', () => link.style.opacity = "1");
    });
});