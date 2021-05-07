// Question 1
const question1 = () => {
    var a, b, i, text;
    a = document.getElementById("inp1").value;
    if (typeof(a) == 'string'){
        b = a.split(" ")
        for (i in b){
            text += b[i][0].toUpperCase() + b[i].substr(1) + ' ';
        }    
    }
    else{
        document.getElementById('num1').innerHTML = "Error"
    };
    document.getElementById('num1').innerHTML = text;
}


// Question 3
const question3 = () => {
    var a;
    a = document.getElementById('inp3').value;
    document.getElementById('num3').innerHTML = typeof(a);
}


// Question 4
const question4 = () => {
    var a, b, area, peri, text;
    a = Number(document.getElementById("len").value);
    b = Number(document.getElementById("bre").value);
    area = (a * b);
    peri = 2 * (a + b);
    text = "The area of the rectangle is " + area + "cm While it's perimeter is " + peri + 'cm';

    document.getElementById('num4').innerHTML = text
}


// Question 5
const question5 = () => {
    var a, b, c;
    a = document.getElementById("inp5").value;
    if (isNaN(Number(a))) {
        document.getElementById('num5').innerHTML = "Enter a number only"
    } else{
        b = a.split("").reverse();
        document.getElementById('num5').innerHTML = b.join("")
    }
}


// Question 6
const question6 = () => {
    var a, b;
    var num = 0;
    a = document.getElementById("inp6").value.toLowerCase();
    b = a.split("");
    for (var i = 0; i < b.length; i++){
        if (("a, e, i, o, u").includes(b[i])){
            num ++
        }
    }
    document.getElementById('num6').innerHTML = "There are " + num + " vowels"
}


// Question 7
const question7 = () => {
    var a, b;
    a = document.getElementById("inp7").value;

}


// Question 8
const question8 = () => {
    var a, b;
    a = document.getElementById('inp8').value;
    b = Math.sqrt(Number(a))
    document.getElementById('num8').innerHTML = b
    if (Number(a) % b == 0){
        document.getElementById('num8').innerHTML = a + ' is a perfect square'
    }
    else{
        document.getElementById('num8').innerHTML = a + ' is not a perfect square'
    }
}


// Question 9
const question9 = () => {
    var a, b, spl;
    a = document.getElementById('inp9').value;
    spl = a.split('')
    rev = spl.reverse()
    b = rev.join('')
    console.log(b)
    if (a.replace(" ",'') == b.replace(" ",'')){
        document.getElementById('num9').innerHTML = a + ' is a palindrome'
    } 
    else{
        document.getElementById('num9').innerHTML = a + ' is not a palindrome'        
    }
}


// Question 10
const question10 = () => {
    var a;
    a = document.getElementById('inp10').value;
    for (var i = 0; i < a.length; i++){
        var res;
        res += a.substr(i, a.length) + ' ';
    }
    document.getElementById('num10').innerHTML = res
}


// Question 11
const question11 = () => {
    var a, b, word, great, i;
    great = 0;
    a = document.getElementById('inp11').value;
    b = a.split(' ');
    for (word in b){
        i = word.length;
        if (i > great){
            great = i
        }
        document.getElementById('num11').innerHTML = 'The longest word is ' + b[word]
    } 
}


// Question 12
const question12 = () => {
    const person = {
        'name' : 'Aram',
        'age' : 24,
        'friends' :
            {
            'name' : 'Elizabeth',
        }
};
    message = 'He is ' + person.name + ' and his friend is ' + person.friends.name;
    document.getElementById('num12').innerHTML = message;
}


// Question 13
const question13 = () => {
    const persona = {
        'name' : 'John',
        'age' : 30,
        'cars' : ['Ford', 'BMW', 'Fiat']
    };
    message = persona.name + ' has a ' + persona.cars[1];
    document.getElementById('num13').innerHTML = message;
}


// Question 14
const question14 = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    message = '#' + randomColor
    document.getElementById('num14').innerHTML = message
}


// Question 15
const question15 = () => {
    
}


// Question 16
const question16 = () => {
    console.time('label');
    testFunction();
    console.timeEnd('label');
};

const testFunction = () => {
    for (var i = 0; i < 1000; i++){
        console.log(i);
    };
}


// Question 17
const question17 = () => {
    const first = course('HTML');
    const second = task('Assignment');
    message = 'You have a/an ' + second + ' in ' + first;
    document.getElementById('num17').innerHTML = message
};

const course = (name) => {
    return name;
};

const task = (_task) => {
    return _task;
};


// Question 18
