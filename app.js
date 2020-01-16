'use strict';

//global variables:
var storeTable = document.getElementById('storeTable');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var citiesArray = [];


// Create Objects for each store, using a constructor
//Constructor Function
function Store(location, minCust, maxCust, avgCookiesPerSale) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.sum = 0;
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;
    
    citiesArray.push(this);
}

//utility function to generate random number for cookies per hour
function getRandomArbitrary(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}
console.log(getRandomArbitrary(1, 5));

//utility function to sum array of cookies per hour for ONE location
Store.prototype.totalSalesPerDay = function () {
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
        this.sum += this.cookiesPerHour[i];
    }
    console.log('how do you do?');
    return this.sum;
    
};

//prototype function to calculate cookies per hour and populate empty cookies per hour array in constructor function
Store.prototype.avgSalesPerHour = function () {

    for (var i = 0; i < hours.length; i++) {

        console.log('hello');
        var avg = getRandomArbitrary(this.minCust, this.maxCust);
        console.log(avg);
        this.cookiesPerHour.push(Math.floor(avg * this.avgCookiesPerSale));
    }
    return this.cookiesPerHour;
};


//create header
function createHeader() {
    var headerRow = document.createElement('tr')

    var locationName = document.createElement('th');
    locationName.textContent = 'Location Name';
    headerRow.appendChild(locationName);

    for (var i = 0; i < hours.length; i++) {
        var tableHeader = document.createElement('th');
        tableHeader.textContent = hours[i];
        headerRow.appendChild(tableHeader);
    }

    var totalLoc = document.createElement('th');
    totalLoc.textContent = ' Total '
    headerRow.appendChild(totalLoc);

    storeTable.appendChild(headerRow);
}

createHeader();


// Body : displaying a matrix based on location * hours
//rendering function with nested for loops that populates table
Store.prototype.render = function () {
    this.avgSalesPerHour();
    this.totalSalesPerDay();

    //for (var i = 0; i < citiesArray.length; i++) {
        var row = document.createElement('tr');
        row.textContent = citiesArray[i].location;
        for (var j = 0; j < hours.length; j++) {
            var tableData = document.createElement('td');
            tableData.textContent = this.cookiesPerHour[j];
            row.appendChild(tableData);
        }
        var totalData=document.createElement('td');
        totalData.textContent=this.sum;
        row.appendChild(totalData);

        storeTable.appendChild(row);
    
};

// Footer : displaying " Totals by Hour" | display each total per hour | total by hour and location

function createFooter(){
    var footerRow = document.createElement('tfoot');

    var label = document.createElement('th')
    label.textContent = 'Total';
    footerRow.appendChild(label);

    
    var hourlyTotal=0;
    var grandTotal=0;
    for(var i=0; i<hours[i]; i++){
        hourlyTotal=0;
        
        for(var j=0; j<citiesArray.length; j++){
            hourlyTotal += citiesArray[j].cookiesPerHour[i];
            grandTotal += citiesArray[j].cookiesPerHour[i];
        } console.log(hourlyTotal);

        var footerSums=document.createElement('th');
        footerSums.textContent=hourlyTotal;
        footerRow.appendChild(footerSums); 
    }
    var allStoreTotal=document.createElement('th');
    allStoreTotal.textContent=grandTotal;
    footerRow.appendChild(allStoreTotal);
    
    storeTable.appendChild(footerRow);
    
    console.log(grandTotal);
   //return hourlyTotal;
}
createFooter();

//instantiations for each store location
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

//render function: 
for(var i=0; i<citiesArray.length; i++){
    citiesArray[i].render();
}
console.log(citiesArray);

