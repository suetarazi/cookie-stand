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
    sum: 0, 
    cookiesPerHour: [],
    //methods
    avgSalePerHour: function(){
               
        for (var i=0; i< hours.length; i++){

            var avg = getRandomArbitrary(this.minCust, this.maxCust);

            // cookiesPerHour[i]= avg*this.avgCookiesPerSale;
            this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));
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

//Tokyo

var tokyo = {

    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookiesPerSale: 1.2,
    sum: 0,
    cookiesPerHour: [],
    
    avgSalesPerHour: function (){
        for (var i=0; i<hours.length; i++){
            var avg = getRandomArbitrary(this.minCust, this.maxCust);
            this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));
        }
    },

    totalSalesPerDay: function (){
        for (var i=0; i<this.cookiesPerHour.length; i++){
            this.sum+=this.cookiesPerHour[i];
        }
        console.log(this.sum);
    }
}
tokyo.avgSalesPerHour();
tokyo.totalSalesPerDay();

var tokyoDataToHTML = function(){
    //append to the DOM
    var outputData = document.getElementById("tokyoData");
    var outputUL = document.createElement('ul');
    outputUL.textContent=tokyo.location;

    for(var i=0; i<hours.length; i++){
        var timeLI=document.createElement('li');
        timeLI.textContent=hours[i];
        timeLI.textContent+= ':  ' + tokyo.cookiesPerHour[i];
        outputUL.appendChild(timeLI);
    }
    outputData.append(outputUL);

    var TotalLI=document.createElement('li');
    TotalLI.textContent='Total:  ' + tokyo.sum;
    outputUL.appendChild(TotalLI); 
};

tokyoDataToHTML();

//Dubai
var dubai = {

    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookiesPerSale: 3.7,
    sum: 0,
    cookiesPerHour: [],
    
    avgSalesPerHour: function (){
        for (var i=0; i<hours.length; i++){
            var avg = getRandomArbitrary(this.minCust, this.maxCust);
            this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));
        }
    },

    totalSalesPerDay: function (){
        for (var i=0; i<this.cookiesPerHour.length; i++){
            this.sum+=this.cookiesPerHour[i];
        }
        console.log(this.sum);
    }
}
dubai.avgSalesPerHour();
dubai.totalSalesPerDay();

var dubaiDataToHTML = function(){
    //append to the DOM
    var outputData = document.getElementById("dubaiData");
    var outputUL = document.createElement('ul');
    outputUL.textContent=dubai.location;

    for(var i=0; i<hours.length; i++){
        var timeLI=document.createElement('li');
        timeLI.textContent=hours[i];
        timeLI.textContent+= ':  ' + dubai.cookiesPerHour[i];
        outputUL.appendChild(timeLI);
    }
    outputData.append(outputUL);

    var TotalLI=document.createElement('li');
    TotalLI.textContent='Total:  ' + dubai.sum;
    outputUL.appendChild(TotalLI); 
};

dubaiDataToHTML();


//Paris

var paris = {

    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookiesPerSale: 2.3,
    sum: 0,
    cookiesPerHour: [],
    
    avgSalesPerHour: function (){
        for (var i=0; i<hours.length; i++){
            var avg = getRandomArbitrary(this.minCust, this.maxCust);
            this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));
        }
    },

    totalSalesPerDay: function (){
        for (var i=0; i<this.cookiesPerHour.length; i++){
            this.sum+=this.cookiesPerHour[i];
        }
        console.log(this.sum);
    }
}
paris.avgSalesPerHour();
paris.totalSalesPerDay();

var parisDataToHTML = function(){
    //append to the DOM
    var outputData = document.getElementById("parisData");
    var outputUL = document.createElement('ul');
    outputUL.textContent=paris.location;

    for(var i=0; i<hours.length; i++){
        var timeLI=document.createElement('li');
        timeLI.textContent=hours[i];
        timeLI.textContent+= ':  ' + paris.cookiesPerHour[i];
        outputUL.appendChild(timeLI);
    }
    outputData.append(outputUL);

    var TotalLI=document.createElement('li');
    TotalLI.textContent='Total:  ' + paris.sum;
    outputUL.appendChild(TotalLI); 
};

parisDataToHTML();

//Lima

var lima = {

    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookiesPerSale: 4.6,
    sum: 0,
    cookiesPerHour: [],
    
    avgSalesPerHour: function (){
        for (var i=0; i<hours.length; i++){
            var avg = getRandomArbitrary(this.minCust, this.maxCust);
            this.cookiesPerHour.push(Math.floor(avg*this.avgCookiesPerSale));
        }
    },

    totalSalesPerDay: function (){
        for (var i=0; i<this.cookiesPerHour.length; i++){
            this.sum+=this.cookiesPerHour[i];
        }
        console.log(this.sum);
    }
}
lima.avgSalesPerHour();
lima.totalSalesPerDay();

var limaDataToHTML = function(){
    //append to the DOM
    var outputData = document.getElementById("limaData");
    var outputUL = document.createElement('ul');
    outputUL.textContent=lima.location;

    for(var i=0; i<hours.length; i++){
        var timeLI=document.createElement('li');
        timeLI.textContent=hours[i];
        timeLI.textContent+= ':  ' + lima.cookiesPerHour[i];
        outputUL.appendChild(timeLI);
    }
    outputData.append(outputUL);

    var TotalLI=document.createElement('li');
    TotalLI.textContent='Total:  ' + lima.sum;
    outputUL.appendChild(TotalLI); 
};

limaDataToHTML();
