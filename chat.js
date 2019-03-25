function input() {

    var text = document.getElementById('message').value;
    var name = document.getElementById('username').value;

    var now = new Date();
    var timenow = now.getHours() + ':' + now.getMinutes();




    var div = document.createElement("div");
    div.className = ("container");
    div.id = ("msgcontent");
    var uname = document.createElement("h6");
    var p = document.createElement("p");
    var timebox = document.createElement("span");
    timebox.className = ("time-right")

    uname.innerHTML = name;
    p.innerHTML = text;
    timebox.innerHTML = timenow;



    if (!text == '' && !name == '') {
        var block = document.getElementById("msglist").appendChild(div);
        block.appendChild(uname);
        block.appendChild(p);
        block.appendChild(timebox);

    }

    //add TimeStamp
    //add css layout for messages
    //output in message area
}