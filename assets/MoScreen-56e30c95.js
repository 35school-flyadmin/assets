import{u as e,Q as t,r as i,a,j as o,_ as n,s as r}from"./index-19c72eea.js";import{VIEWER_DOCUMENT_SESSION_STORAGE as s}from"./ViewerDocumentScreen-c3d55d37.js";import{g as l}from"./HolidaysTimerLogistics-ec552400.js";import{C as c}from"./ContentViewer-7339a9fd.js";import"./Header-a5fd479d.js";i.lazy((()=>n((()=>import("./Header-a5fd479d.js")),["assets/Header-a5fd479d.js","assets/index-19c72eea.js","assets/index-f4cc4167.css"])));const d=i.lazy((()=>n((()=>import("./FlexBox-791c6895.js")),["assets/FlexBox-791c6895.js","assets/index-19c72eea.js","assets/index-f4cc4167.css","assets/ContentViewer-7339a9fd.js","assets/HolidaysTimerLogistics-ec552400.js","assets/Header-a5fd479d.js"]))),m=i.lazy((()=>n((()=>import("./Title-24c0e37a.js")),["assets/Title-24c0e37a.js","assets/index-19c72eea.js","assets/index-f4cc4167.css"]))),p=i.lazy((()=>n((()=>import("./Main-8f5a744e.js")),["assets/Main-8f5a744e.js","assets/index-19c72eea.js","assets/index-f4cc4167.css"]))),x=i.lazy((()=>n((()=>import("./Card-dc284779.js")),["assets/Card-dc284779.js","assets/index-19c72eea.js","assets/index-f4cc4167.css"])));function f(){const[t,n]=i.useState([]);return function(){const t=e()}(),i.useEffect((()=>{!async function(){try{const e=await fetch(`/data/mo-data.json?v=${l()}`),t=await e.json();n(t)}catch(e){console.log("error")}}()}),[]),a(c,{title:"Работа методического объединения",children:o(p,{children:[a(m,{children:"Документы"}),o(d,{type:"rows",children:[t.length>0&&t.map(((e,t)=>a(x,{children:o(h,{children:[a("div",{className:"materials-image-box",children:a("img",{src:"/assets/document-file-folder-500x500-728acaeb.jpg",alt:"DOC"})}),o("div",{className:"materials-content-box",children:[a("div",{className:"materials-content-box-title",children:e.title}),a("div",{className:"materials-content-box-actions",children:a("a",{href:e.file,children:"Скачать"})})]})]})},t))),0===t.length&&a("p",{children:"Список пуст"})]})]})})}const h=r.div`
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
//# sourceMappingURL=MoScreen-56e30c95.js.map
