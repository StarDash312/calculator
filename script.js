const conclusion = document.querySelector(".conclusion"),// поле вывода
    buttonsDiv = document.getElementById("panel"),// блок с кнопками
    clear = document.querySelector(".clear"),// кнопка Clear
    equally = document.querySelector(".equally");// кнопка =

let childrens = buttonsDiv.children;// получение дочерних элементов (кнопок)
let arr = Array.from(childrens);// трансформирование элементов в массив
conclusion.disabled = true;
// удаление из массива кнопок С и =
arr.splice(15, 2); 
// функция вывода нажатых кнопок в поле вывода
arr.forEach(
    function (elem) {
        elem.onclick = () => {
            conclusion.value += elem.value
        }
    })
// функция расчета выражения по нажатию на кнопку =
equally.onclick = () => {
    conclusion.value = window.eval(conclusion.value);
}
// функция очистки поля вывода по нажатию на кнопку С
clear.onclick = () => {
    conclusion.value = ""
}


    
// 48,49,50,51,52,53,54,55,56,57,170,187,189,191,190