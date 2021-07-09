const box = document.querySelector('.box');
let counter = 0;
const colors = ['red', 'yellow', 'green'];
box.addEventListener('mouseenter', function (e) { 
    const selectedColorIndex = counter % colors.length;
    e.target.style.backgroundColor = colors[selectedColorIndex];
    counter++;
});
// box.addEventListener('mouseenter', function (e) { 
//     if(counter === 0) {
//         e.target.style.backgroundColor = 'red';
//     }    
//     if(counter === 1) {   
//         e.target.style.backgroundColor = 'yellow';
//     }
//     if(counter === 2) {
//         e.target.style.backgroundColor = 'green';
//     }
//     if(counter === 3) {
//         e.target.style.backgroundColor = 'blue';
//     }
//     counter++;
//     if(counter === 4) {
//         counter = 0;
//     }
// });
box.addEventListener('mouseleave', function (e) {
    e.target.style.backgroundColor = 'violet';
});
