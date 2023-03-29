function animEntrada(){
    gsap.from('#tabla1, #tabla2',{
    duration: 1.6,
    y:  -1000,
    delay: 0,
    ease: "bounce.out",
    });
    console.log('Animacion');

    gsap.from('#tabla3',{
    duration: 1.6,
    y:  1000,
    delay: 0,
    ease: "bounce.out",
    });
    console.log('Animacion');

    gsap.from('img',{
        duration: 1.6,
        x:  1000,
        borderRadius: '100%',
        ease: "bounce.out",
        });
        console.log('Animacion');
}