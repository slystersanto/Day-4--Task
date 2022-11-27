var request=new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data);
    
    console.log(result[31].name.common,result[31].region,result[31].subregion);

    for(var i=0;i<result.length;i++){
        console.log(result[i].flags,result[i].name,result[i].region,result[i].subregion,result[i].population);//Here i displayed the all the required.
    }
}
 
        
        
//=>How to compare two JSON have the same properties without order? 


var obj1={name:"Person1",age:5};
var obj2={age:5,name:"Person1"};

if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    console.log("Same properties");
}else{
    console.log("Different properties");
}
        
        
    
