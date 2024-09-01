
document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
       
        toggleOverlay();
    });

    
    function toggleOverlay() {
        let overlay = document.getElementById('overlay');

        if (!overlay) {
           
            overlay = document.createElement('div');
            overlay.id = 'overlay';
            overlay.className = 'overlay';
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function () {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
        }

     
        overlay.classList.toggle('active');
    }

    
    window.addEventListener('resize', function () {
        if (window.innerWidth > 767) {
            sidebar.classList.remove('active');
            const overlay = document.getElementById('overlay');
            if (overlay) {
                overlay.classList.remove('active');
            }
        }
    });
});
