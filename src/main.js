document.addEventListener('DOMContentLoaded', () => {
    const topMenu = document.getElementById('top-menu');
    const toggleTopMenuIcon = document.getElementById('toggle-top-menu-icon');

    if (topMenu && toggleTopMenuIcon) { // 
        document.addEventListener('click', (e) => {
            if (toggleTopMenuIcon.contains(e.target)) {
                // Click vào toggle icon để an/hien menu
                topMenu.classList.toggle('topmenu-expanded');
                topMenu.classList.toggle('hidden');
            } else if (!topMenu.contains(e.target)) {
                // Click bên ngoài để ẩn menu
                topMenu.classList.add('hidden');
                if(topMenu.classList.contains('topmenu-expanded')){
                    topMenu.classList.remove('topmenu-expanded');
                    topMenu.classList.add('hidden');
                }
            }
        });
    } else {
        console.error('Không tìm thấy #top-menu hoặc #toggle-top-menu-icon trong DOM.');
    }
});
