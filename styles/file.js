const {
    form
} = document.forms;

function retrieveFormValue(event) {
    event.preventDefault();

    class Cat {
        constructor(nickname, fullname, tel, email, breed, food, sex, comment, file) {
            this.nickname = nickname;
            this.fullname = fullname;
            this.tel = tel;
            this.email = email;
            this.breed = breed;
            this.food = food;
            this.sex = sex;
            this.comment = comment;
            this.file = file;
        }
    }

    let name1 = document.getElementById('name').value;
    let fio1 = document.getElementById('fio').value;
    let tel1 = document.getElementById('tel').value;
    let email1 = document.getElementById('email').value;
    let comment1 = document.getElementById('comments').value;
    let file1 = document.getElementById('foto').value;
    let breed1 = '';
    switch (document.getElementById('select').value) {
        case '1':
            breed1 = 'Мейн-кун';
            break;
        case '2':
            breed1 = 'Шотландская вислоухая кошка';
            break;
        case '3':
            breed1 = 'Британская короткошерстная';
            break;
        case '4':
            breed1 = 'Бенгальская кошка';
            break;
        case '5':
            breed1 = 'Абиссинская кошка';
            break;
        case '6':
            breed1 = 'Ориентальная кошка';
            break;
        case '7':
            breed1 = 'Сибирская кошка';
            break;
    }

    let food1 = '';
    switch (document.querySelector('input[type="checkbox"]:checked').value) {
        case '1':
            food1 = 'сухой корм';
            break;
        case '2':
            food1 = 'влажный корм';
            break;
        case '3':
            food1 = 'натуральный корм';
            break;
    }
    let sex1 = '';
    switch (document.querySelector('input[type="checkbox"]:checked').value) {
        case '1':
            sex1 = 'самец';
            break;
        case '2':
            sex1 = 'самка';
            break;
    }
    let cat1 = new Cat(name1, fio1, tel1, email1, breed1, food1, sex1, comment1, file1);
    console.log(cat1);
}
form.addEventListener('submit', retrieveFormValue);