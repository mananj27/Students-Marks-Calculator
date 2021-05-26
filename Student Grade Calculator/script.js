function getmarks(){
    var maths = Number(document.getElementById("maths").value);
    var english = Number(document.getElementById("english").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var physics = Number(document.getElementById("physics").value);

    var totalMarks = 400;
    var marksObtain = maths + english + physics + chemistry;
    var percentage = (marksObtain / totalMarks) * 100;
    var grade = "";

    document.getElementById("percentage").innerHTML = percentage + "%";

    if(percentage > 90){
        grade = "A+";
    }else if(percentage < 90 && percentage > 80 ){
        grade = "A";
    }else if(percentage < 80 && percentage > 60 ){
        grade = "B";
    }else if(percentage < 60 && percentage > 50 ){
        grade = "C";
    }else if(percentage < 50){
        grade = "F";
    }
    document.getElementById("grade").innerHTML = grade;

    if(percentage < 50){
        document.getElementById("pass").innerHTML = "Sorry! You Failed";
    }else{
        document.getElementById("pass").innerHTML = "Congratulations you have passed";
    }
}