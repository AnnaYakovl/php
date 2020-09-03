
document.getElementById('generate').addEventListener('click', function () {
    
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;    
    document.getElementById('professionOutput').innerText = initPerson.profession; 
})

document.getElementById('clear').addEventListener('click', function () {
   
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('secondNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('birthDateOutput').innerText = "";   
    document.getElementById('professionOutput').innerText = "";
})

