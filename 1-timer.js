import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as u}from"./assets/vendor-BbbuE1sJ.js";const e={input:document.querySelector("#datetime-picker"),startButton:document.querySelector("button[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};e.startButton.disabled=!0;let i=null;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=t[0];o<=new Date?(u.error({title:"Invalid Date",message:"Please choose a date in the future",position:"topRight"}),e.startButton.disabled=!0):(i=o,e.startButton.disabled=!1)}};h(e.input,f);e.startButton.addEventListener("click",()=>{p()});function p(){e.startButton.disabled=!0,e.input.disabled=!0;const t=setInterval(()=>{const s=i-new Date;if(s<=0){clearInterval(t),r(0,0,0,0),e.input.disabled=!1,u.success({title:"Time is Up!",message:"The countdown has ended.",position:"topRight"});return}const n=y(s);r(n.days,n.hours,n.minutes,n.seconds)},1e3)}function y(t){const d=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:l,seconds:m}}function a(t){return String(t).padStart(2,"0")}function r(t,o,s,n){e.days.textContent=a(t),e.hours.textContent=a(o),e.minutes.textContent=a(s),e.seconds.textContent=a(n)}
//# sourceMappingURL=1-timer.js.map