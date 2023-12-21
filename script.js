let hour=document.querySelector('.hour');
let minute=document.querySelector('.minute');
let second=document.querySelector('.second');
let btn=document.querySelector('.btn');
let container=document.querySelector('.container');

  let date=new Date();
let hours=date.getHours()
hour.innerHTML=hours+' :'
let minutes=date.getMinutes();
minute.innerHTML=minutes+' :'
  let seconds=date.getSeconds()                                          
  
setInterval(()=>{
  seconds++
 second.innerHTML=seconds
  if(seconds==60){
    minutes++
    seconds=0
   minute.innerHTML=minutes+' :'
  }else if(minutes==60){
    hours++;
    minutes=0
    hour.innerHTML=hours+' :';
  }
},1000)
btn.addEventListener('click',()=>{
  container.classList.toggle('active')
})

