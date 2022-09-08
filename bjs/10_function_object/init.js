
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.lastName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.YearOfBirth;
    document.getElementById('proffesionOutput').innerText = initPerson.profession;
    document.getElementById('fatherOutput').innerText = initPerson.father;
};

document.getElementById('generateBut').addEventListener('click', function () {
    window.onload()
})
document.getElementById('clearBut').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('genderOutput').innerText = 'Пол';
    document.getElementById('birthYearOutput').innerText = 'Год рождения';
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('genderOutput').innerText = 'Пол';
    document.getElementById('birthYearOutput').innerText = 'Год рождения';
    document.getElementById('proffesionOutput').innerText = 'Профессия';
    document.getElementById('fatherOutput').innerText = 'Отчество';
})

