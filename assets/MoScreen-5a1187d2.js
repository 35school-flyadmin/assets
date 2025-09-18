import{u as e,Q as t,r as i,a,j as o,_ as n,s as r}from"./index-9e8840c1.js";import{VIEWER_DOCUMENT_SESSION_STORAGE as s}from"./ViewerDocumentScreen-3e954b9f.js";import{g as l}from"./HolidaysTimerLogistics-15b16658.js";import{C as c}from"./ContentViewer-cc392d44.js";import"./Header-5eedb324.js";i.lazy((()=>n((()=>import("./Header-5eedb324.js")),["assets/Header-5eedb324.js","assets/index-9e8840c1.js","assets/index-f4cc4167.css"])));const d=i.lazy((()=>n((()=>import("./FlexBox-4ebccb89.js")),["assets/FlexBox-4ebccb89.js","assets/index-9e8840c1.js","assets/index-f4cc4167.css","assets/ContentViewer-cc392d44.js","assets/HolidaysTimerLogistics-15b16658.js","assets/Header-5eedb324.js"]))),m=i.lazy((()=>n((()=>import("./Title-f2a6626c.js")),["assets/Title-f2a6626c.js","assets/index-9e8840c1.js","assets/index-f4cc4167.css"]))),p=i.lazy((()=>n((()=>import("./Main-c6316d9d.js")),["assets/Main-c6316d9d.js","assets/index-9e8840c1.js","assets/index-f4cc4167.css"]))),x=i.lazy((()=>n((()=>import("./Card-28799800.js")),["assets/Card-28799800.js","assets/index-9e8840c1.js","assets/index-f4cc4167.css"])));function f(){const[t,n]=i.useState([]);return function(){const t=e()}(),i.useEffect((()=>{!async function(){try{const e=await fetch(`/data/mo-data.json?v=${l()}`),t=await e.json();n(t)}catch(e){console.log("error")}}()}),[]),a(c,{title:"Работа методического объединения",children:o(p,{children:[a(m,{children:"Документы"}),o(d,{type:"rows",children:[t.length>0&&t.map(((e,t)=>a(x,{children:o(h,{children:[a("div",{className:"materials-image-box",children:a("img",{src:"/assets/document-file-folder-500x500-728acaeb.jpg",alt:"DOC"})}),o("div",{className:"materials-content-box",children:[a("div",{className:"materials-content-box-title",children:e.title}),a("div",{className:"materials-content-box-actions",children:a("a",{href:e.file,children:"Скачать"})})]})]})},t))),0===t.length&&a("p",{children:"Список пуст"})]})]})})}const h=r.div`
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
//# sourceMappingURL=MoScreen-5a1187d2.js.map
