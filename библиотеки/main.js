/*
var iex=(document.all);
var nav=(document.layers);
var n_6=(window.sidebar);

if(nav)window.captureEvents(Event.MOUSEDOWN);
if(n_6) document.addEventListener("MOUSEDOWN",no_click,true);

function no_click(e){
if((nav||n_6) && (e.which==2 || e.which==3))
 {
  alert("Правая кнопка мышки не работает.");return false;
 }
 if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 2 || event.button == 3))
 {
   alert("Правая кнопка мышки не работает.");return false;
 }
}
(nav)?window.onmousedown=no_click:document.onmousedown=no_click;


var pass = prompt("Введите пароль.","qwerty");
var fruits = ["417679", "104204", "135776", "904988", "155073", "387738", "502943", "687947", "015780", "934335", "SS"];

switch (pass) {
  case fruits[0]:
    alert('Здравствуйте, Александр!');
    break;
  case fruits[1]:
    alert('Здравствуйте, Алексей!');
    break;
  case fruits[2]:
    alert('Приветики, Алиса-тян))');
    break;
  case fruits[3]:
    alert('Здравствуйте, Владимир!');
    break;
  case fruits[4]:
    alert('Здравствуйте, Жанна!');
	break;  
  case fruits[5]:
    alert('Здравствуйте, Денис!');
	break;  
  case fruits[6]:
    alert('Здравствуйте, Никита!');
    break;
  case fruits[7]:
    alert('Здравствуйте, Николай!');
    break;
  case fruits[8]:
    alert('Здравствуйте, Роман!');
    break;
  case fruits[9]:
    alert('Здравствуйте, Юлия!');
    break;
  case fruits[10]: break;  
  default:
    {
    	alert( 'Пароль неверный. Верный пароль появится на экране после закрытия этого окна.' );
    	location.href="Пароль/pass.txt";
	}
}

    window.onkeydown = function(evt) {
        if(evt.keyCode == 123) return false;
    };

    window.onkeypress = function(evt) {
        if(evt.keyCode == 123) return false;
    };

alert("Пожалуйста, заполните все формы. \nОт этого напрямую зависит будущее проведение вашего досуга.");
*/

document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');
  for(var i = 0; i < audios.length; i++) {
    if(audios[i] != e.target) {
      audios[i].pause();
    }
  }
}, true);

	$(document).ready(function() {
      $("#ConsolInput").keydown(function(event){
        if(event.keyCode == 13) {
          CheckConsol();
          event.preventDefault();
          return false;
      }
   });
});

	var flagEnterStar = false, flagEnter = false, flagMinusMinus = false, FlagConcolOpen = false;

	window.onkeyup = function(evt) {
        if(evt.keyCode == 13) flagEnter = true;
        if((flagEnter == true)&&(evt.keyCode == 107)) 
        	{
        		flagEnterStar = true;
        		flagEnter = false;
        		$(".activeHidenMusicTable").animate({left: '30px'}, 200).delay(3000).animate({left: '-300px'}, 200);
        	}

        if((flagEnterStar == true)&&(evt.keyCode == 106))
        	{
        		$(".audi").animate({top: '20px'}, 300);
    		};
    	if((flagEnter == true)&&(flagEnterStar == true)) flagMinusMinus = true; 	
        if((flagMinusMinus == true)&&(evt.keyCode == 109)) 
        	{
        		AllClose();
        		$(".NotactiveHidenMusicTable").animate({left: '30px'}, 200).delay(3000).animate({left: '-300px'}, 200);
        		flagEnter = false;
        		flagEnterStar = false;
        		flagMinusMinus = false;
    		};
    	if((flagEnterStar == true)&&(evt.keyCode == 97)) 
        	{
        		$(".audiHid1").slideDown(500);
        		$(".audiHid2").slideUp(500);
        		$(".audiHid3").slideUp(500);
    		};
    	if((flagEnterStar == true)&&(evt.keyCode == 98)) 
        	{
        		$(".audiHid1").slideUp(500);
        		$(".audiHid2").slideDown(500);
        		$(".audiHid3").slideUp(500);
    		};
    	if((flagEnterStar == true)&&(evt.keyCode == 99)) 
        	{
        		$(".audiHid1").slideUp(500);
        		$(".audiHid2").slideUp(500);
        		$(".audiHid3").slideDown(500);
    		};
    	if((flagEnterStar == true)&&(evt.keyCode == 9))
    		{
    			OpenMenu();
    		}
    	if((flagEnterStar == true)&&(evt.keyCode == 192)||(evt.keyCode == 0))
    		{
    			OpenConsol();
    		}	
    	if((flagEnterStar == true)&&(evt.keyCode == 27))
    		{
    			AllClose();
    		}
    };

