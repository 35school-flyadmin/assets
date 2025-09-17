import{r as i,a as e,j as t,_ as a,s as r}from"./index-19c72eea.js";import{c as o}from"./config-64712918.js";import{c as s}from"./classNames-3eab2e4d.js";import{g as n}from"./HolidaysTimerLogistics-ec552400.js";import{C as l}from"./ContentViewer-7339a9fd.js";import"./Header-a5fd479d.js";function c(){const[a,r]=i.useState([]);return i.useEffect((()=>{!async function(){try{const i=await fetch(`/data/links-data.json?v=${n()}`),e=await i.json();r(e)}catch(i){console.log("error")}}()}),[]),e(l,{title:"Полезные ссылки",children:e("main",{className:"links",children:t("div",{className:"links-list",children:[a.length>0&&a.map(((i,a)=>t(d,{className:s("h"===(null==i?void 0:i.variant)&&"horizontal"),onClick:()=>function(i){const e=document.createElement("a");e.href=i,e.target="_blank",e.click(),e.remove()}(i.link),children:[e("div",{className:"image",children:e("img",{src:o.APPLICATION_URL+i.image,alt:"prev"})}),e("div",{className:"title",children:e("h4",{children:i.title})})]},a))),0===a.length&&e("p",{children:"Список пуст"})]})})})}i.lazy((()=>a((()=>import("./Header-a5fd479d.js")),["assets/Header-a5fd479d.js","assets/index-19c72eea.js","assets/index-f4cc4167.css"])));const d=r.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: calc(100% / 4 - 2em);
    gap: 10px;
    box-shadow: 3px 3px 5px rgba(23, 23, 23, 0.1);
    background-color: #FFFFFF;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s ease;
    padding: 20px 0;
    border: 1px solid rgba(23, 23, 23, 0.1);
    @media (max-width: 1500px) {
        width: calc(100% / 3 - 2em);
    }
    @media (max-width: 1000px) {
        width: calc(100% / 2 - 2em);
    }
    @media (max-width: 550px) {
        width: calc(100% - 2em);
    }

    & > div.image {
        height: auto;
        position: relative;
        object-fit: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: calc(100% - 20px);
        padding: 0 10px;
        max-height: 100px;
        min-height: 100px;
        margin-bottom: 20px;

        & > img {
            width: auto;
            max-height: 100%;
            max-width: 100%;
            height: auto;
            aspect-ratio: auto;
            border-radius: 3px;
        }
    }

    & > div.title {
        display: flex;
        position: relative;
        padding: 10px 20px;
        width: calc(100% - 40px);

        & > h4 {
            width: 100%;
            padding: 0;
            margin: 0;
            font-weight: 500;
            color: #2f4858;
            font-size: 1.1em;
            line-height: 1.3em;
            text-align: center;
            text-transform: uppercase;

        }
    }

    &:hover {
        box-shadow: 3px 3px 5px rgba(23, 23, 23, 0.2);
        transform: translateY(-3px);

        border: 1px solid #219653;

        & > div.title {
            & > h4 {
                color: #219653;
            }
        }
    }

`;export{c as default};
//# sourceMappingURL=UsefulLinksScreen-77ebd624.js.map
