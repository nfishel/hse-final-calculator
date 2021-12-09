function getMax(num){
    return .8 * num + 20;
}
function getMin(num){
    return .8 * num;
}

function calcFinalGrade(sem1){
    const max = getMax(sem1);
    const min = getMin(sem1);
    console.log(`If you ace the final: ${Math.round(max)}`);
    console.log(`If you get a 0 on the final: ${Math.round(min)}`);

    const range = Math.round(max - min);
    console.log(range);
}

function getSEM1grade(current, final){
    const grade =  (.8*current + .2*final).toFixed(2);
    return grade;
}

// function showPossible(grade){
//     let html;
//     for(let i=0; i<=100; i++){
//         const myGrade = getSEM1grade(grade, i);
//         html +=`
//         <div>If you score a ${i} on the final exam, your Semester 1 grade will be: ${myGrade}</div>
//         `
        
//     }
//     document.body.insertAdjacentHTML('afterbegin', html);
// }

const slider = document.querySelector('#finalSlider');
const curGrade = document.querySelector('#curGrade');

function getMyGrade(){
    let myCurGrade = Number(curGrade.value);
    !myCurGrade? myCurGrade = 0:null;
    const h2 = document.querySelector('h2');
    h2.innerText = `Grade On the Final: ${slider.value}`;
    const h1 = document.querySelector('#mySem1')
    h1.innerText = `SEM1 Final Grade: ${getSEM1grade(myCurGrade, Number(slider.value))}`;
    
}
slider.addEventListener('input', getMyGrade);
curGrade.addEventListener('input', getMyGrade);
getMyGrade();