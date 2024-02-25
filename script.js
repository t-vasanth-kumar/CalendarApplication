const mm = {
    '01':0,
    '02':3,
    '03':3,
    '04':6,
    '05':1,
    '06':4,
    '07':6,
    '08':2,
    '09':5,
    '10':0,
    '11':3,
    '12':5
};

const dd = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday",
}

var date, month, year, value;

function printDate() {

    date = document.getElementById("date").value;
    month = document.getElementById("month").value;
    year = document.getElementById("year").value;
    // value = document.getElementById("printSpace");


    var temp = year.toString();
    var centuryCode;

    if(temp.charAt(1) === '0') {
        centuryCode = 6;
    }
    else if(temp.charAt(1) === '1') {
        centuryCode = 4;
    }
    else if(temp.charAt(1) ==='2') {
        centuryCode = 2;
    }
    else if(temp.charAt(1) === '3') {
        centuryCode = 0;
    }
    else if(temp.charAt(1) ==='6') {
        centuryCode = 6;
    }
    else if(temp.charAt(1) ==='7') {
        centuryCode = 4;
    }
    else if(temp.charAt(1) ==='8') {
        centuryCode = 2;
    }
    else if(temp.charAt(1) ==='9') {
        centuryCode = 0;
    }

    var monthCode;
    var t = month.toString();
    if(t.charAt(0)!= '0' && month < 10) {
        monthCode = '0'+month;
    }
    else {
        monthCode = month;
    }

    var quotient = parseInt((year%100)/4);
    date = parseInt(date);
    var sum = (year%100) + quotient + mm[monthCode] + centuryCode + 1;
    var day;

    if(year%4 === 0) {
        if(year%100 != 0 && month > 2) {
            day = dd[sum%7];
        }
        else if(year%400 === 0 && month > 2) {
            day = dd[sum%7];
        }
        else 
            day = dd[(sum%7-1)];
    }
    else {
        day = dd[sum%7];
    }

    var displayMonth = document.getElementById("monthName");
    var n,space = 0,j = 1;

    if(day === "Monday") {
        space = 1;
    }
    else if(day === "Tuesday") {
        space = 2;
    }
    else if(day === "Wednesday") {
        space = 3;
    }
    else if(day === "Thursday") {
        space = 4;
    }
    else if(day === "Friday") {
        space = 5;
    }
    else if(day === "Saturday") {
        space = 6;
    }

    if(t === '1' || t === '01') {
        displayMonth.innerHTML = "Jan "+year;
        n = 31;
    }
    else if(t === '2' || t === '02') {

        if(year%4 === 0) {
            if(year%100 != 0 && month > 2) {
                n = 29;
            }
            else if(year%400 === 0 && month > 2) {
                n = 29;
            }
            else 
                n = 29;
        }
        else {
            n = 28;
        }

        displayMonth.innerHTML = "Feb "+year;
    }
    else if(t === '3' || t === '03') {
        displayMonth.innerHTML = "Mar "+year;
        n = 31;
    }
    else if(t === '4' || t === '04') {
        displayMonth.innerHTML = "Apr "+year;
        n = 30;
    }
    else if(t === '5' || t === '05') {
        displayMonth.innerHTML = "May "+year;
        n = 31;
    }
    else if(t === '6' || t === '06') {
        displayMonth.innerHTML = "Jun "+year;
        n = 30;
    }
    else if(t === '7' || t === '07') {
        displayMonth.innerHTML = "Jul "+year;
        n = 31;
    }
    else if(t === '8' || t === '08') {
        displayMonth.innerHTML = "Aug "+year;
        n = 31;
    }
    else if(t === '9' || t === '09') {
        displayMonth.innerHTML = "Sep "+year;
        n = 30;
    }
    else if(t === '10') {
        displayMonth.innerHTML = "Oct "+year;
        n = 31;
    }
    else if(t === '11') {
        displayMonth.innerHTML = "Nov "+year;
        n = 30;
    }
    else if(t === '12') {
        displayMonth.innerHTML = "Dec "+year;
        n = 31;
    }

    var tBody = document.getElementById("tableBody");

    var displayDays = document.getElementById("days");
    displayDays.style.display = "table-row";
    

    // Get reference to the table body
    var tbdy = document.querySelector("tbody");

    // Get all <tr> elements inside the <tbody>
    var trList = tbdy.querySelectorAll("tr");

    // Iterate over each <tr> element
    trList.forEach(function(tr) {
    // Check if the <tr> element has an ID other than "days"
        if (tr.id !== "days") {
            // If so, remove the <tr> element from the table body
            tr.parentNode.removeChild(tr);
        }
    });


    for(var i=1; i<=50; i++) {
        if(i === 1 || i % 7 === 1) {
            var TR = document.createElement("tr");
        }
        
        if(i <= space) {
            var dataTag = document.createElement("td");
            dataTag.textContent = " ";
            TR.appendChild(dataTag);
        }
        else if(i <= n+space) {
            var dataTag = document.createElement("td");
            dataTag.textContent = j;
            TR.appendChild(dataTag);
            j++;
        }

        if(i%7 === 0) {
            tBody.appendChild(TR);
        }
    }

    var markDate = document.querySelectorAll("td");

    for(var i=0; i<markDate.length; i++) {
        if(date.toString() === markDate[i].textContent) {
            markDate[i].style.color = "blue";
            markDate[i].style.fontWeight = "bold";
        }
    }

}


document.addEventListener("DOMContentLoaded", function() {

document.getElementById("btn").addEventListener("click", function() {
    var button = document.getElementById("btn");
    button.classList.add("clicked");

    setTimeout(function() {
        button.classList.remove("clicked");
    }, 200);
});

});