function CloseInstract(){
	$(".audi").animate({top: '-700px'}, 300);
}
function OpenMenu(){
	$(".menu").animate({top: '0px'}, 300);
}
function CloseMenu(){
	$(".menu").animate({top: '-2000px'}, 300);
}
function OpenConsol(){
	$(".Consol").animate({right: '20px'}, 300);
	$('#ConsolInput').val('');
	FlagConcolOpen = true;
}
function CloseConsol(){
	$(".Consol").animate({right: '-500px'}, 300);
	$('#ConsolInput').val('');
	FlagConcolOpen = false;
}
function OpenConsolInstract(){
	$(".ConsolInfo").animate({right: '17px'}, 300);
}
function CloseConsolInstract(){
	$(".ConsolInfo").animate({right: '-500px'}, 300);
}
function AllClose(){
	$(".audiHid1").slideUp(500);
    $(".audiHid2").slideUp(500);
    $(".audiHid3").slideUp(500);
    CloseMenu();
    CloseConsol();
    CloseInstract();
    CloseConsolInstract();
    FlagConcolOpen = false;
}

function CheckConsol(){
	var ConsolValue =  document.getElementById("ConsolInput").value;
	var Getinfo = "getinfo";
	var Openmenu = "menu+";
	var Close = "close";
	var Closeinfo = "closeinfo";
	var OpenInstract = "instract+";
	var CloseIncstract = "instract-";
	if (ConsolValue == Getinfo)
		OpenConsolInstract();
	if (ConsolValue == Closeinfo)
		CloseConsolInstract();
	if (ConsolValue == Close)
		CloseConsol();
	if (ConsolValue == Openmenu)
		OpenMenu();
	if (ConsolValue == Closemenu)
		CloseMenu();
	if (ConsolValue == OpenInstract)
		OpenInstract();
	if (ConsolValue == CloseIncstract)
		CloseInstract();
}




$(function(){
$(window).scroll(function() {
var top = $(document).scrollTop();
if (top < 400){
	$(".fixmenu").css({position: 'relative', width: '100%'});
	$("#PlayLists").css("display", "block");
	$("#DopBut").css("display", "block");
	$("#fixmenu").css("z-index", "1");
	$(".VolIcon").css("display", "block");
	$("#CatDJimg").css("display", "block");
	$("#PlayList").css("height", "500px");
	$(".dynamicPlayListButtons").css("display", "none");
	$("#ShowPlayButton").css("display", "block");
	$("#HidePlayButton").css("display", "none");
}
else {
	$(".fixmenu").css({top: '0px', width: '100%', position: 'fixed'});
	$("#PlayLists").css("display", "none");
	$("#DopBut").css("display", "none");
	$("#fixmenu").css("z-index", "10000");
	$("#playCatImg").css("display", "none");
	$("#CatDJimg").css("display", "none");
	$(".VolIcon").css("display", "none");
	$(".dynamicPlayListButtons").css("display", "block");
   	$("#PlayList").css("height", "200px");
   	$(".GamesList").css("display", "none");
}
});
});


function showPlayList(){
	$("#PlayList").slideDown();
	$(".CatDJimg").slideDown();
	$("#PlayListButtonHide").css("display", "block");
	$("#PlayListButtonShow").css("display", "none");
	$("#dynamicPlayListButtonHide").css("display", "block");
	$("#dynamicPlayListButtonShow").css("display", "none");
}
function HidePlayList(){
	$("#PlayList").slideUp();
	$(".CatDJimg").slideUp();
	$("#PlayListButtonShow").css("display", "block");
	$("#PlayListButtonHide").css("display", "none");
	$("#dynamicPlayListButtonShow").css("display", "block");
	$("#dynamicPlayListButtonHide").css("display", "none");
}
function showDynamicPlayList(){
	$("#PlayList").slideDown();
	$(".CatDJimg").slideDown();
	$("#PlayListButtonHide").css("display", "block");
	$("#PlayListButtonShow").css("display", "none");
	$("#dynamicPlayListButtonHide").css("display", "block");
	$("#dynamicPlayListButtonShow").css("display", "none");
	$(".VolIcon").css("margin-top", "-20px");
}
function HideDynamicPlayList(){
	$("#PlayList").slideUp();
	$(".CatDJimg").slideUp();
	$("#PlayListButtonShow").css("display", "block");
	$("#PlayListButtonHide").css("display", "none");
	$("#dynamicPlayListButtonShow").css("display", "block");
	$("#dynamicPlayListButtonHide").css("display", "none");
}



