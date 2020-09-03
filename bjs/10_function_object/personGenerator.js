const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анна",
            "id_3": "Людмила",
            "id_4": "Антонина",
            "id_5": "Светлана",
            "id_6": "Елена",
            "id_7": "Марина",
            "id_8": "Екатерина",
            "id_9": "Елизавета",
            "id_10": "Ольга"
        }
    
    }`,
    secondNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михайлович",
            "id_8": "Данилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    secondNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитишна",
            "id_7": "Михайловна",
            "id_8": "Даниловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "слесарь",
            "id_2": "шахтер",
            "id_3": "учитель",
            "id_4": "программист",
            "id_5": "музыкант",
            "id_6": "продавец",
            "id_7": "водитель",
            "id_8": "менеджер",
            "id_9": "строитель",
            "id_10": "сантехник"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "учительница",
            "id_2": "продавщица",
            "id_3": "музыкант",
            "id_4": "врач",
            "id_5": "программист",
            "id_6": "менеджер",
            "id_7": "бухгалтер",
            "id_8": "экономист",
            "id_9": "няня",
            "id_10": "повар"
        }
    
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        if (this.person.gender == this.GENDER_MALE) {
            
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            
            return this.randomValue(this.firstNameFemaleJson);
        }        

    },

    randomSecondName: function() {

        if (this.person.gender == this.GENDER_MALE) {
            
            return this.randomValue(this.secondNameMaleJson);
        }
        else {
            
            return this.randomValue(this.secondNameFemaleJson);
        }    

    },

     randomSurname: function() {

        if (this.person.gender == this.GENDER_MALE) {
        
            return this.randomValue(this.surnameJson);
        }
        else {

            return this.randomValue(this.surnameJson) + 'а';
        }

    },

    randomBirthDate: function() {

        let month = Math.round(Math.random()*11) + 1;
        let day;
        
        switch(month)
        {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day = Math.round(Math.random()*30) + 1;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                day = Math.round(Math.random()*29) + 1;
                break;
            case 2:
                day = Math.round(Math.random()*27) + 1;
                break;
        }

        const birth = JSON.parse(this.monthJson);
        const birthMonth = `id_${month,1}`;
        return day + " " + birth.list[birthMonth];
    },

    randomProfession: function() {

        if (this.person.gender == this.GENDER_MALE) {
        
            return this.randomValue(this.professionMaleJson);
        }
        else {

            return this.randomValue(this.professionFemaleJson);
        }

    },

    randomGender: function() {

        return Math.round(Math.random()*1) ? this.GENDER_FEMALE : this.GENDER_MALE;

    },

    randomBirthYear: function() {

       return this.randomIntNumber(1950, 2000) + ' год рождения';

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.secondName = this.randomSecondName();
        this.person.birthYear = this.randomBirthYear();
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
