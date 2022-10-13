console.log("starting")

const UserName = "shashank"
const PassWord = "123"

//Build an array containing Customer records.
var customers = new Array();
customers.push(["Customer Id", "Name", "Country"]);
customers.push([1, "John Hammond", "United States"]);
customers.push([2, "Mudassar Khan", "India"]);
customers.push([3, "Suzanne Mathews", "France"]);
customers.push([4, "Robert Schidner", "Russia"]);

const divError = document.getElementById("error")
const divTable = document.getElementById("dvTable")

document.getElementById('btn').addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('Clicked!')
    const username = document.getElementById('id1').value;
    console.log('Username = ', username)
    const password = document.querySelector('input[type = "password"]').value
    console.log('Password = ', password)
    if(username === UserName && password == PassWord)
    {
        divTable.style.display = "block"
        divError.style.display = "none"
        var table = document.createElement("TABLE")
        table.classList.add("highlight")
        // table.classList.add("responsive-table")
        var columnCount = customers[0].length;
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }

        divTable.innerHTML = "";
        divTable.appendChild(table);
    }
    else{
        divTable.style.display = "none"
        divError.style.display = "block"
        divError.classList.add("flow-text")
        divError.innerHTML = "<p>Invalid Credentials, Try Again!</p>"
    }
})