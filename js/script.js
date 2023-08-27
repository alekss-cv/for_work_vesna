
let btnMaleNameNext = document.querySelector(".male_name_next");
let maleNameResult = document.querySelector(".male_name_result");
//full name
let btnMaleFullNameNext = document.querySelector(".male_full_name_next");
let maleFullNameResult = document.querySelector(".male_full_name_result");
//
let imgBigBlock_1 = document.querySelector(".img_big_block_1");
let openSelect_1 = document.querySelector(".open_select_1")
let closeSelect_1 = document.querySelector(".close_select_1")
let openSelect_2 = document.querySelector(".open_select_2 ")
let closeSelect_2 = document.querySelector(".close_select_2")
let imgBigBlock_2 = document.querySelector(".img_big_block_2");

let openSelect_3 = document.querySelector(".open_select_3 ")
let closeSelect_3 = document.querySelector(".close_select_3")
let imgBigBlock_3 = document.querySelector(".img_big_block_3");

let openSelect_4 = document.querySelector(".open_select_4 ")
let closeSelect_4 = document.querySelector(".close_select_4")
let imgBigBlock_4 = document.querySelector(".img_big_block_4");

let openSelect_5 = document.querySelector(".open_select_5 ")
let closeSelect_5 = document.querySelector(".close_select_5")
let imgBigBlock_5 = document.querySelector(".img_big_block_5");

let openSelect_6 = document.querySelector(".open_select_6 ")
let closeSelect_6 = document.querySelector(".close_select_6")
let imgBigBlock_6 = document.querySelector(".img_big_block_6");

let openSelect_7 = document.querySelector(".open_select_7 ")
let closeSelect_7 = document.querySelector(".close_select_7")
let imgBigBlock_7 = document.querySelector(".img_big_block_7");

let openSelect_8 = document.querySelector(".open_select_8 ")
let closeSelect_8 = document.querySelector(".close_select_8")
let imgBigBlock_8 = document.querySelector(".img_big_block_8");

let openSelect_9 = document.querySelector(".open_select_9 ")
let closeSelect_9 = document.querySelector(".close_select_9")
let imgBigBlock_9 = document.querySelector(".img_big_block_9");

let openSelect_10 = document.querySelector(".open_select_10 ")
let closeSelect_10 = document.querySelector(".close_select_10")
let imgBigBlock_10 = document.querySelector(".img_big_block_10");

let openSelect_11 = document.querySelector(".open_select_11 ")
let closeSelect_11 = document.querySelector(".close_select_11")
let imgBigBlock_11 = document.querySelector(".img_big_block_11");

let openSelect_12 = document.querySelector(".open_select_12 ")
let closeSelect_12 = document.querySelector(".close_select_12")
let imgBigBlock_12 = document.querySelector(".img_big_block_12");

let openSelect_13 = document.querySelector(".open_select_13 ")
let closeSelect_13 = document.querySelector(".close_select_13")
let imgBigBlock_13 = document.querySelector(".img_big_block_13");
//вывод мужских имен
let allMaleName = [
    "Максим",
    "Николай",
    "Роман",
    "Дмитрий",
    "Даниил",
    "Егор",
    "Алексей",
    "Владислав",
    "Иван",
    "Виктор",

    "Лев",
    "Георгий",
    "Владимир",
    "Фёдор",
    "Матвей",
    "Василий",
    "Арсений",
    "Григорий",
    "Давид",
    "Михаил",

    "Артём",
    "Константин",
    "Родион",
    "Кирилл",
    "Андрей",
    "Никита",
    "Святослав",
    "Савелий",
    "Данил",
    "Антон",

    "Руслан",
    "Мирон",
    "Яков",
    "Захар",
    "Семён",
    "Марк",
    "Степан",
    "Демид",
    "Евгений",
    "Леон",

    "Тимур",
    "Данила",
    "Всеволод",
    "Сергей",
    "Вадим",
    "Борис",
    "Анатолий",
]
let rand
let nextMaleName = function (allMaleName){
        btnMaleNameNext.addEventListener("click" , ()=>{
            rand = Math.floor(Math.random() * allMaleName.length);
            maleNameResult.innerHTML = allMaleName[rand]

        } )
}
nextMaleName(allMaleName)


