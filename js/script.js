document.addEventListener("DOMContentLoaded" , ()=>{

    const layout = document.getElementById("layout");
    const section = [...layout.children];
    let page = 0;
    const last = section.length - 1; //3   

    //스크롤이나 마우스휠 이벤트
    window.addEventListener('wheel', e  =>{
        e.preventDefault;

        if(e.deltaY > 0)        page++;
        else if (e.deltaY < 0)  page--;

        if(page < 0 )           page = 0;
        else if (page > last)   page = last; //3
        
        console.log( e.deltaY );

        layout.style.top = page * (-100) + "vh";// -100vh;

    } , {passive: false});

    //모바일환경, 터치이벤트
    let startY;
    window.addEventListener("touchstart" , e =>{
        startY = e.touches[0].clientY;
    });

    window.addEventListener("touchend" , e => {
        const endY = e.changedTouches[0].clientY;
        const deltaY = startY - endY;

        if( Math.abs(deltaY) > 20 ) {
            if( deltaY > 0)         page++;
            else if( deltaY < 0 )   page--;  

            if(page < 0 )           page = 0;
            else if (page > last)   page = last; //3

            layout.style.top = page * (-100) + "dvh";// -100dvh;
            console.log( deltaY );
        }
    } , {passive: false});


});//end...............
