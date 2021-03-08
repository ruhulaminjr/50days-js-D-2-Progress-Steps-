const prog = document.getElementById('progress');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const circle = document.querySelectorAll('.progress-step');

let counter = 1;
next.addEventListener('click',() =>{
    counter++;
    if(counter > circle.length){
        counter = circle.length;
    }
    updatecircle();
});
prev.addEventListener('click',() =>{
    counter--;
    if(counter < 1){
        counter = 1;
    }
    updatecircle();

});
function updatecircle(){

    circle.forEach((circles,indx) => {
        if(indx < counter){
            circles.classList.add('active');
        }
        else{
            circles.classList.remove('active');
        }
    });
    const actives = document.querySelectorAll('.active');
    prog.style.width = (actives.length - 1)/ (circle.length - 1) * 100 + "%";

    if(counter === 1){
        prev.disabled = true;
    }else if ( counter === circle.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
};

