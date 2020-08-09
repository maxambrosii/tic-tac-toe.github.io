

var t = new Array(9);
var v = +1;

var kol1 = 0;
var kol2 = 0;
var kol3 = 0;

function ai() {
    var id = Math.floor(Math.random() * 9);
    t[id] ? ai() : move(id, 'ai');
}

function reloadArea(){
  
  document.getElementById('0').className = 'cell';
  document.getElementById('1').className = 'cell';
  document.getElementById('2').className = 'cell';
  document.getElementById('3').className = 'cell';
  document.getElementById('4').className = 'cell';
  document.getElementById('5').className = 'cell';
  document.getElementById('6').className = 'cell';
  document.getElementById('7').className = 'cell';
  document.getElementById('8').className = 'cell';
  
  
  t = new Array(9);
 
  
}

function checkEnd() {
    if (t[0] == 'ai' && t[1] == 'ai' && t[2] == 'ai') {
        v = +1;
        return true;
    }
    if (t[0] == 'player' && t[1] == 'player' && t[2] == 'player') {
        v = +0;
        return true;
    }

    if (t[3] == 'ai' && t[4] == 'ai' && t[5] == 'ai') {
        v = +1;
        return true;
    }
    if (t[3] == 'player' && t[4] == 'player' && t[5] == 'player') {
        v = +0;
        return true;
    }

    if (t[6] == 'ai' && t[7] == 'ai' && t[8] == 'ai') {
        v = +1;
        return true;
    }
    if (t[6] == 'player' && t[7] == 'player' && t[8] == 'player') {
        v = +0;
        return true;
    }

    if (t[0] == 'ai' && t[3] == 'ai' && t[6] == 'ai') {
        v = +1;
        return true;
    }
    if (t[0] == 'player' && t[3] == 'player' && t[6] == 'player') {
        v = +0;
        return true;
    }
    if (t[1] == 'ai' && t[4] == 'ai' && t[7] == 'ai') {
        v = +1;
        return true;
    }
    if (t[1] == 'player' && t[4] == 'player' && t[7] == 'player') {
        v = +0;
        return true;
    }
    if (t[2] == 'ai' && t[5] == 'ai' && t[8] == 'ai') {
        v = +1;
        return true;
    }
    if (t[2] == 'player' && t[5] == 'player' && t[8] == 'player') {
        v = +0;
        return true;
    }
    if (t[0] == 'ai' && t[4] == 'ai' && t[8] == 'ai') {
        v = +1;
        return true;
    }
    if (t[0] == 'player' && t[4] == 'player' && t[8] == 'player') {
        v = +0;
        return true;
    }
    if (t[2] == 'ai' && t[4] == 'ai' && t[6] == 'ai') {
        v = +1;
        return true;
    }
    if (t[2] == 'player' && t[4] == 'player' && t[6] == 'player') {
        v = +0;
        return true;
    }

    if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) {
        v = +2;
        return true;
    }
}

function move(id, role) {
    if (t[id]) return false;
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkEnd() ? (role == 'player') ? ai() : null : reset()
}

function reset() {
  if (v == 0) 
  {
    kol1++;
    alert("Игра окончена! Вы победили!");
  }
  else if ( v == 1){
    kol2++;
    alert("Игра окончена! Победил компьютер!");
  }
  else {
    kol3++;
    alert("Игра окончена! НИЧЬЯ!");
  }
  var SummDok = document.getElementById('vPlayer'),
    SummSumm= "Количество ваших побед: " + kol1;
    SummDok.innerHTML = SummSumm;
 var SummDok2 = document.getElementById('vComp'),
    SummSumm=  "Количество побед компьютера: " + kol2;
    SummDok2.innerHTML = SummSumm;
 var SummDok3 = document.getElementById('vNO'),
    SummSumm=  "Количество ничьих: " +kol3;
    SummDok3.innerHTML = SummSumm;

    reloadArea();
}


 var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-7489188-1']); _gaq.push(['_trackPageview']);
        (function() {
            var ga = document.createElement('script'); ga.async = true; ga.src = 'http://www.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();