//вывод мужских ИФО
let allMaleFullName = [
    "Горбунов Илья Платонович",
    "Ефремов Максим Артёмович",
    "Макаров Мирон Маркович",
    "Смирнов Степан Павлович",
    "Зуев Александр Русланович",
    "Ермаков Святослав Михайлович",
    "Большаков Даниил Артёмович",
    "Пастухов Максим Сергеевич",
    "Денисов Мирон Иванович",
    "Козлов Фёдор Васильевич",

    "Лебедев Филипп Антонович",
    "Попов Арсен Александрович",
    "Овчинников Никита Матвеевич",
    "Прокофьев Никита Витальевич",
    "Данилов Илья Максимович",
    "Данилов Марк Александрович",
    "Исаев Кирилл Русланович",
    "Максимов Ярослав Александрович",
    "Гусев Данил Максимович",
    "Волков Владимир Кириллович",

    "Греков Сергей Максимович",
    "Кириллов Михаил Тимофеевич",
    "Семенов Иван Артёмович",
    "Николаев Сергей Ильич",
    "Соловьев Александр Тимурович",
    "Ушаков Александр Артёмович",
    "Снегирев Андрей Максимович",
    "Вавилов Сергей Владимирович",
    "Поляков Руслан Кириллович",
    "Шестаков Павел Данилович",

    "Шувалов Илья Александрович",
    "Степанов Владислав Максимович",
    "Миронов Егор Максимович",
    "Колесников Михаил Максимович",
    "Смирнов Даниил Богданович",
    "Зотов Герман Давидович",
    "Латышев Илья Артемьевич",
    "Федоров Илья Ильич",
    "Шестаков Александр Павлович",
    "Балашов Александр Александрович",
]

let nextMaleFullName = function (allMaleFullName){
    btnMaleFullNameNext .addEventListener("click" , ()=>{
        rand = Math.floor(Math.random() * allMaleFullName.length);
        maleFullNameResult.innerHTML = allMaleFullName[rand]
    } )
}
nextMaleFullName(allMaleFullName)
//закрыть открыть большой 1 селект с фотками
openSelect_1.addEventListener("click" , ()=>{
    imgBigBlock_1.style.display = "block"
})
closeSelect_1.addEventListener("click" , ()=>{
    imgBigBlock_1.style.display = "none"
})

//2
openSelect_2.addEventListener("click" , ()=>{
    imgBigBlock_2.style.display = "block"
})
closeSelect_2.addEventListener("click" , ()=>{
    imgBigBlock_2.style.display = "none"
})
//3
openSelect_3.addEventListener("click" , ()=>{
    imgBigBlock_3.style.display = "block"
})
closeSelect_3.addEventListener("click" , ()=>{
    imgBigBlock_3.style.display = "none"
})
//4
openSelect_4.addEventListener("click" , ()=>{
    imgBigBlock_4.style.display = "block"
})
closeSelect_4.addEventListener("click" , ()=>{
    imgBigBlock_4.style.display = "none"
})
//5
openSelect_5.addEventListener("click" , ()=>{
    imgBigBlock_5.style.display = "block"
})
closeSelect_5.addEventListener("click" , ()=>{
    imgBigBlock_5.style.display = "none"
})
//6
openSelect_6.addEventListener("click" , ()=>{
    imgBigBlock_6.style.display = "block"
})
closeSelect_6.addEventListener("click" , ()=>{
    imgBigBlock_6.style.display = "none"
})
//7
openSelect_7.addEventListener("click" , ()=>{
    imgBigBlock_7.style.display = "block"
})
closeSelect_7.addEventListener("click" , ()=>{
    imgBigBlock_7.style.display = "none"
})
//8
openSelect_8.addEventListener("click" , ()=>{
    imgBigBlock_8.style.display = "block"
})
closeSelect_8.addEventListener("click" , ()=>{
    imgBigBlock_8.style.display = "none"
})
//9
openSelect_9.addEventListener("click" , ()=>{
    imgBigBlock_9.style.display = "block"
})
closeSelect_9.addEventListener("click" , ()=>{
    imgBigBlock_9.style.display = "none"
})
//10
openSelect_10.addEventListener("click" , ()=>{
    imgBigBlock_10.style.display = "block"
})
closeSelect_10.addEventListener("click" , ()=>{
    imgBigBlock_10.style.display = "none"
})
//11
openSelect_11.addEventListener("click" , ()=>{
    imgBigBlock_11.style.display = "block"
})
closeSelect_11.addEventListener("click" , ()=>{
    imgBigBlock_11.style.display = "none"
})
//12
openSelect_12.addEventListener("click" , ()=>{
    imgBigBlock_12.style.display = "block"
})
closeSelect_12.addEventListener("click" , ()=>{
    imgBigBlock_12.style.display = "none"
})
//13
openSelect_13.addEventListener("click" , ()=>{
    imgBigBlock_13.style.display = "block"
})
closeSelect_13.addEventListener("click" , ()=>{
    imgBigBlock_13.style.display = "none"
})

//сброс всех чекбоксов
let uncheck = document.querySelector(".uncheck")
let inputCheckbox = document.querySelectorAll("input");
for (let i = 0 ; i < inputCheckbox.length; i++ ){
    let inputCheckboxValue = inputCheckbox[i]
    uncheck.addEventListener("click" , ()=>{
        inputCheckboxValue.checked = false
        inputCheckboxValue.value = null
    })
}
