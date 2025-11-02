console.log("Script loaded!");

function moveTheThing(){
    const thing = document.getElementById('theThing');
    const leftBox = document.getElementById('leftBlock');
    const rightBox = document.getElementById('rightBlock');
    
    // Check which box has the thing
    if (leftBox.contains(thing)) {
        rightBox.appendChild(thing);
    } else {
        leftBox.appendChild(thing);
    }
}

function styleTheText(){
    const text = document.getElementById('fancyText');
    
    // Change the styling
    text.style.color = 'purple';
    text.style.fontSize = '24px';
    text.style.fontFamily = 'Arial';
    text.style.fontWeight = 'bold';
}

function getFormValues(){
    // Get the values from the form
    const field1 = document.getElementById('firstField').value;
    const field2 = document.getElementById('secondField').value;
    const field3 = document.getElementById('thirdField').checked;
    
    // Put the values in the table
    document.getElementById('firstResult').textContent = field1;
    document.getElementById('secondResult').textContent = field2;
    
    if(field3 == true){
        document.getElementById('thirdResult').textContent = 'Checked';
    } else {
        document.getElementById('thirdResult').textContent = 'Not Checked';
    }
}

function countTheStuff(){
    // Count how many of each element there are
    const pTags = document.getElementsByTagName('p');
    const h2Tags = document.getElementsByTagName('h2');
    const tdTags = document.getElementsByTagName('td');
    
    // Display the counts
    document.getElementById('countOfP').textContent = pTags.length;
    document.getElementById('countOfH2').textContent = h2Tags.length;
    document.getElementById('countOfTD').textContent = tdTags.length;
}

function addNewRow(){
    const table = document.getElementById('addRowsTable');
    
    // Figure out what number the new row should be
    const rows = table.getElementsByTagName('tr');
    const rowCount = rows.length;
    
    // Make a new row and cell
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    
    newCell.textContent = rowCount;
    
    newRow.appendChild(newCell);
    table.appendChild(newRow);
}

// Bonus: Simple Click Counter
let clickCount = 0;

function setupClickCounter() {
    const box = document.getElementById('eventBox');
    const display = document.getElementById('eventText');
    
    box.addEventListener('click', function() {
        clickCount++;
        display.textContent = 'Clicks: ' + clickCount;
        
        // change color based on clicks
        if (clickCount < 5) {
            box.style.backgroundColor = 'lightblue';
        } else if (clickCount < 10) {
            box.style.backgroundColor = 'lightgreen';
        } else {
            box.style.backgroundColor = 'gold';
            display.textContent = 'Wow! ' + clickCount + ' clicks!';
        }
    });
}

// run it when page loads
window.onload = function() {
    setupClickCounter();
};

function resetCounter() {
    clickCount = 0;
    const box = document.getElementById('eventBox');
    const display = document.getElementById('eventText');
    
    display.textContent = 'Click me!';
    box.style.backgroundColor = '';
}