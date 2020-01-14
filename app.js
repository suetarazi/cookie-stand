'use strict'; 

var hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomArbitrary (minCust, maxCust){
    return Math.floor(Math.random() * (maxCust-minCust) + minCust);

}
console.log(getRandomArbitrary(1, 5));

var seattle = {

    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookiesPerSale: 6.3,
   // hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookiesPerHour: [],
    sum: 0, 
    //methods
    avgSalePerHour: function(){
               
        for (var i=0; i< hours.length; i++){

            var avg = getRandomArbitrary(this.minCust, this.maxCust);

            // cookiesPerHour[i]= avg*this.avgCookiesPerSale;
            this.cookiesPerHour.push(avg*this.avgCookiesPerSale);
            //console.log(this.cookiesPerHour);
        }
    },

    totalSalesPerDay: function(){
    
        for(var i=0; i<this.cookiesPerHour.length; i++){
        this.sum +=this.cookiesPerHour[i];
    }
    console.log (this.sum);
    }
}

seattle.avgSalePerHour();

seattle.totalSalesPerDay();

var seattleDataToHTML = function(){
    //append to the DOM
    var outputData = document.getElementById("seattleData");
    var outputUL = document.createElement('ul');
    outputUL.textContent=seattle.location;
console.log(seattle.cookiesPerHour);
   
for(var i=0; i<hours.length; i++){
        var timeLI=document.createElement('li');
        timeLI.textContent=hours[i];
        timeLI.textContent+= ':  ' + seattle.cookiesPerHour[i];
    //   cookiesPerHourLI.textContent=cookiesPerHour[i];
        outputUL.appendChild(timeLI) 
            
    }
    outputData.append(outputUL);

    var TotalLI = document.createElement('li');
    TotalLI.textContent= 'Total:  ' + seattle.sum;
    outputUL.appendChild(TotalLI);
       // ${seattle.cookiesPerHourLI[i]});
};

seattleDataToHTML();

//console.log(seattle.hours);
//console.log(seattle.minCust);