$( window ).load(function() {
	return random();
});

function cout(x){
switch(x){
	
	case 0:	
		{
			$("body").css("background", "url(библиотеки/images/Америка.jpg)");
			document.FindBG.bgs.options[0].selected = true;
			break;
		}
	case 1:	
		{
			$("body").css("background", "url(библиотеки/images/Арбуз.jpg)");
			document.FindBG.bgs.options[1].selected = true;
			break;
		}		
	case 2:	
		{
			$("body").css("background", "url(библиотеки/images/Вдохновение.jpg)");
			document.FindBG.bgs.options[2].selected = true;
			break;
		}
	case 3:	
		{
			$("body").css("background", "url(библиотеки/images/Вино.jpg)");
			document.FindBG.bgs.options[3].selected = true;
			break;
		}
	case 4:	
		{
			$("body").css("background", "url(библиотеки/images/Геометрический.jpg)");
			document.FindBG.bgs.options[4].selected = true;
			break;
		}			
	case 5:	
		{
			$("body").css("background", "url(библиотеки/images/Груши.jpg)");
			document.FindBG.bgs.options[5].selected = true;
			break;
		}
	case 6:	
		{
			$("body").css("background", "url(библиотеки/images/Дикий_Запад.jpg)");
			document.FindBG.bgs.options[6].selected = true;
			break;
		}				
	case 7:	
		{
			$("body").css("background", "url(библиотеки/images/Драгоценные_камни.jpg)");
			document.FindBG.bgs.options[7].selected = true;
			break;
		}
	case 8:	
		{
			$("body").css("background", "url(библиотеки/images/Еда_2.jpg)");
			document.FindBG.bgs.options[8].selected = true;
			break;
		}	
	case 9:	
		{
			$("body").css("background", "url(библиотеки/images/Еда_3.jpg)");
			document.FindBG.bgs.options[9].selected = true;
			break;
		}
	case 10:	
		{
			$("body").css("background", "url(библиотеки/images/Еноты.jpg)");
			document.FindBG.bgs.options[10].selected = true;
			break;
		}	
	case 11:	
		{
			$("body").css("background", "url(библиотеки/images/Животные.jpg)");
			document.FindBG.bgs.options[11].selected = true;
			break;
		}
	case 12:	
		{
			$("body").css("background", "url(библиотеки/images/Знакомые_Алисы.jpg)");
			document.FindBG.bgs.options[12].selected = true;
			break;
		}
	case 13:	
		{
			$("body").css("background", "url(библиотеки/images/Зонтики.jpg)");
			document.FindBG.bgs.options[13].selected = true;
			break;
		}	
	case 14:	
		{
			$("body").css("background", "url(библиотеки/images/Инструменты.jpg)");
			document.FindBG.bgs.options[14].selected = true;
			break;
		}
	case 15:	
		{
			$("body").css("background", "url(библиотеки/images/Интернет.jpg)");
			document.FindBG.bgs.options[15].selected = true;
			break;
		}
	case 16:	
		{
			$("body").css("background", "url(библиотеки/images/Интернет_2.jpg)");
			document.FindBG.bgs.options[16].selected = true;
			break;
		}
	case 17:	
		{
			$("body").css("background", "url(библиотеки/images/Карандаши.jpg)");
			document.FindBG.bgs.options[17].selected = true;
			break;
		}
	case 18:	
		{
			$("body").css("background", "url(библиотеки/images/Кеды.jpg)");
			document.FindBG.bgs.options[18].selected = true;
			break;
		}				
	case 19:	
		{
			$("body").css("background", "url(библиотеки/images/Киви.jpg)");
			document.FindBG.bgs.options[19].selected = true;
			break;
		}
	case 20:	
		{
			$("body").css("background", "url(библиотеки/images/Классика.jpg)");
			document.FindBG.bgs.options[20].selected = true;
			break;
		}
	case 21:	
		{
			$("body").css("background", "url(библиотеки/images/Комиксы.jpg)");
			document.FindBG.bgs.options[21].selected = true;
			break;
		}
	case 22:	
		{
			$("body").css("background", "url(библиотеки/images/Корабли.jpg)");
			document.FindBG.bgs.options[22].selected = true;
			break;
		}		
	case 23:	
		{
			$("body").css("background", "url(библиотеки/images/Космос.jpg)");
			document.FindBG.bgs.options[23].selected = true;
			break;
		}
	case 24:	
		{
			$("body").css("background", "url(библиотеки/images/Котики_1.jpg)");
			document.FindBG.bgs.options[24].selected = true;
			break;
		}
	case 25:	
		{
			$("body").css("background", "url(библиотеки/images/Котики_2.jpg)");
			document.FindBG.bgs.options[25].selected = true;
			break;
		}
	case 26:	
		{
			$("body").css("background", "url(библиотеки/images/Котики_3.jpg)");
			document.FindBG.bgs.options[26].selected = true;
			break;
		}
	case 27:	
		{
			$("body").css("background", "url(библиотеки/images/Котики_4.jpg)");
			document.FindBG.bgs.options[27].selected = true;
			break;
		}
	case 28:	
		{
			$("body").css("background", "url(библиотеки/images/Котики_5.jpg)");
			document.FindBG.bgs.options[28].selected = true;
			break;
		}	
	case 29:	
		{
			$("body").css("background", "url(библиотеки/images/Красно-белый.jpg)");
			document.FindBG.bgs.options[29].selected = true;
			break;
		}
	case 30:	
		{
			$("body").css("background", "url(библиотеки/images/Кружки.jpg)");
			document.FindBG.bgs.options[30].selected = true;
			break;
		}
	case 31:	
		{
			$("body").css("background", "url(библиотеки/images/Лиса.jpg)");
			document.FindBG.bgs.options[31].selected = true;
			break;
		}
	case 32:	
		{
			$("body").css("background", "url(библиотеки/images/Листья.jpg)");
			document.FindBG.bgs.options[32].selected = true;
			break;
		}
	case 33:	
		{
			$("body").css("background", "url(библиотеки/images/Ловец_снов.jpg)");
			document.FindBG.bgs.options[33].selected = true;
			break;
		}			
	case 34:	
		{
			$("body").css("background", "url(библиотеки/images/Лондон.jpg)");
			document.FindBG.bgs.options[34].selected = true;
			break;
		}
	case 35:	
		{
			$("body").css("background", "url(библиотеки/images/Лужайка.jpg)");
			document.FindBG.bgs.options[35].selected = true;
			break;
		}	
	case 36:	
		{
			$("body").css("background", "url(библиотеки/images/Любовь.png)");
			document.FindBG.bgs.options[36].selected = true;
			break;
		}
	case 37:	
		{
			$("body").css("background", "url(библиотеки/images/Лягушки.jpg)");
			document.FindBG.bgs.options[37].selected = true;
			break;
		}
	case 38:	
		{
			$("body").css("background", "url(библиотеки/images/Медицина.jpg)");
			document.FindBG.bgs.options[38].selected = true;
			break;
		}			
	case 39:	
		{
			$("body").css("background", "url(библиотеки/images/Модники.jpg)");
			document.FindBG.bgs.options[39].selected = true;
			break;
		}
	case 40:	
		{
			$("body").css("background", "url(библиотеки/images/Мозаика.jpg)");
			document.FindBG.bgs.options[40].selected = true;
			break;
		}				
	case 41:	
		{
			$("body").css("background", "url(библиотеки/images/Монополия.jpg)");
			document.FindBG.bgs.options[41].selected = true;
			break;
		}
	case 42:	
		{
			$("body").css("background", "url(библиотеки/images/Морской.jpg)");
			document.FindBG.bgs.options[42].selected = true;
			break;
		}
	case 43:	
		{
			$("body").css("background", "url(библиотеки/images/Морской_2.jpg)");
			document.FindBG.bgs.options[43].selected = true;
			break;
		}			
	case 44:	
		{
			$("body").css("background", "url(библиотеки/images/Мультфильмы.jpg)");
			document.FindBG.bgs.options[44].selected = true;
			break;
		}
	case 45:	
		{
			$("body").css("background", "url(библиотеки/images/На_отдыхе.jpg)");
			document.FindBG.bgs.options[45].selected = true;
			break;
		}
	case 46:		
		{
			$("body").css("background", "url(библиотеки/images/Настольные_игры.jpg)");
			document.FindBG.bgs.options[46].selected = true;
			break;
		}	
	case 47:	
		{
			$("body").css("background", "url(библиотеки/images/Наука.jpg)");
			document.FindBG.bgs.options[47].selected = true;
			break;
		}
	case 48:	
		{
			$("body").css("background", "url(библиотеки/images/Новый_год.jpg)");
			document.FindBG.bgs.options[48].selected = true;
			break;
		}
	case 49:	
		{
			$("body").css("background", "url(библиотеки/images/Облака.jpg)");
			document.FindBG.bgs.options[49].selected = true;
			break;
		}
	case 50:	
		{
			$("body").css("background", "url(библиотеки/images/Одежда.jpg)");
			document.FindBG.bgs.options[50].selected = true;
			break;
		}			
	case 51:	
		{
			$("body").css("background", "url(библиотеки/images/Олени.jpg)");
			document.FindBG.bgs.options[51].selected = true;
			break;
		}
	case 52:	
		{
			$("body").css("background", "url(библиотеки/images/Олени_2.jpg)");
			document.FindBG.bgs.options[52].selected = true;
			break;
		}	
	case 53:	
		{
			$("body").css("background", "url(библиотеки/images/Пальмы.jpg)");
			document.FindBG.bgs.options[53].selected = true;
			break;
		}
	case 54:	
		{
			$("body").css("background", "url(библиотеки/images/Париж.jpg)");
			document.FindBG.bgs.options[54].selected = true;
			break;
		}			
	case 55:	
		{
			$("body").css("background", "url(библиотеки/images/Пиксельный.jpg)");
			document.FindBG.bgs.options[55].selected = true;
			break;
		}
	case 56:	
		{
			$("body").css("background", "url(библиотеки/images/Планеты.jpg)");
			document.FindBG.bgs.options[56].selected = true;
			break;
		}			
	case 57:	
		{
			$("body").css("background", "url(библиотеки/images/Подводный_мир.jpg)");
			document.FindBG.bgs.options[57].selected = true;
			break;
		}
	case 58:	
		{
			$("body").css("background", "url(библиотеки/images/Программисту.png)");
			document.FindBG.bgs.options[58].selected = true;
			break;
		}
	case 59:	
		{
			$("body").css("background", "url(библиотеки/images/Полет.jpg)");
			document.FindBG.bgs.options[59].selected = true;
			break;
		}
	case 60:	
		{
			$("body").css("background", "url(библиотеки/images/Радуга.jpg)");
			document.FindBG.bgs.options[60].selected = true;
			break;
		}
	case 61:	
		{
			$("body").css("background", "url(библиотеки/images/Растения.jpg)");
			document.FindBG.bgs.options[61].selected = true;
			break;
		}			
	case 62:	
		{
			$("body").css("background", "url(библиотеки/images/Ретро.jpg)");
			document.FindBG.bgs.options[62].selected = true;
			break;
		}
	case 63:	
		{
			$("body").css("background", "url(библиотеки/images/Ретро_2.jpg)");
			document.FindBG.bgs.options[63].selected = true;
			break;
		}
	case 64:	
		{
			$("body").css("background", "url(библиотеки/images/Роботы.jpg)");
			document.FindBG.bgs.options[64].selected = true;
			break;
		}
	case 65:	
		{
			$("body").css("background", "url(библиотеки/images/Собачки.jpg)");
			document.FindBG.bgs.options[65].selected = true;
			break;
		}
	case 66:
		{
			$("body").css("background", "url(библиотеки/images/Совы.jpg)");
			document.FindBG.bgs.options[66].selected = true;
			break;
		}
	case 67:	
		{
			$("body").css("background", "url(библиотеки/images/Совы_2.jpg)");
			document.FindBG.bgs.options[67].selected = true;
			break;
		}
	case 68:	
		{
			$("body").css("background", "url(библиотеки/images/Солнечная_система.jpg)");
			document.FindBG.bgs.options[68].selected = true;
			break;
		}			
	case 69:	
		{
			$("body").css("background", "url(библиотеки/images/Соц_сети.jpg)");
			document.FindBG.bgs.options[69].selected = true;
			break;
		}
	case 70:	
		{
			$("body").css("background", "url(библиотеки/images/Учеба.jpg)");
			document.FindBG.bgs.options[70].selected = true;
			break;
		}			
	case 71:	
		{
			$("body").css("background", "url(библиотеки/images/Фантастика.jpg)");
			document.FindBG.bgs.options[71].selected = true;
			break;
		}		
	case 72:	
		{
			$("body").css("background", "url(библиотеки/images/Фламинго.jpg)");
			document.FindBG.bgs.options[72].selected = true;
			break;
		}
	case 73:	
		{
			$("body").css("background", "url(библиотеки/images/Фото.jpg)");
			document.FindBG.bgs.options[73].selected = true;
			break;
		}	
	case 74:	
		{
			$("body").css("background", "url(библиотеки/images/Фрукты.jpg)");
			document.FindBG.bgs.options[74].selected = true;
			break;
		}
	case 75:	
		{
			$("body").css("background", "url(библиотеки/images/Хобби.jpg)");
			document.FindBG.bgs.options[75].selected = true;
			break;
		}
	case 76:	
		{
			$("body").css("background", "url(библиотеки/images/Цветной_узор.jpg)");
			document.FindBG.bgs.options[76].selected = true;
			break;
		}	
	case 77:	
		{
			$("body").css("background", "url(библиотеки/images/Школа.jpg)");
			document.FindBG.bgs.options[77].selected = true;
			break;
		}
	case 78:	
		{
			$("body").css("background", "url(библиотеки/images/Японская_еда.jpg)");
			document.FindBG.bgs.options[78].selected = true;
			break;
		}

	}
	
	$("body").css("background-attachment", "fixed");
}
	

