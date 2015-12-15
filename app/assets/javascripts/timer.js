
//Запуск нового таймера
function newTimer(time,order,route){

	c_time = convertTime(time);
	//Таймер времени отдыха запускается каждый четвертый раз
	if ((order % 4 ==0)){ 
		freeTimer(900);
	}
	else{
		workTimer(time,order,route)
	}
}

//Конвертирование времени из секунд в ЧЧ:ММ:СС
function convertTime(time){
	h = 0;
	m = Math.floor(time/60);
	s = time%60;

	while(m>=60){
		m = m - 60;
		h++;
	}
	
	c_time = (h+":"+m+":"+s);
	
	return c_time;
}

//Таймер времени занятий
function workTimer(time,order,route){
	nowTime = time;
	nowTime--;
	//Вывод в консоль
	console.log("Work :",convertTime(nowTime));
	nowOrder = order;
	nowRoute = route;
	var timer_index = document.getElementById("timer_index");

	var timer_name = document.getElementById("timer_name");
	document.getElementById("timer_name").innerHTML = "Время для занятий";
	
	if (nowTime==0){
		recordTimerDB(time,route);
		order++;
		freeTimer(300);
		return 0;
	}
	
	document.getElementById("timer_index").innerHTML = convertTime(nowTime);
	setTimeout("workTimer(nowTime,nowOrder,nowRoute)", 1000);
}

//Таймер времени отдыха
function freeTimer(time){
	nowTime = time;
	nowTime--;
	//Вывод в консоль
	console.log("Rest: ",convertTime(nowTime));

	var timer_index = document.getElementById("timer_index");

	var timer_name = document.getElementById("timer_name");
	document.getElementById("timer_name").innerHTML = "Перерыв";

	if (nowTime==0){
		document.getElementById("timer_index").innerHTML = "00:00";
		return 0;
	}
	
	document.getElementById("timer_index").innerHTML = nowTime;
	setTimeout("freeTimer(nowTime)", 1000);


}

//Что будет, если закрыть таймер
function closeTimer(){

}

//Функция записи данных в БД
function recordTimerDB(time,route){
	//Вывод в консоль
	console.log("Запись данных в бд");
}

//При нажатии кнопки "закрыть вкладку"
onbeforeunload=function(){
         location.reload();
            return "Вы действительно хотите прервать запись таймера?";
      };

alert("asset_js");

