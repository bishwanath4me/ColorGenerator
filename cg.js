//to creat rendom colr generator
const getColor = ()=>{
    const randomnumber =Math.floor(Math.random()*16777215)
    //to get hexanumber
    const randomcode="#"+randomnumber.toString(16);
    //console.log(randomnumber,randomcode);
    //to put that random color into body background
    document.body.style.backgroundColor = randomcode;
    //to get code of colar on ui
    document.getElementById("color-code").innerText=randomcode;
    navigator.clipboard.writeText(randomcode)
}
//event call work on click
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
//intial call work as page loaded
getColor();