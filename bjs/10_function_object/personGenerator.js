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

    firstNameFemmaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Оксана",
            "id_3": "Марина",
            "id_4": "Лариса",
            "id_5": "Анастасия",
            "id_6": "Екатерина",
            "id_7": "Дарья",
            "id_8": "Алена",
            "id_9": "Любовь",
            "id_10": "Валерия"
        }
    }`,

    genderJson: `{
        "count": 2,
        "list": {     
            "id_1": "Мужчина",
            "id_2": "Женщина"
        }
    }`,

    proffesonJson: `{
        "count": 7,
        "list": {     
            "id_1": "Шахтер",
            "id_2": "Солдат",
            "id_3": "Слесарь",
            "id_4": "Повар",
            "id_5": "Строитель",
            "id_6": "Учитель",
            "id_7": "Программист"
        }
    }`,

    fatherMaleJson: `{
        "count": 7,
        "list": {     
            "id_1": "Петрович",
            "id_2": "Игоревич",
            "id_3": "Семенович",
            "id_4": "Иванович",
            "id_5": "Сергеевич",
            "id_6": "Александрович",
            "id_7": "Дмитриевич"
        }
    }`,

    fatherFemaleJson: `{
        "count": 7,
        "list": {     
            "id_1": "Петровна",
            "id_2": "Игоревна",
            "id_3": "Семеновна",
            "id_4": "Ивановна",
            "id_5": "Сергеевна",
            "id_6": "Александровна",
            "id_7": "Дмитриевна"
        }
    }`,

    // randomGender: function() {

    //     return this.randomValue(2)
    //     // return this.randomValue(this.firstNameMaleJson);
    // },

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFather: function(json) {

        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.fatherMaleJson)
        } else {
            return this.randomValue(this.fatherFemaleJson)
        }
        
    },

    randomProffesion: function(json) {

        let tmpProf = this.randomValue(this.proffesonJson);

        if (this.person.gender === 'Мужчина') {
            return tmpProf
        } else {
            let skipFemProf = ["Шахтер", "Солдат", "Слесарь"];
            while (skipFemProf.includes(tmpProf)){
                tmpProf = this.randomValue(this.proffesonJson);
            }
            return tmpProf
        }   
        
    },

    randomFirstName: function() {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson)
        } else {
            return this.randomValue(this.firstNameFemmaleJson)
        }  
        // return this.randomValue(this.firstNameFemmaleJson)
    },


     randomSurname: function() {
        if (this.person.gender === 'Женщина') {
            return this.randomValue(this.surnameJson)+'a'}
        return this.randomValue(this.surnameJson);
    },

    randomGender: function() {
        return this.randomValue(this.genderJson);
    },

    // randomYearOfBirth: function() {
    //     let year = Math.floor(Math.random() * (2004 - 1950) + 1950);
    //     return year;
    // },

    randomDateOfBirth: function() {
        let start = new Date(1950, 0, 1);
        let end = new Date(2004, 0,1)
        var options = {year: 'numeric', month: 'long', day: 'numeric' };
        var randDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        return randDate.toLocaleDateString('ru-RU', options);
      },


    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.lastName = this.randomSurname();
        this.person.profession = this.randomProffesion()
        this.person.YearOfBirth = this.randomDateOfBirth();
        this.person.father = this.randomFather();
        console.log(this.randomFather());
        return this.person;
    }
};
