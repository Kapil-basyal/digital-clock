showtime = () => {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ampm = "AM"


    
   

    if(h == 0){
        h == 12;

    }
    if(h == 12){
        ampm= "PM";
    }
    
    if(h > 12){
        h = h - 12;
        ampm = "PM"

    };
   h = (h<10)? "0" + h:h;
   m = (m<10)? "0" + m:m; 
   s = (s<10)? "0" + s:s;  

    var time = `${h}:${m}:${s} ${ampm}`;
    document.getElementById("myclock").innerHTML = time;
    document.getElementById("myclock").textContent = time;
    setTimeout(showtime, 1000);

   

}
showtime();
