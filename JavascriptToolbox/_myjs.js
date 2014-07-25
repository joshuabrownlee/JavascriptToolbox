var alert = '<code>alert(" ");</code>';
var showAlert = function () {
    document.getElementById("modal-body").innerHTML = alert;
    document.getElementById("myModalLabel").innerHTML = "ALERT";
};
var prompt = '<code>prompt(" sample question ", " ");</code>';
var showPrompt = function () {
    document.getElementById("modal-body").innerHTML = prompt;
    document.getElementById("myModalLabel").innerHTML = "PROMPT ";
};
var If = '<code>if(1 === 1){ <br/> alert("");<br/> '+' }</code>';
var showIf = function () {
    document.getElementById("modal-body").innerHTML = If;
    document.getElementById("myModalLabel").innerHTML = "IF STATEMENT";
};
var ElseIfElse = '<code>if(1 === 1){ <br/> alert("");<br/> ' + ' } else if(1 === 1){ <br/> alert("");<br/>} else { <br/> alert("");<br/> }</code>';
var showElseifElse = function () {
    document.getElementById("modal-body").innerHTML = ElseIfElse;
    document.getElementById("myModalLabel").innerHTML = "ELSE IF ELSE";
};
var array = '<code>var myArray = [1,"Bob", "Now is", true];<br/><br/> myArray.pop();<br/><br/>myArray.push();<br/><br/>myArray.shift();<br/><br/>myArray.unshift();<br/><br/>myArray.splice();</code>';
var showArray = function () {
    document.getElementById("modal-body").innerHTML = array;
    document.getElementById("myModalLabel").innerHTML = "ARRAY";
}
var documentGetSet = '<code>document.getElementById("").value = varName;<br/><br/>document.getElementById("").innerHTML= varName;</code>';
var showDoc = function () {
    document.getElementById("modal-body").innerHTML = documentGetSet;
    document.getElementById("myModalLabel").innerHTML = "DGEBID";
};
var inputField = '<code>First name: &lt;input type="text" name="firstname"&gt;<br/><br/>Password: &lt;input type="password" name="pwd"&gt;<br/><br/>&lt;input type="radio" name="sex" value="male"&gt;Male<br/><br/>&lt;input type="submit" value="Submit"&gt;</code>';
var showInputField = function () {
    document.getElementById("modal-body").innerHTML = inputField;
    document.getElementById("myModalLabel").innerHTML = "INPUT FIELDS ";
};
var onClick = '<code>onClick="functionName()"</code>';
var showOnClick = function () {
    document.getElementById("modal-body").innerHTML = onClick;
    document.getElementById("myModalLabel").innerHTML = "ONCLICK";
};
var nestedLoops = '<code>var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]; <br/><br/> var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];  <br/><br/> var fullNames = [];  <br/><br/> for (var i = 0; i < firstNames.length; i++) {   <br/><br/> for (var j = 0; j < lastNames.length; j++){  <br/><br/> fullNames.push(firstNames[i] + lastNames[j]);    <br/> } <br/> }</code> ';
var showNestedLoops = function () {
    document.getElementById("modal-body").innerHTML = nestedLoops;
    document.getElementById("myModalLabel").innerHTML = "Nested Loops";
};
var prototype = '<code>person.prototype.nationality = "English"; <br/><br/>person.nationality = "English"; <br/><br/>plan1.cancellable = false;</code>';
var showPrototype = function () {
    document.getElementById("modal-body").innerHTML = prototype;
    document.getElementById("myModalLabel").innerHTML = "PROTOTYPE";
};
var whileLoop = '<code>var i = 0; <br/> while(i<=3){<br/>alert(i);<br/>i++;<br/> }</code>';
var showWhileLoop = function () {
    document.getElementById("modal-body").innerHTML = whileLoop;
    document.getElementById("myModalLabel").innerHTML = "WHILE LOOP";
};
var nestedIfs = '<code>if (c===d){<br/>if (x===y){<br/>g=h;<br/>}<br/>else if(a===b){<br/>g=h;<br/>}else {<br/>e=f;<br/>}<br/>}<br/>else { <br/>e = f;<br/>};</code>  ';
var showNestedIf = function () {
    document.getElementById("modal-body").innerHTML = nestedIfs;
    document.getElementById("myModalLabel").innerHTML = "NESTED IFS";
};
var object = '<code>var person = {<br/>firstName : "John",</br>lastName  : "Doe",<br/>age       : 50,<br/>eyeColor  : "blue"<br/>};<br/><br/>var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};</code>';
var showObject = function () {
    document.getElementById("modal-body").innerHTML = object;
    document.getElementById("myModalLabel").innerHTML = "OBJECT LITERAL";
};
var properties = '<code>name = person.lastName;</code>';
var showProperties = function () {
    document.getElementById("modal-body").innerHTML = properties;
    document.getElementById("myModalLabel").innerHTML = "PROPERTIES";
};
var method = '<code>person.fullName();</code>';
var showMethod = function () {
    document.getElementById("modal-body").innerHTML = method;
    document.getElementById("myModalLabel").innerHTML = "METHOD";
};
var forIn = '<code>for (x in person) {<br/>text += person[x];<br/>};</code>';
var showForIn = function () {
    document.getElementById("modal-body").innerHTML = forIn;
    document.getElementById("myModalLabel").innerHTML = "FOR IN LOOP";
};
var forLoop = '<code>for (i = 0; i < 5; i++) {<br/>alert("The number is " + i)  ;<br/>};</code>';
var showForLoop = function () {
    document.getElementById("modal-body").innerHTML = forLoop;
    document.getElementById("myModalLabel").innerHTML = "For Loop";
};
var constructor = '<code>function person(first, last, age, eyecolor) {<br/>this.firstName = first;<br/>this.lastName = last;<br/>this.age = age;<br/>this.eyeColor = eyecolor;<br/>}<br/><br/>var myFather = new person("John", "Doe", 50, "blue");<br/>var myMother = new person("Sally", "Rally", 48, "green");</code>';
var showConstuctor = function () {
    document.getElementById("modal-body").innerHTML = constructor;
    document.getElementById("myModalLabel").innerHTML = "CONSTUCTOR";
};
//var alert = '<code>alert(" ");</code>';
//var showAlert = function () {
//    document.getElementById("modal-body").innerHTML = alert;
//    document.getElementById("myModalLabel").innerHTML = "ALERT";
//};
//var alert = '<code>alert(" ");</code>';
//var showAlert = function () {
//    document.getElementById("modal-body").innerHTML = alert;
//    document.getElementById("myModalLabel").innerHTML = "ALERT";
//};
//var alert = '<code>alert(" ");</code>';
//var showAlert = function () {
//    document.getElementById("modal-body").innerHTML = alert;
//    document.getElementById("myModalLabel").innerHTML = "ALERT";
//};
//var alert = '<code>alert(" ");</code>';
//var showAlert = function () {
//    document.getElementById("modal-body").innerHTML = alert;
//    document.getElementById("myModalLabel").innerHTML = "ALERT";
//};