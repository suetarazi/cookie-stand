'use strict';

var storeTable = document.getElementById('storeTable');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomArbitrary(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust) + minCust);

}
console.log(getRandomArbitrary(1, 5));

//Constructor Function
function Store(location, minCust, maxCust, avgCookiesPerSale) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.sum = 0;
    this.cookiesPerHour = [];
}
Store.prototype.avgSalesPerHour = function () {

    for (var i = 0; i < hours.length; i++) {


        var headerRow = document.createElement('tr');
        //    headerRow.textContent = this.hours.push['Total'];

        var headerEmptySpace = document.createElement('th');
        headerEmptySpace.textContent = '';
        headerRow.appendChild(headerEmptySpace);

        console.log('hello');
        var avg = getRandomArbitrary(this.minCust, this.maxCust);
        console.log(avg);
        this.cookiesPerHour.push(Math.floor(avg * this.avgCookiesPerSale));
    }
    return this.cookiesPerHour;
};

Store.prototype.totalSalesPerDay = function () {
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
        this.sum += this.cookiesPerHour[i];
    }
    console.log('how do you do?');

};

//rendering function with nested for loops that creates and populates table
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
        totalData.textContent=this.totalSalesPerDay();
        row.appendChild(totalData);

        storeTable.appendChild(row);
        //            tableData.textContent=this.totalSalesPerDay();
        //   row.appendChild(tableData);
   // }
    //storeTable.appendChild(cityTable);
};
//     //total cookiesPerDay for each location that goes at the end of each row


//total cookiesOverall for each hour that goes at the bottom of each column




//instantiations for each store location
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);
var citiesArray = [seattle, tokyo, dubai, paris, lima];

//crate header
function createHeader() {
    var headerRow = document.createElement('tr')

    //    headerRow.textContent.push='total';
    var emptyCell = document.createElement('th');
    emptyCell.textContent = '';
    headerRow.appendChild(emptyCell);

    for (var i = 0; i < hours.length; i++) {
        var tableHeader = document.createElement('th');
        tableHeader.textContent = hours[i];
        headerRow.appendChild(tableHeader);
    }
    storeTable.appendChild(headerRow);
}

createHeader();

for(var i=0; i<citiesArray.length; i++){
    citiesArray[i].render();
}

    // create table 

    //add headers


    //render statements for each store location


// footer



//tokyo.render();
//dubai.render();
//paris.render();
//lima.render();






// var seattle = {

//     location: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookiesPerSale: 6.3,
//    // hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     sum: 0, 
//     cookiesPerHour: [],
//     //methods
//     avgSalePerHour: function(){

//         for (var i=0; i< hours.length; i++){

//             var avg = getRandomArbitrary(this.minCust, this.maxCust);
//             this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));

//             // cookiesPerHour[i]= avg*this.avgCookiesPerSale;
//             //console.log(this.cookiesPerHour);
//         }
//     },

//     totalSalesPerDay: function(){

//         for(var i=0; i<this.cookiesPerHour.length; i++){
//         this.sum +=this.cookiesPerHour[i];
//     }
//     console.log (this.sum);
//     }
// }

// seattle.avgSalePerHour();

// seattle.totalSalesPerDay();

// var seattleDataToHTML = function(){
//     //append to the DOM
//     var outputData = document.getElementById("seattleData");
//     var outputUL = document.createElement('ul');
//     outputUL.textContent=seattle.location;
// console.log(seattle.cookiesPerHour);

// for(var i=0; i<hours.length; i++){
//         var timeLI=document.createElement('li');
//         timeLI.textContent=hours[i];
//         timeLI.textContent+= ':  ' + seattle.cookiesPerHour[i];
//     //   cookiesPerHourLI.textContent=cookiesPerHour[i];
//         outputUL.appendChild(timeLI) 

//     }
//     outputData.append(outputUL);

//     var TotalLI = document.createElement('li');
//     TotalLI.textContent= 'Total:  ' + seattle.sum;
//     outputUL.appendChild(TotalLI);
//        // ${seattle.cookiesPerHourLI[i]});
// };

// seattleDataToHTML();

// //console.log(seattle.hours);
// //console.log(seattle.minCust);

// //Tokyo

// var tokyo = {

//     location: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookiesPerSale: 1.2,
//     sum: 0,
//     cookiesPerHour: [],

//     avgSalesPerHour: function (){
//         for (var i=0; i<hours.length; i++){
//             var avg = getRandomArbitrary(this.minCust, this.maxCust);
//             this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));
//         }
//     },

//     totalSalesPerDay: function (){
//         for (var i=0; i<this.cookiesPerHour.length; i++){
//             this.sum+=this.cookiesPerHour[i];
//         }
//         console.log(this.sum);
//     }
// }
// tokyo.avgSalesPerHour();
// tokyo.totalSalesPerDay();

