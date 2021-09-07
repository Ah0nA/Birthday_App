const form = document.querySelector("akanNames");
const alertMe = document.querySelector("#alert");

const maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku"," Yaw"," Kofi"," Kwame"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua"," Yaa"," Afua","Ama"];


const CC = centuryFromYear(fd.get("year"));
const YY = parseInt(fd.get("year"));
const MM = fd.get("month");
const DD = fd.get("day");
const day = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

if(fd.get("gender") == "male"){
alertText.innerHTML = `YOUR AKAN NAME IS.. ${maleNames[day]}`;

}else{
alertText.innerHTML =  `YOUR AKAN NAME IS.. ${femaleNames[day]}`;
}



function centuryFromYear(year) {
  if(typeof year == 'string')
    if(year.toString().slice(-2) == '00')
      return year.toString().slice(0,2);
    else
      return (Math.floor(+year/100) +1).toString();
  else if(typeof year == 'number')
    return Math.floor((year-1)/100) + 1;
  else
    return undefined;
} 