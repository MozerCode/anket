$(document).ready(function(){

    var cssSelector = {
        jPlayer: "#jquery_jplayer_1", 
        cssSelectorAncestor: "#jp_container_1"
    };

    var playlist = [
        {
            author:"LO-FI-LE-VI",
            title:"You",
            discription: "",
            mp3:"библиотеки/audio/You.mp3",
            oga:""
        },
        {
            author:"Kaleo",
            title:"Way Down We Go",
            discription: "",
            mp3:"библиотеки/audio/Kaleo-Way_Down_We_Go.mp3",
            oga:""
        },
        {
            author:"Kat Dahlia",
            title:"Say Something",
            discription: "",
            mp3:"библиотеки/audio/Kat_Dahlia-Say_Something.mp3",
            oga:""
        },
        {
            author:"Olivia Rose Millerschin",
            title:"365",
            discription: "",
            mp3:"библиотеки/audio/Olivia Rose Millerschin.mp3",
            oga:""
        },
        {
            author:"Paramore",
            title:"The Only Exception",
            discription: "",
            mp3:"библиотеки/audio/Paramore - The Only Exception.mp3",
            oga:""
        },
        {
            author:"Pierre van Dormael",
            title:"Undercover",
            discription: "",
            mp3:"библиотеки/audio/Pierre van Dormael - Undercover.mp3",
            oga:""
        },
        {
            author:"Bobby Hebb",
            title:"Sunny",
            discription: "",
            mp3:"библиотеки/audio/Bobby Hebb - Sunny.mp3",
            oga:""
        },
        {
            author:"Elis Regina",
            title:"Águas de Março",
            discription: "",
            mp3:"библиотеки/audio/Elis Regina - Águas de Março.mp3",
            oga:""
        },
        {
            author:"Валентин Стрыкало",
            title:"Космос нас ждет",
            discription: "",
            mp3:"библиотеки/audio/Валентин Стрыкало - Космос нас ждет.mp3",
            oga:""
        },
        {
            author:"Orange House",
            title:"Артхаус",
            discription: "",
            mp3:"библиотеки/audio/Orange House - Артхаус.mp3",
            oga:""
        },
        {
            author:"Pharaoh",
            title:"Дико, например",
            discription: "",
            mp3:"библиотеки/audio/Pharaoh - Дико, например.mp3",
            oga:""
        },
        {
            author:"Pika",
            title:"Party Maker",
            discription: "",
            mp3:"библиотеки/audio/PartyMaker.mp3",
            wmode: "window",
            oga:""
        }
    ];

    var options = {
        swfPath: "js",
        supplied: "oga, mp3",
        wmode: "window",
        smoothPlayBar: false,
        keyEnabled: true
    };

    new jPlayerPlaylist(cssSelector, playlist, options);
});
//]]>