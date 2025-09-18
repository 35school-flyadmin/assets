import{r as e,j as a,a as i,s as t,_ as n}from"./index-0b0b8bde.js";import r from"./Header-c6f3dcab.js";import{H as d,g as l}from"./HolidaysTimerLogistics-ef888d5f.js";import{u as c}from"./additional-c4f80976.js";function s(t){const n=t.teacher,[r="",d="",l=""]=n.title.trim().split(/\s+/),s=e.useCallback((e=>"MATHEMATICS"===e?"📐 Математика":"INFORMATICS"===e?"💻 Информатика":"PHYSICS"===e?"🧲 Физика":null),[]);return a(o,{children:[i("div",{className:"teacher-avatar-box",children:i("div",{className:"teacher-avatar",children:i("img",{src:c(n.image),alt:"photo"})})}),a("div",{className:"teacher-name-box",children:[i("div",{className:"teacher-name",children:a("p",{children:[r&&i("span",{className:"last-name",children:r}),d&&i("span",{className:"first-name",children:d}),l&&i("span",{className:"middle-name",children:l})]})}),i("div",{className:"teacher-lesson",children:n.types.length>0&&n.types.map(((e,a)=>i("div",{className:`teacher-lesson-item ${e.title}`,children:i("p",{children:s(e.title)})},a)))})]})]})}const o=t.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: white;
    box-shadow: 0 4px 8px 0 #3232470F, 0 4px 4px 0 #32324714;
    border-radius: 8px;
    width: calc((100% - (6 * 24px)) / 7);
    transition: all 0.3s ease;

    @media screen and (max-width: 1450px){
        width: calc((100% - (3 * 24px)) / 4);
    }
    @media screen and (max-width: 1200px){
        width: calc((100% - (2 * 24px)) / 3);
    }
    @media screen and (max-width: 650px){
        width: calc((100% - 24px) / 2);
    }
    @media screen and (max-width: 450px){
        width: calc(100%);
        flex-direction: row;
        gap: 24px;
    }
    @media screen and (max-width: 350px){
        flex-direction: column;
        width: calc(100%);
        gap: 0;
        
    }
    

    & > div.teacher-avatar-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 20px 0;
        @media screen and (max-width: 450px){
            padding: 0 20px;
        }
        @media screen and (max-width: 350px){
            padding: 20px 0;
        }

        & > div.teacher-avatar {
            display: flex;
            aspect-ratio: 1;
            width: 90%;
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            @media screen and (max-width: 450px){
                height: 92px;
                width: 92px;
            }
            @media screen and (max-width: 350px){
                width: 128px;
                height: auto;
                aspect-ratio: 1;
            }

            & > img {
                filter: contrast(1);
                height: 100%;
                width: 100%;
                object-fit: cover;
                transition: all 0.3s ease-in-out;
            }
        }
    }
    
    &:hover > div.teacher-avatar-box > div.teacher-avatar > img {
        transform: scale(1.1);
        filter: contrast(1.1);
    }

    & > div.teacher-name-box {
        display: flex;
        flex-direction: column;
        padding: 20px 0;

        & > div.teacher-name {
            display: flex;
            margin: 0 1em;
            position: relative;
            box-sizing: border-box;
            justify-content: center;

            & > p {
                display: flex;
                flex-direction: column;
                text-align: center;
                margin: 0;
                padding: 0;
                @media screen and (max-width: 450px){
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                }
                
                & > span {
                    font-weight: 500;
                    font-size: clamp(16px, 1vw, 22px);
                    line-height: 120%;
                    letter-spacing: 0;
                    color: #212529;
                    
                    &.first-name {
                        order: 2;
                        color: #1B9E49;
                        font-size: clamp(22px, 1vw, 28px);
                        @media screen and (max-width: 450px){
                            order: 1;
                            width: 100%;
                        }
                    }
                    &.last-name {
                        order: 1;
                        @media screen and (max-width: 450px){
                            order: 3;
                        }
                    }
                    &.middle-name {
                        order: 3;
                        @media screen and (max-width: 450px){
                            order: 2;
                        }
                    }
                }

            }
        }
        
        & > div.teacher-lesson {
            display: flex;
            justify-content: center;
            padding: 20px 0;
            position: relative;
            @media screen and (max-width: 450px){
                padding: 10px 0;
            }
            & > div.teacher-lesson-item {
                display: flex;
                background-color: #2f4858;
                height: 32px;
                justify-content: center;
                align-items: center;
                padding: 0 18px;
                border-radius: 18px;
                @media screen and (max-width: 450px){
                    height: 28px;
                    padding: 0 9px;
                }
                & > p {
                    margin: 0;
                    padding: 0;
                    @media screen and (max-width: 450px){
                        font-size: clamp(15px, 2vw, 22px);
                    }
                }
                
                &.MATHEMATICS {
                    background-color: #A3D5B8;
                    & > p {
                        color: #518366;
                    }
                }
                
                &.INFORMATICS {
                    background-color: #D5A3A3;
                    & > p {
                        color: #7D4B4B;
                    }
                }
                &.PHYSICS {
                    background-color: #A3B5D5;
                    & > p {
                        color: #556687;
                    }
                }
            }
        }
    }
`;function p(e){const a=e.list;return 0===(null==a?void 0:a.length)?null:i(x,{children:a.map(((e,a)=>i(s,{teacher:e},a)))})}const x=t.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 24px;
    box-sizing: border-box;
`,m=e.lazy((()=>n((()=>import("./Filter-9c4dc2a3.js")),["assets/Filter-9c4dc2a3.js","assets/index-0b0b8bde.js","assets/index-f4cc4167.css"])));function h(){var t;const[n,c]=e.useState("ALL"),[s,o]=e.useState([]),x=e.useCallback((()=>{let e=[];return"ALL"!==n&&(e=s.filter((e=>e.types.find((e=>e.title===n))))),"ALL"===n&&(e=s),e.sort(((e,a)=>e.title<a.title?-1:e.title>a.title?1:0))}),[n,s]);return e.useEffect((()=>{!async function(){try{const e=await fetch(`/data/teachers-data.json?v=${l()}`),a=await e.json();o(a.filter((e=>e.active)))}catch(e){console.log("error")}}()}),[]),a("div",{className:"wrapper-content",children:[i(d,{}),i(r,{title:"Учителя"}),a("main",{className:"teachers",children:[i(m,{items:[{value:"ALL",title:"ВСЕ"},{value:"MATHEMATICS",title:"Математики"},{value:"INFORMATICS",title:"Информатики"},{value:"PHYSICS",title:"Физики"}],active:n,onChange:e=>c(e)}),a("div",{className:"teachers-list",children:[i(p,{list:x()}),0===(null==(t=x())?void 0:t.length)&&i("p",{children:"Список пуст"})]})]})]})}export{h as default};
//# sourceMappingURL=TeachersScreen-ad205650.js.map