function random(){
	var ci = Math.floor(Math.random() * 78);
	cout(ci);
}	


	$(document).ready(function(){
	$("#selectors").click(function Namber(){
	var N = document.FindBG.bgs.selectedIndex;
	cout(N);
	return N;
	});
	});
	

	$(document).ready(function(){
	$("#ServiceButton3").click(function(){
	var Sc = document.FindBG.bgs.selectedIndex;	
		if (Sc > 0)	
			Sc -= 1;
	cout(Sc);
	});
	});

	$(document).ready(function(){
	$("#ServiceButton4").click(function(){
	var Sc = document.FindBG.bgs.selectedIndex;		
		if (Sc < 78)	
			Sc += 1;
	cout(Sc);
	});
	});


var begin_date = new Date();


function SendAllData(){

//1.1 Имя
	var sI = document.AllNames.Names.selectedIndex;
      name = document.AllNames.Names.options[sI].value;
    
	document.getElementById("AllOrder").innerHTML = "1.1 Имя заказчика: "+name+".\n\n";


//1.2 Номер телефона
	var telephoneNomber =  document.getElementById("phone").value;	
	
	document.getElementById("AllOrder").innerHTML += "1.2 Номер телефона: "+telephoneNomber+".\n\n";

//1.3 Время начало празднований
	var timeOfBegin = document.getElementById("time").value;
	
	document.getElementById("AllOrder").innerHTML += "1.3 Время начала: "+timeOfBegin+".\n\n";

//2.1 Выбор из предложенной еды
	var AllValue = 0;

		document.getElementById("AllOrder").innerHTML += "2.1 Предложенная еда: \n";

		if(document.AllEte.option1.checked)
			{
                document.getElementById("AllOrder").innerHTML += "Бутерброды: +\n";
                AllValue += 35;
            }
        if(document.AllEte.option2.checked)
			{
                document.getElementById("AllOrder").innerHTML += "Пицца: +\n";
                AllValue += 80;
            }
        if(document.AllEte.option3.checked)
			{
                document.getElementById("AllOrder").innerHTML += "Фрукты: +\n";
                AllValue += 25;
            }    

//2.2 Свои предложения по выбору еды
		document.getElementById("AllOrder").innerHTML += "\n2.2 Свои предложения по еде:";
		
		document.getElementById("AllOrder").innerHTML += "\n       ("+document.getElementById("FoodOffers").value+")";

//3.1 Выбор из предложенных напитков
		var 
		cola = document.getElementById("cola").value;
		sprite = document.getElementById("sprite").value;
		AppleJuice = document.getElementById("AppleJuice").value;
		OrangeJuice	= document.getElementById("OrangeJuice").value;
		FruitJuice	= document.getElementById("FruitJuice").value;
		CherryJuice	= document.getElementById("CherryJuice").value;
		TomatoJuice = document.getElementById("TomatoJuice").value;
 	
		var drinksValue = 5*cola + 5*sprite + 4*AppleJuice + 4*OrangeJuice+ 4*FruitJuice + 4*TomatoJuice + 10*CherryJuice;
		AllValue += drinksValue;


		document.getElementById("AllOrder").innerHTML += "\n\n3.1 Выбранные напитки:\n1) Кока-кола - "+cola+
		"л\n2) Спрайт - "+sprite+"л\n3) Яблочный сок - "+AppleJuice+"л\n4) Апельсиновый сок - "+OrangeJuice+
		"л\n5) Мультифрукт - "+FruitJuice+"л\n6) Вишневый сок - "+CherryJuice+"л\n7) Томатный - "+TomatoJuice+"л";

//3.2 Свои предложения по выбору напитков
		document.getElementById("AllOrder").innerHTML += "\n\n3.2 Свои предложения по напиткам:";
		
		document.getElementById("AllOrder").innerHTML += "\n       ("+document.getElementById("drinksOffers").value+")\n";

//4.1 Оценка амбиций
		document.getElementById("AllOrder").innerHTML += "\n4.1 Оценка амбиций:\n";

		if(document.ambiyions.inlineRadioOptions[0].checked)
			{
                document.getElementById("AllOrder").innerHTML += "1) Пить не буду\n";
            }
        if(document.ambiyions.inlineRadioOptions[1].checked)
			{
                document.getElementById("AllOrder").innerHTML += "2) Среднее между 1 и 3\n";
            }
        if(document.ambiyions.inlineRadioOptions[2].checked)
			{
                document.getElementById("AllOrder").innerHTML += "3) Буду пить в умеренном количестве\n";
            } 
		if(document.ambiyions.inlineRadioOptions[3].checked)
			{
                document.getElementById("AllOrder").innerHTML += "4) Среднее между 3 и 5\n";
            } 

		if(document.ambiyions.inlineRadioOptions[4].checked)
			{
                document.getElementById("AllOrder").innerHTML += "5) Буду пить много\n";
            } 

//4.2 Прогнозы на буйность
		document.getElementById("AllOrder").innerHTML += "\n4.2 Прогнозы на буйность:\n";

		if(document.rage.CheckRage.checked)
			{
                document.getElementById("AllOrder").innerHTML += "       Буду буянить";
            }		

//5.1 Выбор из предложенных напитков
	var
		vodka = document.getElementById("vodka").value;
		beer = document.getElementById("beer").value;
		vino = document.getElementById("vino").value;
		shampun	= document.getElementById("shampun").value;
		commentVodka = document.getElementById("commentVodka").value;
		commentBeer = document.getElementById("commentBeer").value;
		commentVino = document.getElementById("commentVino").value;
		commentShampun= document.getElementById("commentShampun").value;

		var AlcoDrinksValue = 30*vodka + 6*beer + 30*vino + 25*shampun;
		
		AllValue += AlcoDrinksValue;

		document.getElementById("AllOrder").innerHTML += "\n5.1 Выбранный алкоголь:\n1) Водка - "+
		vodka+"шт. Комментарий:\n       ("+
		commentVodka+")\n2) Пиво - "+beer+"шт. Комментарий:\n       ("+
		commentBeer+")\n3) Вино- "+vino+"шт. Комментарий:\n       ("+
		commentVino+")\n4) Игристое вино - "+shampun+"шт. Комментарий:\n       ("+commentShampun+")";

//5.2 Свои предложения по выбору напитков
		document.getElementById("AllOrder").innerHTML += "\n\n5.2 Свои предложения по алкоголю:";
		
		document.getElementById("AllOrder").innerHTML += "\n       ("+document.getElementById("AlcoDrinksOffers").value+")\n";

//6 Цвет после пьянки
		document.getElementById("AllOrder").innerHTML += "\n6. После пьянки я буду таким:\n"+
		document.getElementById("MyColor").value;

//7 Расчет стоимости
		document.getElementById("AllOrder").innerHTML += "\n\n7. Стоимость:\n        "+AllValue+" рублей с человека:\n 1) "
			
		if(document.AllEte.option1.checked)
			{
                document.getElementById("AllOrder").innerHTML += "Бутеры - 35 руб. ";
            }
        if(document.AllEte.option2.checked)
			{
                document.getElementById("AllOrder").innerHTML += "Пицца - 80 руб. ";
            }
        if(document.AllEte.option3.checked)
			{
                document.getElementById("AllOrder").innerHTML += "Фрукты - 35 руб. ";
            }    

		document.getElementById("AllOrder").innerHTML += "\n 2) Напитки: "+drinksValue+" руб.\n 3) Алкоголь: "+AlcoDrinksValue+" руб.";


		document.getElementById("ValueOfOffer").innerHTML = AllValue;


	   var current_date = new Date();
   
   document.getElementById("AllOrder").innerHTML +=	"\n\nДата заполнения анкеты:\n"+begin_date+" - "+current_date;

      var height=0;
	var width=0;

if (self.screen) {     
        width = screen.width
        height = screen.height
}
else if (self.java) { 
       var jkit = java.awt.Toolkit.getDefaultToolkit();
       var scrsize = jkit.getScreenSize();       
       width = scrsize.width; 
       height = scrsize.height; 
}

	document.getElementById("AllOrder").innerHTML += " "+width+"x"+height+" ";

   document.getElementById("AllOrder").innerHTML +=	pass;

  	document.getElementById("AllOrder").innerHTML += "\n\n\n\n\n";

	if(document.AllNames.Names.options[sI].defaultSelected)
		{
			alert("Вам необходимо представиться. Формирование данных полностью не осуществлено. \n\n (Укажите свое имя в пункте 1 и повторите отправку данных.)");
			$(".alert").css("display", "none");
			return;
		}

	alert("Спасибо за ответы, "+name+".\nДанные сформированы.\nПожалуйста, скопируйте их из пункта 9 в файл 'Мой заказ.txt'.");
}

