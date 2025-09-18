import{r as i,a as t,j as e,_ as a,s as r}from"./index.a9ab95a3.v2025.09.18-22.14.47.js";import{c as o}from"./classNames.3eab2e4d.v2025.09.18-22.14.47.js";import{g as s}from"./HolidaysTimerLogistics.e31ef7d2.v2025.09.18-22.14.47.js";import{C as n}from"./ContentViewer.f9f7bd36.v2025.09.18-22.14.47.js";import"./Header.e747d351.v2025.09.18-22.14.47.js";function l(){const[a,r]=i.useState([]);return i.useEffect((()=>{!async function(){try{const i=await fetch(`/data/links-data.json?v=${s()}`),t=await i.json();r(t)}catch(i){}}()}),[]),t(n,{title:"Полезные ссылки",children:t("main",{className:"links",children:e("div",{className:"links-list",children:[a.length>0&&a.map(((i,a)=>e(c,{className:o("h"===(null==i?void 0:i.variant)&&"horizontal"),onClick:()=>function(i){const t=document.createElement("a");t.href=i,t.target="_blank",t.click(),t.remove()}(i.link),children:[
t("div",{className:"image",children:t("img",{src:i.image,alt:"prev"})}),
t("div",{className:"title",children:t("h4",{children:i.title})})]},a))),0===a.length&&t("p",{children:"Список пуст"})]})})})}i.lazy((()=>a((()=>import("./Header.e747d351.v2025.09.18-22.14.47.js")),["assets/Header.e747d351.v2025.09.18-22.14.47.js","assets/index.a9ab95a3.v2025.09.18-22.14.47.js","assets/index.cffc947d.v2025.09.18-22.14.47.css"])));const c=r.div`
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

`;export{l as default};
