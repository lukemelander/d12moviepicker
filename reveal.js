
//Pixel size of the canvas
//const H = windowWidth;
//const W = windowWidth;

function setup(){
    createCanvas(windowWidth,windowHeight);
	background(128,139,150);
}

async function requestSequence() {

    var movie1  = JSON.parse(sessionStorage.getItem("movie1"));
    var movie2  = JSON.parse(sessionStorage.getItem("movie2"));
    var movie3  = JSON.parse(sessionStorage.getItem("movie3"));
    var movie4  = JSON.parse(sessionStorage.getItem("movie4"));

    var movie5  = JSON.parse(sessionStorage.getItem("movie5"));
    var movie6  = JSON.parse(sessionStorage.getItem("movie6"));
    var movie7  = JSON.parse(sessionStorage.getItem("movie7"));
    var movie8  = JSON.parse(sessionStorage.getItem("movie8"));

    var movie9  = JSON.parse(sessionStorage.getItem("movie9"));
    var movie10 = JSON.parse(sessionStorage.getItem("movie10"));
    var movie11 = JSON.parse(sessionStorage.getItem("movie11"));
    var movie12 = JSON.parse(sessionStorage.getItem("movie12"));

    var list = {
        1 : movie1,
        2 : movie2,
        3 : movie3,
        4 : movie4,
        5 : movie5,
        6 : movie6,
        7 : movie7,
        8 : movie8,
        9 : movie9,
        10 : movie10,
        11 : movie11,
        12 : movie12

    }

const Url = "https://api.random.org/json-rpc/4/invoke"
const pkg1 = {
        "jsonrpc": "2.0",
        "method": "generateIntegerSequences",
        "params": {
            "apiKey": "579c479b-5f2d-4b06-bd79-9f64ca244ce9",
            "n": 1,
            "length" : 12,
            "min": 1,
            "max": 12,
            "replacement": false,
            "base": 10
        },
        "id": 42
    }


let response = await axios.post(Url,pkg1);

let data = response.data.result.random.data[0];
num = data[11].toString();
console.log(data)
//console.log(num,list[num]);

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[0].toString()
let txt2 = 'Roll: ';
txt2 += data[0];
txt2 += ' (';
txt2 += list[num].name.toUpperCase();
txt2 += ' ';
txt2 += list[num].year;
txt2 += ')';
text(txt2,width/20,3*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[1].toString()
let txt3 = 'Roll: '
txt3 += data[1];
txt3 += ' (';
txt3 += list[num].name.toUpperCase();
txt3 += ' ';
txt3 += list[num].year;
txt3 += ')';
text(txt3,width/20,4*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[2].toString()
let txt4 = 'Roll: '
txt4 += data[2];
txt4 += ' (';
txt4 +=  list[num].name.toUpperCase();
txt4 += ' ';
txt4 += list[num].year;
txt4 += ')';
text(txt4,width/20,5*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[3].toString()
let txt5 = 'Roll: '
txt5 += data[3];
txt5 += ' (';
txt5 += list[num].name.toUpperCase();
txt5 += ' ';
txt5 += list[num].year;
txt5 += ')';
text(txt5,width/20,6*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[4].toString()
let txt6 ='Roll: '
txt6 += data[4];
txt6 += ' (';
txt6 += list[num].name.toUpperCase();
txt6 += ' ';
txt6 += list[num].year;
txt6 += ')';
text(txt6,width/20,7*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[5].toString()
let txt7 = 'Roll: '
txt7 += data[5];
txt7 += ' (';
txt7 +=  list[num].name.toUpperCase();
txt7 += ' ';
txt7 += list[num].year;
txt7 += ')';
text(txt7,width/20,8*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[6].toString()
let txt8 = 'Roll: '
txt8 += data[6];
txt8 += ' (';
txt8 += list[num].name.toUpperCase();
txt8 += ' ';
txt8 += list[num].year;
txt8 += ')';
text(txt8,width/20,9*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[7].toString()
let txt9 = 'Roll: '
txt9 += data[7];
txt9 += ' (';
txt9 +=  list[num].name.toUpperCase();
txt9 += ' ';
txt9 += list[num].year;
txt9 += ')';
text(txt9,width/20,10*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[8].toString()
let txt10 = 'Roll: '
txt10 += data[8];
txt10 += ' (';
txt10 += list[num].name.toUpperCase();
txt10 += ' ';
txt10 += list[num].year;
txt10 += ')';
text(txt10,width/20,11*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[9].toString()
let txt11 = 'Roll: '
txt11 += data[9];
txt11 += ' (';
txt11 += list[num].name.toUpperCase();
txt11 += ' ';
txt11 += list[num].year;
txt11 += ')';
text(txt11,width/20,12*height/20)

textSize(width / 30);
textAlign(LEFT,CENTER);
var num = data[10].toString()
let txt12 = 'Roll: '
txt12 += data[10];
txt12 += ' (';
txt12 +=  list[num].name.toUpperCase();
txt12 += ' ';
txt12 += list[num].year;
txt12 += ')';
text(txt12,width/20,13*height/20)



textSize(width / 24);
textAlign(CENTER,CENTER);
var num = data[11].toString()
let txt1 = 'Roll: ';
txt1 += data[11];
txt1 += ' (';
txt1 += list[num].name.toUpperCase();
txt1 += ' ';
txt1 += list[num].year;
txt1 += ')';
text(txt1,width/2,8*height/10)


}



function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve,ms));
}

requestSequence();
