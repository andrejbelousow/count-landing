// Переменные(модули)
'use strict';
let count = require("./count.js"),
    checkInputs = require("./checkInputs.js"),
    Anchore = require("./Anchors.js"),
    textShow = require("./textShow.js"),
    timer = require("./timer.js");
// Появление текста в хедере
textShow();

// Плавный переход по якорям
Anchore();

// Сброс инпутов и проверка на числовые значения
checkInputs();

// Работа рандомайзера  
count();

// Работа таймера
timer();