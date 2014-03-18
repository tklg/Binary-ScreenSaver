var activeDotColor = 'dot-active-red';
var textColor = '#BF1915';

beginClock = function() {
    /*animate clock sections onto screen here*/
    $('.number').css('color', textColor);

    $('.btn-dl').hover(function() {
            $(this).addClass('btn-dl-hover');
            $(this).css('borderColor', textColor);
        }, 
        function() {
            $(this).removeClass('btn-dl-hover');
            $(this).css('borderColor', '#555');
        });

    startUpdates();
}

startUpdates = function() {

    setInterval(function(){
        displayTime();
    }, 300);

}

changeDotColor = function(cssVal) {
    activeDotColor = cssVal;
    $('.colorBtn').css('backgroundColor', '#000');
    switch (cssVal) {
        case 'dot-active-red': 
            textColor = '#BF1915';
            $('.red').css('backgroundColor', '#BF1915');
            break;
        case 'dot-active-orange': 
            textColor = '#E56717';
            $('.orange').css('backgroundColor', '#E56717');
            break;
        case 'dot-active-yellow': 
            textColor = '#FDD017';
            $('.yellow').css('backgroundColor', '#FDD017');
            break;
        case 'dot-active-green': 
            textColor = '#347c2c';
            $('.green').css('backgroundColor', '#347c2c');
            break;
        case 'dot-active-blue': 
            textColor = '#0020C2';
            $('.blue').css('backgroundColor', '#0020C2');
            break;
        case 'dot-active-purple': 
            textColor = '#842DCE';
            $('.purple').css('backgroundColor', '#842DCE');
            break;
        default:
            textColor = '#BF1915';
            $('.red').css('backgroundColor', '#BF1915');
            break;
    }

    $('.number').css('color', textColor);
    $('.dot').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');

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

$('#num_sec_1_1').html(seconds % 10);
$('#num_sec_10_1').html(seconds % 100 / 10 | 0);
$('#num_min_1_1').html(minutes % 10);
$('#num_min_10_1').html(minutes % 100 / 10 | 0);
$('#num_hr_1_1').html(hours % 10);
$('#num_hr_10_1').html(hours % 100 / 10 | 0);

/*seconds dot, 1*/
if (seconds % 2 != 0) {
    $('#sec_1_1').removeClass('dot-inactive');
    $('#sec_1_1').addClass(activeDotColor);
} else {
    $('#sec_1_1').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#sec_1_1').addClass('dot-inactive');
}
/*seconds dot, 2*/
if ((seconds % 10) == 2 || (seconds % 10) == 3 || (seconds % 10) == 6 || (seconds % 10) == 7) {
    $('#sec_1_2').removeClass('dot-inactive');
    $('#sec_1_2').addClass(activeDotColor);
} else {
    $('#sec_1_2').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#sec_1_2').addClass('dot-inactive');
}
/*seconds dot, 4*/
if ((seconds % 10) == 4 || (seconds % 10) == 5 || (seconds % 10) == 6 || (seconds % 10) == 7) {
    $('#sec_1_3').removeClass('dot-inactive');
    $('#sec_1_3').addClass(activeDotColor);
} else {
    $('#sec_1_3').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#sec_1_3').addClass('dot-inactive');
}
/*seconds dot, 8*/
if ((seconds % 10) == 8 || (seconds % 10) == 9){
    $('#sec_1_4').removeClass('dot-inactive');
    $('#sec_1_4').addClass(activeDotColor);
} else {
    $('#sec_1_4').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#sec_1_4').addClass('dot-inactive');
}
/*-----------------------------------------------*/
/*seconds dot, 1*/
if ((seconds % 100 / 10 | 0) % 2 != 0) {
    $('#sec_10_1').removeClass('dot-inactive');
    $('#sec_10_1').addClass(activeDotColor);
} else {
    $('#sec_10_1').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#sec_10_1').addClass('dot-inactive');
}
/*seconds dot, 2*/
if ((seconds % 100 / 10 | 0) == 2 || (seconds % 100 / 10 | 0) == 3 || (seconds % 100 / 10 | 0) == 6 || (seconds % 100 / 10 | 0) == 7) {
    $('#sec_10_2').removeClass('dot-inactive');
    $('#sec_10_2').addClass(activeDotColor);
} else {
    $('#sec_10_2').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#sec_10_2').addClass('dot-inactive');
}
/*seconds dot, 4*/
if ((seconds % 100 / 10 | 0) == 4 || (seconds % 100 / 10 | 0) == 5 || (seconds % 100 / 10 | 0) == 6 || (seconds % 100 / 10 | 0) == 7) {
    $('#sec_10_3').removeClass('dot-inactive');
    $('#sec_10_3').addClass(activeDotColor);
} else {
    $('#sec_10_3').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#sec_10_3').addClass('dot-inactive');
}
/*-------------------------------------------------*/
/*minutes dot, 1*/
if (minutes % 2 != 0) {
    $('#min_1_1').removeClass('dot-inactive');
    $('#min_1_1').addClass(activeDotColor);
} else {
    $('#min_1_1').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#min_1_1').addClass('dot-inactive');
}
/*minutes dot, 2*/
if ((minutes % 10) == 2 || (minutes % 10) == 3 || (minutes % 10) == 6 || (minutes % 10) == 7) {
    $('#min_1_2').removeClass('dot-inactive');
    $('#min_1_2').addClass(activeDotColor);
} else {
    $('#min_1_2').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#min_1_2').addClass('dot-inactive');
}
/*minutes dot, 4*/
if ((minutes % 10) == 4 || (minutes % 10) == 5 || (minutes % 10) == 6 || (minutes % 10) == 7) {
    $('#min_1_3').removeClass('dot-inactive');
    $('#min_1_3').addClass(activeDotColor);
} else {
    $('#min_1_3').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#min_1_3').addClass('dot-inactive');
}
/*minutes dot, 8*/
if ((minutes % 10) == 8 || (minutes % 10) == 9){
    $('#min_1_4').removeClass('dot-inactive');
    $('#min_1_4').addClass(activeDotColor);
} else {
    $('#min_1_4').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#min_1_4').addClass('dot-inactive');
}
/*-----------------------------------------------*/
/*minutes dot, 1*/
if ((minutes % 100 / 10 | 0) % 2 != 0) {
    $('#min_10_1').removeClass('dot-inactive');
    $('#min_10_1').addClass(activeDotColor);
} else {
    $('#min_10_1').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#min_10_1').addClass('dot-inactive');
}
/*minutes dot, 2*/
if ((minutes % 100 / 10 | 0) == 2 || (minutes % 100 / 10 | 0) == 3 || (minutes % 100 / 10 | 0) == 6 || (minutes % 100 / 10 | 0) == 7) {
    $('#min_10_2').removeClass('dot-inactive');
    $('#min_10_2').addClass(activeDotColor);
} else {
    $('#min_10_2').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#min_10_2').addClass('dot-inactive');
}
/*minutes dot, 4*/
if ((minutes % 100 / 10 | 0) == 4 || (minutes % 100 / 10 | 0) == 5 || (minutes % 100 / 10 | 0) == 6 || (minutes % 100 / 10 | 0) == 7) {
    $('#min_10_3').removeClass('dot-inactive');
    $('#min_10_3').addClass(activeDotColor);
} else {
    $('#min_10_3').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#min_10_3').addClass('dot-inactive');
}
/*-----------------------------------------------*/
/*hours dot, 1*/
if (hours % 2 != 0) {
    $('#hr_1_1').removeClass('dot-inactive');
    $('#hr_1_1').addClass(activeDotColor);
} else {
    $('#hr_1_1').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#hr_1_1').addClass('dot-inactive');
}
/*hours dot, 2*/
if ((hours % 10) == 2 || (hours % 10) == 3 || (hours % 10) == 6 || (hours % 10) == 7) {
    $('#hr_1_2').removeClass('dot-inactive');
    $('#hr_1_2').addClass(activeDotColor);
} else {
    $('#hr_1_2').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#hr_1_2').addClass('dot-inactive');
}
/*hours dot, 4*/
if ((hours % 10) == 4 || (hours % 10) == 5 || (hours % 10) == 6 || (hours % 10) == 7) {
    $('#hr_1_3').removeClass('dot-inactive');
    $('#hr_1_3').addClass(activeDotColor);
} else {
    $('#hr_1_3').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#hr_1_3').addClass('dot-inactive');
}
/*hours dot, 8*/
if ((hours % 10) == 8 || (hours % 10) == 9){
    $('#hr_1_4').removeClass('dot-inactive');
    $('#hr_1_4').addClass(activeDotColor);
} else {
    $('#hr_1_4').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#hr_1_4').addClass('dot-inactive');
}
/*-----------------------------------------------*/
/*hours dot, 1*/
if ((hours % 100 / 10 | 0) % 2 != 0) {
    $('#hr_10_1').removeClass('dot-inactive');
    $('#hr_10_1').addClass(activeDotColor);
} else {
    $('#hr_10_1').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#hr_10_1').addClass('dot-inactive');
}
/*hours dot, 2*/
if ((hours % 100 / 10 | 0) == 2 || (hours % 100 / 10 | 0) == 3 || (hours % 100 / 10 | 0) == 6 || (hours % 100 / 10 | 0) == 7) {
    $('#hr_10_2').removeClass('dot-inactive');
    $('#hr_10_2').addClass(activeDotColor);
} else {
    $('#hr_10_2').removeClass('dot-active-red dot-active-orange dot-active-yellow dot-active-green dot-active-blue dot-active-purple');
    $('#hr_10_2').addClass('dot-inactive');
}
}