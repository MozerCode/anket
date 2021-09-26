var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
        cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
        nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);



$(function(){
$(window).scroll(function() {
var top = $(document).scrollTop();
if (top < 800){
	$(".SocialInfo").css("display", "none");
}
else {
   	$(".SocialInfo").css("display", "block");
}
});
});

/*---------------------------  1  ---------------------------------------------*/
$( "#block1_1 img, #icon1").hover(function() {
 	$("#icon1").css("opacity", "1");
 	$( "#block1_1 img").css("opacity", "0.3");
});
$( "#block1_1 img, #icon1").mouseout(function() {
 	$("#icon1").css("opacity", "0");
 	$( "#block1_1 img").css("opacity", "1");
});


/*--------------------------  2  --------------------------------------------*/
$( "#block1_2 img, #icon2").hover(function() {
 	$("#icon2").css("opacity", "1");
 	$( "#block1_2 img").css("opacity", "0.3");
});
$( "#block1_2 img, #icon2").mouseout(function() {
 	$("#icon2").css("opacity", "0");
 	$( "#block1_2 img").css("opacity", "1");
});


/*--------------------------  3  --------------------------------------------*/
$( "#block1_3 img, #icon3").hover(function() {
 	$("#icon3").css("opacity", "1");
 	$( "#block1_3 img").css("opacity", "0.3");
});
$( "#block1_3 img, #icon3").mouseout(function() {
 	$("#icon3").css("opacity", "0");
 	$( "#block1_3 img").css("opacity", "1");
});


/*--------------------------  4  --------------------------------------------*/
$( "#block1_4 img, #icon4").hover(function() {
 	$("#icon4").css("opacity", "1");
 	$( "#block1_4 img").css("opacity", "0.3");
});
$( "#block1_4 img, #icon4").mouseout(function() {
 	$("#icon4").css("opacity", "0");
 	$( "#block1_4 img").css("opacity", "1");
});


/*--------------------------  5  --------------------------------------------*/
$( "#block1_5 img, #icon5").hover(function() {
 	$("#icon5").css("opacity", "1");
 	$( "#block1_5 img").css("opacity", "0.3");
});
$( "#block1_5 img, #icon5").mouseout(function() {
 	$("#icon5").css("opacity", "0");
 	$( "#block1_5 img").css("opacity", "1");
});


/*--------------------------  6  --------------------------------------------*/
$( "#block1_6 img, #icon6").hover(function() {
 	$("#icon6").css("opacity", "1");
 	$( "#block1_6 img").css("opacity", "0.3");
});
$( "#block1_6 img, #icon6").mouseout(function() {
 	$("#icon6").css("opacity", "0");
 	$( "#block1_6 img").css("opacity", "1");
});


/*--------------------------  7  --------------------------------------------*/
$( "#block1_7 img, #icon7").hover(function() {
 	$("#icon7").css("opacity", "1");
 	$( "#block1_7 img").css("opacity", "0.3");
});
$( "#block1_7 img, #icon7").mouseout(function() {
 	$("#icon7").css("opacity", "0");
 	$( "#block1_7 img").css("opacity", "1");
});


/*--------------------------  8  --------------------------------------------*/
$( "#block1_8 img, #icon8").hover(function() {
 	$("#icon8").css("opacity", "1");
 	$( "#block1_8 img").css("opacity", "0.3");
});
$( "#block1_8 img, #icon8").mouseout(function() {
 	$("#icon8").css("opacity", "0");
 	$( "#block1_8 img").css("opacity", "1");
});


/*--------------------------  9  --------------------------------------------*/
$( "#block1_9 img, #icon9").hover(function() {
 	$("#icon9").css("opacity", "1");
 	$( "#block1_9 img").css("opacity", "0.3");
});
$( "#block1_9 img, #icon9").mouseout(function() {
 	$("#icon9").css("opacity", "0");
 	$( "#block1_9 img").css("opacity", "1");
});


/*--------------------------  10  --------------------------------------------*/
$( "#block1_10 img, #icon10").hover(function() {
 	$("#icon10").css("opacity", "1");
 	$( "#block1_10 img").css("opacity", "0.3");
});
$( "#block1_10 img, #icon10").mouseout(function() {
 	$("#icon10").css("opacity", "0");
 	$( "#block1_10 img").css("opacity", "1");
});


/*--------------------------  11  --------------------------------------------*/
$( "#block1_11 img, #icon11").hover(function() {
 	$("#icon11").css("opacity", "1");
 	$( "#block1_11 img").css("opacity", "0.3");
});
$( "#block1_11 img, #icon11").mouseout(function() {
 	$("#icon11").css("opacity", "0");
 	$( "#block1_11 img").css("opacity", "1");
});


/*--------------------------  12  --------------------------------------------*/
$( "#block1_12 img, #icon12").hover(function() {
 	$("#icon12").css("opacity", "1");
 	$( "#block1_12 img").css("opacity", "0.3");
});
$( "#block1_12 img, #icon12").mouseout(function() {
 	$("#icon12").css("opacity", "0");
 	$( "#block1_12 img").css("opacity", "1");
});


(function () {
    $(window).scroll(function () { 
        var Num = $(window).scrollTop() / 500;
        var Num2 = $(window).scrollTop() * .0004; // higher number for larger scaling BG
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * .2; // speed of title scroll
        var Num3mod = Num3 + 1;
        return $('.shade').css('opacity', Num),
        $(".bg").css({"transform":"scale(" + Num2mod + ")"}),
        $(".text").css({"margin-top":"-" + Num3mod + "px"});
    });
}.call(this));

/*$("body").keypress(function(eventObject){
  alert('Вы ввели символ с клавиатуры. Его код равен ' + eventObject.which); 
    switch(eventObject.which){
  
  case 49: 
    {
      alert("pizdes 1");
      break;
    }
  case 50: 
    {
      alert("pizdes 2");
      break;
    }   
  case 51: 
    {
      alert("pizdes 3");
      break;
    }
  case 52: 
    {
      alert("pizdes 4");
      break;
    }
  case 53: 
    {
      alert("pizdes 5");
      break;
    }     
  case 54: 
    {
      alert("pizdes 6");
      break;
    }
  }
});*/