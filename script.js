// Task 1: Get all the countries from Asia continent /region using Filter function
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data= request.response;
    var result=JSON.parse(data);
    var res=result.filter((x)=>x.region==="asia")
    console.log(res);
}

// Task 2: Get all the countries with a population of less than 2 lakhs using Filter function
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data= request.response;
    var result=JSON.parse(data);
    var res=result.filter((x)=>x.population<200000)
    var finalres=res.map((ele)=>console.log(ele.name.common))
}

// Task 3: Print the following details name, capital, flag, using forEach function
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data= request.response;
    var result=JSON.parse(data);
    var res=result.foreach((x)=>console.log(x.name.common, x.capital, x.flag));
}
// Task 4: Print the total population of countries using reduce function
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data= request.response;
    var result=JSON.parse(data);
    var res=result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res);
}
// Task 5: Print the country that uses US dollars as currency.
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data= request.response;
    var result=JSON.parse(data);
   