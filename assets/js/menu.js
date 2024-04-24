const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Menghapus class aktif
        menuItems.forEach((item) => item.classList.remove('active'));

        // Menambahkan class aktif
        item.classList.add('active');
    });
});

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
});