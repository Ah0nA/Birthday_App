const form = document.getElementById("akanNames");

const maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku"," Yaw"," Kofi"," Kwame"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua"," Yaa"," Afua","Ama"];

function (akanNames){
const CC = centuryFromYear(fd.get("year"));
const YY = parseInt(fd.get("year"));
const MM = fd.get("month");
const DD = fd.get("day");
const day = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
console.log(akanName);
}
if(fd.get("gender") == "male"){
alertText.innerHTML = `YOUR AKAN NAME IS ${maleNames[day]}`;

}else{
alertText.innerHTML =  `YOUR AKAN NAME IS ${femaleNames[day]}`;
}
