
const myForm2 = document.getElementById('myForm2');
myForm2.addEventListener('submit', function submitForm2(e) {
    e.preventDefault();
    const name = inputValue('name');
    const email = inputValue('email');
    const country = inputValue('country');
    const age = inputValue('age');
    const height = inputValue('height');
    const weight = inputValue('weight');
    const gender = inputValue('gender');
    const martialstatus = inputValue('martialstatus');
    const food = inputValue('food');
    const describefood = inputValue('describefood');
    const foodpattern2 = inputValue('food-pattern2');
    const water = inputValue('water');
    const medicalhistory = inputValue('medicalhistory');
    const diesease = inputValue('diesease');
    const plans = inputValue('plans');
    const medicalhistory2 = inputValue('medicalhistory2');
    const problem = inputValue('problem');


    const appointment = {
        name: name,
        email: email,
        country: country,
        age: age,
        height: height,
        weight: weight,
        gender: gender,
        martialstatus: martialstatus,
        food: food,
        describefood: describefood,
        foodpattern2: foodpattern2,
        water: water,
        medicalhistory: medicalhistory,
        diesease: diesease,
        plans: plans,
        medicalhistory2: medicalhistory2,
        problem: problem

    };
    console.log(appointment);
    alert('Your Form is submitted');
});

function inputValue(id) {
    return document.getElementById(id).value;
};