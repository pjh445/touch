document.addEventListener("DOMContentLoaded", () => {

    const layout = document.getElementById("layout");
    const section = [...layout.children];
    let page = 0;
    const last = section.length - 1; // Last page index

    // Update page based on delta value
    function updatePage(newPage) {
        if (newPage < 0) newPage = 0;
        else if (newPage > last) newPage = last;

        if (newPage !== page) {
            page = newPage;
            layout.style.top = page * (-100) + "vh";
        }
    }

    // Handle wheel event
    window.addEventListener('wheel', (e) => {
        e.preventDefault(); // Prevent default scrolling behavior
        if (e.deltaY > 0) updatePage(page + 1);
        else if (e.deltaY < 0) updatePage(page - 1);
    }, { passive: false });

    // Handle touch events
    let startY;

    window.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });

    window.addEventListener('touchend', (e) => {
        const endY = e.changedTouches[0].clientY;
        const deltaY = startY - endY;

        if (Math.abs(deltaY) > 50) { // Threshold to determine a significant swipe
            if (deltaY > 0) updatePage(page + 1); // Swipe up
            else if (deltaY < 0) updatePage(page - 1); // Swipe down
        }
    }, { passive: false });

});
