import{u as e,Q as t,r as i,a,j as n,_ as o,s as r}from"./index.88f42fb9.v2025.09.25-13.39.37.js";import{VIEWER_DOCUMENT_SESSION_STORAGE as s}from"./ViewerDocumentScreen.83d45e77.v2025.09.25-13.39.37.js";import{g as l}from"./HolidaysTimerLogistics.53be4b16.v2025.09.25-13.39.37.js";import{C as c}from"./ContentViewer.08f289c6.v2025.09.25-13.39.37.js";import"./Header.d4b92287.v2025.09.25-13.39.37.js";i.lazy((()=>o((()=>import("./Header.d4b92287.v2025.09.25-13.39.37.js")),["assets/Header.d4b92287.v2025.09.25-13.39.37.js","assets/index.88f42fb9.v2025.09.25-13.39.37.js","assets/index.cffc947d.v2025.09.25-13.39.37.css"])));const d=i.lazy((()=>o((()=>import("./FlexBox.8a4cd60d.v2025.09.25-13.39.37.js")),["assets/FlexBox.8a4cd60d.v2025.09.25-13.39.37.js","assets/index.88f42fb9.v2025.09.25-13.39.37.js","assets/index.cffc947d.v2025.09.25-13.39.37.css","assets/ContentViewer.08f289c6.v2025.09.25-13.39.37.js","assets/HolidaysTimerLogistics.53be4b16.v2025.09.25-13.39.37.js","assets/Header.d4b92287.v2025.09.25-13.39.37.js"]))),m=i.lazy((()=>o((()=>import("./Title.eff06173.v2025.09.25-13.39.37.js")),["assets/Title.eff06173.v2025.09.25-13.39.37.js","assets/index.88f42fb9.v2025.09.25-13.39.37.js","assets/index.cffc947d.v2025.09.25-13.39.37.css"]))),p=i.lazy((()=>o((()=>import("./Main.1de61cbd.v2025.09.25-13.39.37.js")),["assets/Main.1de61cbd.v2025.09.25-13.39.37.js","assets/index.88f42fb9.v2025.09.25-13.39.37.js","assets/index.cffc947d.v2025.09.25-13.39.37.css"]))),x=i.lazy((()=>o((()=>import("./Card.caf9b61a.v2025.09.25-13.39.37.js")),["assets/Card.caf9b61a.v2025.09.25-13.39.37.js","assets/index.88f42fb9.v2025.09.25-13.39.37.js","assets/index.cffc947d.v2025.09.25-13.39.37.css"])));function f(){const[t,o]=i.useState([]);return function(){const t=e()}(),i.useEffect((()=>{!async function(){try{const e=await fetch(`/data/mo-data.json?v=${l()}`),t=await e.json();o(t)}catch(e){}}()}),[]),a(c,{title:"Работа методического объединения",children:n(p,{children:[
a(m,{children:"Документы"}),
n(d,{type:"rows",children:[t.length>0&&t.map(((e,t)=>a(x,{children:n(h,{children:[
a("div",{className:"materials-image-box",children:a("img",{src:"/assets/document-file-folder-500x500.728acaeb.v2025.09.25-13.39.37.jpg",alt:"DOC"})}),
n("div",{className:"materials-content-box",children:[
a("div",{className:"materials-content-box-title",children:e.title}),
a("div",{className:"materials-content-box-actions",children:a("a",{href:e.file,children:"Скачать"})})]})]})},t))),0===t.length&&a("p",{children:"Список пуст"})]})]})})}const h=r.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }

    & > div.materials-image-box {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: calc(100% / 3);
        height: 100%;
        @media screen and (max-width: 600px) {
            width: 100%;
            height: 60px;
            padding: 1em 0;
        }

        & > img {
            display: block;
            position: relative;
            width: 90%;
            height: 100%;
            object-fit: contain;
        }
    }

    & > div.materials-content-box {
        display: flex;
        position: relative;
        flex-direction: column;
        width: calc(100% * 2 / 3);

        @media screen and (max-width: 600px) {
            width: 100%;
        }

        & > div.materials-content-box-title {
            color: #2f4858;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 1em;
            margin-left: 30px;
            text-align: justify-all;
            font-size: 20px;
        }

        & > div.materials-content-box-actions {
            display: flex;
            flex-direction: row;
            position: relative;
            flex-wrap: wrap;
            justify-content: flex-end;
            @media screen and (max-width: 600px) {
                justify-content: center;
            }

            & > a, & > button {
                margin: 5px;
                border: none;
                font-size: 16px;
                cursor: pointer;
                color: #FFFFFF;
                background-color: rgb(33, 150, 83);
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 4px;
                transition: all 0.2s ease;

                &:hover {
                    transform: scale(1.01);
                    filter: drop-shadow(3px 3px 5px rgba(33, 150, 83, 0.5));
                }

                &:active {
                    transform: scale(0.99);
                    filter: drop-shadow(3px 3px 5px rgba(33, 150, 83, 0.15));
                }
            }
        }
    }
`;export{f as default};
