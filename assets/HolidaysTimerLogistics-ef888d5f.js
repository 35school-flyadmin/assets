import{r as e,j as t,a as n,s as a}from"./index-0b0b8bde.js";const i=["2024.4.10","2024.4.11","2024.4.12","2024.4.13","2024.4.14","2024.4.15","2024.4.16","2024.4.17","2024.4.18","2024.4.0","2024.4.20","2024.4.21","2024.4.22","2024.4.23","2024.4.24","2024.4.25","2024.4.26","2024.4.27","2024.4.28","2024.4.29","2024.8.30","2024.8.31","2025.9.32","2025.9.33","2025.9.34","2025.9.35","2025.9.36","2025.9.37"];function s(){return i.at(-1)}function l({targetDate:a,title:i,status:s}){const l=function(t){const n=e.useCallback((()=>{const e=t-new Date;let n={};return n=e>0?{days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}:{days:0,hours:0,minutes:0,seconds:0},n}),[t]),[a,i]=e.useState(n());return e.useEffect((()=>{const e=setTimeout((()=>{i(n())}),1e3);return()=>clearTimeout(e)})),a}(a);return 0===Object.values(l).filter((e=>0!==e)).length?null:t(r,{children:[t("div",{className:"title",children:[i," ",n("span",{children:s?"закончатся через: ":"наступят через"})]}),t("div",{className:"timer",children:[t("div",{className:"item",children:[n("div",{className:"number",children:l.days}),n("div",{className:"names",children:"дней"})]}),t("div",{className:"item",children:[n("div",{className:"number",children:l.hours}),n("div",{className:"names",children:"часов"})]}),t("div",{className:"item",children:[n("div",{className:"number",children:l.minutes}),n("div",{className:"names",children:"минут"})]}),t("div",{className:"item",children:[n("div",{className:"number",children:l.seconds}),n("div",{className:"names",children:"секунд"})]})]})]})}console.log(s());const r=a.div`
    display: flex;
    position: relative;
    width: 100%;
    color: #FFFFFF;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    align-items: center;
    padding: 1em 0;
    background: linear-gradient(90.5deg, #219653 3%, #6BBF59 100.2%);

    @media screen and (max-width: 800px) {
        flex-direction: column;

    }

    & > div.title {
        font-weight: 500;
        font-size: 24px;
        text-align: center;
    }

    & > div.timer {
        display: flex;
        flex-direction: row;
        gap: 5px;
        font-size: 18px;
        @media screen and (max-width: 250px) {
            flex-wrap: wrap;
        }

        & > div.item {
            display: flex;
            position: relative;
            flex-direction: column;
            background-color: #219653;
            border-radius: 6px;
            color: #FFFFFF;
            justify-content: center;
            align-items: center;
            height: 60px;
            width: 60px;
            

            & > div.names {
                font-size: 13px;
            }
        }
    }
`;function c(){const[t,a]=e.useState([]),[i,r]=e.useState([]),[c,o]=e.useState(null);return e.useEffect((()=>{!async function(){try{const e=await fetch(`/data/holidays-data.json?v=${s()}`),t=await e.json();a(t.map((e=>e.title))),r(t.map((e=>null==e?void 0:e.dates.map((e=>new Date(e))))))}catch(e){console.log("error")}}()}),[]),e.useEffect((()=>{0!==i.length&&function(){const e=new Date,t=function(e){const t=i;for(let n=0;n<t.length;n++)if(e>=t[n].at(0)&&e<=t[n].at(-1))return n+1;return 0}(e);if(t>0)o({status:!0,index:t-1});else{const t=function(e){const t=i;for(let n=0;n<t.length;n++)if(e<t[n].at(0))return n+1;return 0}(e);o(t>0?{status:!1,index:t-1}:null)}}()}),[i]),null===c?null:n(l,{targetDate:c.status?i[c.index].at(-1):i[c.index].at(0),title:t[c.index],status:c.status})}export{c as H,s as g};
//# sourceMappingURL=HolidaysTimerLogistics-ef888d5f.js.map
