var confirm = document.getElementById("submit")


confirm.addEventListener("click",function(){
	var input1 = document.getElementById("name1").value;
	var input2 = document.getElementById("year1").value;
    var movie1 = { name: input1, year: input2}
	console.log(input1,input2)
	sessionStorage.setItem("movie1",JSON.stringify(movie1));

    var input1 = document.getElementById("name2").value;
    var input2 = document.getElementById("year2").value;
    var movie2 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie2",JSON.stringify(movie2));

    var input1 = document.getElementById("name3").value;
    var input2 = document.getElementById("year3").value;
    var movie3 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie3",JSON.stringify(movie3));

    var input1 = document.getElementById("name4").value;
    var input2 = document.getElementById("year4").value;
    var movie4 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie4",JSON.stringify(movie4));



    var input1 = document.getElementById("name5").value;
    var input2 = document.getElementById("year5").value;
    var movie5 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie5",JSON.stringify(movie5));

    var input1 = document.getElementById("name6").value;
    var input2 = document.getElementById("year6").value;
    var movie6 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie6",JSON.stringify(movie6));

    var input1 = document.getElementById("name7").value;
    var input2 = document.getElementById("year7").value;
    var movie7 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie7",JSON.stringify(movie7));

    var input1 = document.getElementById("name8").value;
    var input2 = document.getElementById("year8").value;
    var movie8 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie8",JSON.stringify(movie8));



    var input1 = document.getElementById("name9").value;
    var input2 = document.getElementById("year9").value;
    var movie9 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie9",JSON.stringify(movie9));

    var input1 = document.getElementById("name10").value;
    var input2 = document.getElementById("year10").value;
    var movie10 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie10",JSON.stringify(movie10));

    var input1 = document.getElementById("name11").value;
    var input2 = document.getElementById("year11").value;
    var movie11 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie11",JSON.stringify(movie11));

    var input1 = document.getElementById("name12").value;
    var input2 = document.getElementById("year12").value;
    var movie12 = { name: input1, year: input2}
    console.log(input1,input2)
    sessionStorage.setItem("movie12",JSON.stringify(movie12));


	location.href="reveal.html";
	window.location.href = "./reveal.html"
},false);