// var tokyoDataToHTML = function(){
//     //append to the DOM
//     var outputData = document.getElementById("tokyoData");
//     var outputUL = document.createElement('ul');
//     outputUL.textContent=tokyo.location;

//     for(var i=0; i<hours.length; i++){
//         var timeLI=document.createElement('li');
//         timeLI.textContent=hours[i];
//         timeLI.textContent+= ':  ' + tokyo.cookiesPerHour[i];
//         outputUL.appendChild(timeLI);
//     }
//     outputData.append(outputUL);

//     var TotalLI=document.createElement('li');
//     TotalLI.textContent='Total:  ' + tokyo.sum;
//     outputUL.appendChild(TotalLI); 
// };

// tokyoDataToHTML();

// //Dubai
// var dubai = {

//     location: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookiesPerSale: 3.7,
//     sum: 0,
//     cookiesPerHour: [],

//     avgSalesPerHour: function (){
//         for (var i=0; i<hours.length; i++){
//             var avg = getRandomArbitrary(this.minCust, this.maxCust);
//             this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));
//         }
//     },

//     totalSalesPerDay: function (){
//         for (var i=0; i<this.cookiesPerHour.length; i++){
//             this.sum+=this.cookiesPerHour[i];
//         }
//         console.log(this.sum);
//     }
// }
// dubai.avgSalesPerHour();
// dubai.totalSalesPerDay();

// var dubaiDataToHTML = function(){
//     //append to the DOM
//     var outputData = document.getElementById("dubaiData");
//     var outputUL = document.createElement('ul');
//     outputUL.textContent=dubai.location;

//     for(var i=0; i<hours.length; i++){
//         var timeLI=document.createElement('li');
//         timeLI.textContent=hours[i];
//         timeLI.textContent+= ':  ' + dubai.cookiesPerHour[i];
//         outputUL.appendChild(timeLI);
//     }
//     outputData.append(outputUL);

//     var TotalLI=document.createElement('li');
//     TotalLI.textContent='Total:  ' + dubai.sum;
//     outputUL.appendChild(TotalLI); 
// };

// dubaiDataToHTML();


// //Paris

// var paris = {

//     location: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookiesPerSale: 2.3,
//     sum: 0,
//     cookiesPerHour: [],

//     avgSalesPerHour: function (){
//         for (var i=0; i<hours.length; i++){
//             var avg = getRandomArbitrary(this.minCust, this.maxCust);
//             this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));
//         }
//     },

//     totalSalesPerDay: function (){
//         for (var i=0; i<this.cookiesPerHour.length; i++){
//             this.sum+=this.cookiesPerHour[i];
//         }
//         console.log(this.sum);
//     }
// }
// paris.avgSalesPerHour();
// paris.totalSalesPerDay();

// var parisDataToHTML = function(){
//     //append to the DOM
//     var outputData = document.getElementById("parisData");
//     var outputUL = document.createElement('ul');
//     outputUL.textContent=paris.location;

//     for(var i=0; i<hours.length; i++){
//         var timeLI=document.createElement('li');
//         timeLI.textContent=hours[i];
//         timeLI.textContent+= ':  ' + paris.cookiesPerHour[i];
//         outputUL.appendChild(timeLI);
//     }
//     outputData.append(outputUL);

//     var TotalLI=document.createElement('li');
//     TotalLI.textContent='Total:  ' + paris.sum;
//     outputUL.appendChild(TotalLI); 
// };

// parisDataToHTML();

// //Lima

// var lima = {

//     location: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookiesPerSale: 4.6,
//     sum: 0,
//     cookiesPerHour: [],

//     avgSalesPerHour: function (){
//         for (var i=0; i<hours.length; i++){
//             var avg = getRandomArbitrary(this.minCust, this.maxCust);
//             this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));
//         }
//     },

//     totalSalesPerDay: function (){
//         for (var i=0; i<this.cookiesPerHour.length; i++){
//             this.sum+=this.cookiesPerHour[i];
//         }
//         console.log(this.sum);
//     }
// }
// lima.avgSalesPerHour();
// lima.totalSalesPerDay();

// var limaDataToHTML = function(){
//     //append to the DOM
//     var outputData = document.getElementById("limaData");
//     var outputUL = document.createElement('ul');
//     outputUL.textContent=lima.location;

//     for(var i=0; i<hours.length; i++){
//         var timeLI=document.createElement('li');
//         timeLI.textContent=hours[i];
//         timeLI.textContent+= ':  ' + lima.cookiesPerHour[i];
//         outputUL.appendChild(timeLI);
//     }
//     outputData.append(outputUL);

//     var TotalLI=document.createElement('li');
//     TotalLI.textContent='Total:  ' + lima.sum;
//     outputUL.appendChild(TotalLI); 
// };

// limaDataToHTML();
