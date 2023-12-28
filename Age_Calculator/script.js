let userInput = document.getElementById("dob");
userInput.max = new Date().toISOString().split("T")[0]; //It will not add future date.

const getDays=(year,months)=>{
    return new Date(year, months,0).getDate();
 }

function calculateAge(){
    
if(!userInput.value) {
    alert("Please Enter a valid date of birth.")
    return;
}

    let birthDate = new Date(userInput.value);
    let currentDate = new Date();
    let d1 =  birthDate.getDate();
    let d2 =  currentDate.getDate();
    let m1 =  birthDate.getMonth() + 1;
    let m2 =  currentDate.getMonth() + 1;
    let y1 =  birthDate.getFullYear();
    let y2 =  currentDate.getFullYear();
    let y3,m3,d3;
    y3 = y2 - y1;
    //Calculate Months
    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = m2 - m1 + 12;
    }

     if(d2>=d1){
        d3 = d2 - d1;
     }
     else{
        m3--;
        d3 = d2 - d1 + getDays(y1,m1);
     }
     if(m3<0){
        y3--;
       m3 = 11;
     }
     let output = document.getElementById("res");
     output.innerText=`Your Age is ${y3} years, ${m3} months and ${d3} days.`
}


