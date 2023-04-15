function firstLable(tagname,attrname,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele
}
let firstName = firstLable('lable','class','main','First Name');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let firstBreak = lineBreaker('br')

function firstInput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    let firstName = document.createElement(tagname);
    firstName.setAttribute(attrname,attrvalue);
    firstName.setAttribute(attrname1,attrvalue1);
    return firstName
}
let firstNameInput = firstInput('input','type','text','name','firstname');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let secondFirstBreak = lineBreaker('br');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let  thirdFirstBreak= lineBreaker('br')



//middle name
function middleLable(tagname,attrname,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele
}
let middleName = middleLable('lable','class','main','Middle Name');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let middleBreak = lineBreaker('br')

function middleInput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    let firstName = document.createElement(tagname);
    firstName.setAttribute(attrname,attrvalue);
    firstName.setAttribute(attrname1,attrvalue1);
    return firstName
}
let middleNameInput = middleInput('input','type','text','name','middlename');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let secondMiddleBreak = lineBreaker('br');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let thirdMiddleBreak = lineBreaker('br')



//last name
function lastLable(tagname,attrname,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele
}
let lastName = lastLable('lable','class','main','Last Name');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let lastBreak = lineBreaker('br')

function lastInput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    let lastName = document.createElement(tagname);
    lastName.setAttribute(attrname,attrvalue);
    lastName.setAttribute(attrname1,attrvalue1);
    return lastName
}
let lastNameInput = lastInput('input','type','text','name','lastname');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let secondLastBreak = lineBreaker('br');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let thirdLastBreak = lineBreaker('br')



// email
function emailLable(tagname,attrname,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele
}
let email = emailLable('lable','class','main','email');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let emailBreak = lineBreaker('br')

function lastInput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    let lastName = document.createElement(tagname);
    lastName.setAttribute(attrname,attrvalue);
    lastName.setAttribute(attrname1,attrvalue1);
    return lastName
}
let emailInput = lastInput('input','type','text','name','email');

function lineBreaker(tagname){
    let breaker = document.createElement(tagname)
    return breaker
}
let secondEmailBreak = lineBreaker('br')

document.body.append(firstName,firstBreak,firstNameInput,secondFirstBreak,thirdFirstBreak)
document.body.append(middleName,middleBreak,middleNameInput,secondMiddleBreak,thirdMiddleBreak);
document.body.append(lastName,lastBreak,lastNameInput,secondLastBreak,thirdLastBreak);
document.body.append(email,emailBreak,emailInput,secondEmailBreak);