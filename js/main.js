beginClock = function() {
    /animate clock sections onto screen here*/
    startUpdates();
}

startUpdates = function() {

    setInterval(function(){
        displayTime();
    }, 500);

}
/*
var p = 10,
ones = p % 10,
tens = p % 100 / 10 | 0, 
huns = p / 100 | 0;
*/

displayTime = function() {

var currentTime = new Date()
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
/*seconds dot, 1*/
if (seconds % 2 != 0) {
    $('#sec_1_1').removeClass('dot-inactive');
    $('#sec_1_1').addClass('dot-active');
} else {
    $('#sec_1_1').removeClass('dot-active');
    $('#sec_1_1').addClass('dot-inactive');
}
/*seconds dot, 2*/
if ((seconds % 10) == 2 || (seconds % 10) == 3 || (seconds % 10) == 6 || (seconds % 10) == 7) {
    $('#sec_1_2').removeClass('dot-inactive');
    $('#sec_1_2').addClass('dot-active');
} else {
    $('#sec_1_2').removeClass('dot-active');
    $('#sec_1_2').addClass('dot-inactive');
}
/*seconds dot, 4*/
if ((seconds % 10) == 4 || (seconds % 10) == 5 || (seconds % 10) == 6 || (seconds % 10) == 7) {
    $('#sec_1_3').removeClass('dot-inactive');
    $('#sec_1_3').addClass('dot-active');
} else {
    $('#sec_1_3').removeClass('dot-active');
    $('#sec_1_3').addClass('dot-inactive');
}
/*seconds dot, 8*/
if ((seconds % 10) == 8 || (seconds % 10) == 9){
    $('#sec_1_4').removeClass('dot-inactive');
    $('#sec_1_4').addClass('dot-active');
} else {
    $('#sec_1_4').removeClass('dot-active');
    $('#sec_1_4').addClass('dot-inactive');
}
/*-----------------------------------------------*/
/*seconds dot, 1*/
if ((seconds % 100 / 10 | 0) % 2 != 0) {
    $('#sec_10_1').removeClass('dot-inactive');
    $('#sec_10_1').addClass('dot-active');
} else {
    $('#sec_10_1').removeClass('dot-active');
    $('#sec_10_1').addClass('dot-inactive');
}
/*seconds dot, 2*/
if ((seconds % 100 / 10 | 0) == 2 || (seconds % 100 / 10 | 0) == 3 || (seconds % 100 / 10 | 0) == 6 || (seconds % 100 / 10 | 0) == 7) {
    $('#sec_10_2').removeClass('dot-inactive');
    $('#sec_10_2').addClass('dot-active');
} else {
    $('#sec_10_2').removeClass('dot-active');
    $('#sec_10_2').addClass('dot-inactive');
}
/*seconds dot, 4*/
if ((seconds % 100 / 10 | 0) == 4 || (seconds % 100 / 10 | 0) == 5 || (seconds % 100 / 10 | 0) == 6 || (seconds % 100 / 10 | 0) == 7) {
    $('#sec_10_3').removeClass('dot-inactive');
    $('#sec_10_3').addClass('dot-active');
} else {
    $('#sec_10_3').removeClass('dot-active');
    $('#sec_10_3').addClass('dot-inactive');
}
/*-------------------------------------------------*/
/*minutes dot, 1*/
if (minutes % 2 != 0) {
    $('#min_1_1').removeClass('dot-inactive');
    $('#min_1_1').addClass('dot-active');
} else {
    $('#min_1_1').removeClass('dot-active');
    $('#min_1_1').addClass('dot-inactive');
}
/*minutes dot, 2*/
if ((minutes % 10) == 2 || (minutes % 10) == 3 || (minutes % 10) == 6 || (minutes % 10) == 7) {
    $('#min_1_2').removeClass('dot-inactive');
    $('#min_1_2').addClass('dot-active');
} else {
    $('#min_1_2').removeClass('dot-active');
    $('#min_1_2').addClass('dot-inactive');
}
/*minutes dot, 4*/
if ((minutes % 10) == 4 || (minutes % 10) == 5 || (minutes % 10) == 6 || (minutes % 10) == 7) {
    $('#min_1_3').removeClass('dot-inactive');
    $('#min_1_3').addClass('dot-active');
} else {
    $('#min_1_3').removeClass('dot-active');
    $('#min_1_3').addClass('dot-inactive');
}
/*minutes dot, 8*/
if ((minutes % 10) == 8 || (minutes % 10) == 9){
    $('#min_1_4').removeClass('dot-inactive');
    $('#min_1_4').addClass('dot-active');
} else {
    $('#min_1_4').removeClass('dot-active');
    $('#min_1_4').addClass('dot-inactive');
}
/*-----------------------------------------------*/
/*minutes dot, 1*/
if ((minutes % 100 / 10 | 0) % 2 != 0) {
    $('#min_10_1').removeClass('dot-inactive');
    $('#min_10_1').addClass('dot-active');
} else {
    $('#min_10_1').removeClass('dot-active');
    $('#min_10_1').addClass('dot-inactive');
}
/*minutes dot, 2*/
if ((minutes % 100 / 10 | 0) == 2 || (minutes % 100 / 10 | 0) == 3 || (minutes % 100 / 10 | 0) == 6 || (minutes % 100 / 10 | 0) == 7) {
    $('#min_10_2').removeClass('dot-inactive');
    $('#min_10_2').addClass('dot-active');
} else {
    $('#min_10_2').removeClass('dot-active');
    $('#min_10_2').addClass('dot-inactive');
}
/*minutes dot, 4*/
if ((minutes % 100 / 10 | 0) == 4 || (minutes % 100 / 10 | 0) == 5 || (minutes % 100 / 10 | 0) == 6 || (minutes % 100 / 10 | 0) == 7) {
    $('#min_10_3').removeClass('dot-inactive');
    $('#min_10_3').addClass('dot-active');
} else {
    $('#min_10_3').removeClass('dot-active');
    $('#min_10_3').addClass('dot-inactive');
}
/*-----------------------------------------------*/
/*hours dot, 1*/
if (hours % 2 != 0) {
    $('#hr_1_1').removeClass('dot-inactive');
    $('#hr_1_1').addClass('dot-active');
} else {
    $('#hr_1_1').removeClass('dot-active');
    $('#hr_1_1').addClass('dot-inactive');
}
/*hours dot, 2*/
if ((hours % 10) == 2 || (hours % 10) == 3 || (hours % 10) == 6 || (hours % 10) == 7) {
    $('#hr_1_2').removeClass('dot-inactive');
    $('#hr_1_2').addClass('dot-active');
} else {
    $('#hr_1_2').removeClass('dot-active');
    $('#hr_1_2').addClass('dot-inactive');
}
/*hours dot, 4*/
if ((hours % 10) == 4 || (hours % 10) == 5 || (hours % 10) == 6 || (hours % 10) == 7) {
    $('#hr_1_3').removeClass('dot-inactive');
    $('#hr_1_3').addClass('dot-active');
} else {
    $('#hr_1_3').removeClass('dot-active');
    $('#hr_1_3').addClass('dot-inactive');
}
/*hours dot, 8*/
if ((hours % 10) == 8 || (hours % 10) == 9){
    $('#hr_1_4').removeClass('dot-inactive');
    $('#hr_1_4').addClass('dot-active');
} else {
    $('#hr_1_4').removeClass('dot-active');
    $('#hr_1_4').addClass('dot-inactive');
}
/*-----------------------------------------------*/
/*hours dot, 1*/
if ((hours % 100 / 10 | 0) % 2 != 0) {
    $('#hr_10_1').removeClass('dot-inactive');
    $('#hr_10_1').addClass('dot-active');
} else {
    $('#hr_10_1').removeClass('dot-active');
    $('#hr_10_1').addClass('dot-inactive');
}
/*hours dot, 2*/
if ((hours % 100 / 10 | 0) == 2 || (hours % 100 / 10 | 0) == 3 || (hours % 100 / 10 | 0) == 6 || (hours % 100 / 10 | 0) == 7) {
    $('#hr_10_2').removeClass('dot-inactive');
    $('#hr_10_2').addClass('dot-active');
} else {
    $('#hr_10_2').removeClass('dot-active');
    $('#hr_10_2').addClass('dot-inactive');
}
}