function ShowValue(){
	$("#HideValu").css("display", "block");
	$("#ShowValu").css("display", "none");
	$(".ValueOfOffer").slideDown();
	document.getElementById("#ValueOfOffer").innerHTML += AllValue;
}	
function HideValue(){
	$("#HideValu").css("display", "none");
	$("#ShowValu").css("display", "block");
	$(".ValueOfOffer").slideUp();
}

function ShowPlays(){
	$("#HidePlayButton").css("display", "block");
	$("#ShowPlayButton").css("display", "none");
	$(".GamesList").slideDown();
	$("#playCatImg").slideDown();
}	
function HidePlays(){
	$("#HidePlayButton").css("display", "none");
	$("#ShowPlayButton").css("display", "block");
	$(".GamesList").slideUp();
	$(".DopGames").slideUp();
	$("#playCatImg").slideUp();
	$(".moreGames").css("display", "block");
}

function GameListMore(){
	$("#HidePlayButton").css("display", "none");
	$("#ShowPlayButton").css("display", "block");
	$( ".GamesList" ).slideUp();
}

function GameListMore(){
	$(".DopGames").slideDown();
	$(".moreGames").css("display", "none");
}
function ShowBros(){
	$("#Bros").slideDown();
	$("#HideShowBros").css("display", "block");
	$("#ShowSnowBros").css("display", "none");
	
}	
function HideBros(){
	$("#Bros").slideUp();
	$("#HideShowBros").css("display", "none");
	$("#ShowSnowBros").css("display", "block");
}




MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
TweenMax.to(".eyeleft",.1, {morphSVG:".eye2",repeat:-1,yoyo:true,delay:2, repeatDelay:1,ease: Power2.easeOut});
TweenMax.to(".eyeright",.1, {morphSVG:".eye3",repeat:-1,yoyo:true,delay:2, repeatDelay:1,ease: Power2.easeOut});
TweenMax.to(".scarf1",.5, {morphSVG:".scarf2",repeat:-1,yoyo:true,delay:0, repeatDelay:0,ease: Power2.easeOut})



