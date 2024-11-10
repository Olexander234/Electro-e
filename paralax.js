document.addEventListener('mousemove', function(e) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    let mouseX = (e.pageX / width) * 100;
    let mouseY = (e.pageY / height) * 100;
    

    // Ajustează coeficienții pentru o mișcare mai amplă
    document.querySelector('.layer1').style.transform = `translate(${mouseX / 6}%, ${mouseY / 18}%)`;
    document.querySelector('.layer2').style.transform = `translate(${mouseX / 10}%, ${mouseY / 50}%)`;
    document.querySelector('.layer3').style.transform = `translate(${mouseX / 18}%, ${mouseY / 18}%)`;
});