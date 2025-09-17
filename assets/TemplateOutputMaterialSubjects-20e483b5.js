import{s as i,j as e,a as t,F as a,r as n}from"./index-2d42a258.js";import{P as r}from"./ContentViewer-ae44b344.js";import{g as l}from"./HolidaysTimerLogistics-93df2f41.js";import d from"./Filter-648fc630.js";import{u as s}from"./additional-c4f80976.js";import{c as o}from"./classNames-3eab2e4d.js";function c(i){var a;const{title:n,description:r,image:l,link:d,file:c}=i;return e(p,{children:[t("div",{className:"wallpaper",children:t("div",{className:"image",children:t("img",{src:s(l),alt:n})})}),e("div",{className:"content",children:[(null==n?void 0:n.length)>0&&t("div",{className:"title",children:n}),t("div",{className:o("description",0===(null==r?void 0:r.length)&&"disabled"),children:r}),e("div",{className:"actions",children:[d&&t("a",{href:d,target:"_blank",children:"Перейти"}),c&&t("a",{href:c,download:`${n}.${null==(a=null==c?void 0:c.split("."))?void 0:a.at(-1).trim()}`,children:"Скачать"})]})]})]})}c.propTypes={title:r.string.isRequired,description:r.string,image:r.string.isRequired,link:r.string,file:r.string};const p=i.div`
    display: flex;
    background-color: #FFFFFF;
    position: relative;
    width: calc(100% - 2px);
    flex-direction: column;
    flex: 1;
    border-radius: 6px;
    transition: all 0.3s ease;
    border: 1px solid #E1E1E1;
    align-items: stretch;
    &:hover {
        box-shadow: 3px 3px 5px rgba(23, 23, 23, 0.1);
    }
    &:hover > div.wallpaper > div.image > img {
        transform: scale(1.1);
    }
    & > div.wallpaper {
        display: flex;
        position: relative;
        width: 100%;
        flex-direction: column;
        margin-bottom: 10px;
        height: 160px;

        & > div.image {
            display: flex;
            position: relative;
            width: 100%;
            max-height: 160px;
            border-radius: 3px 3px 0 0;
            border-bottom: 3px solid rgb(33, 150, 83);
            overflow: hidden;

            & > img {
                display: block;
                width: 100%;
                height: 160px;
                object-fit: cover;
                border-radius: 3px 3px 0 0;
                transition: transform 0.3s ease;
            }

            &::after {
                display: flex;
                content: " ";
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background: linear-gradient(135deg, rgba(195, 236, 82, 0.1) 0%, rgba(11, 162, 157, 0.3) 100%);
            }
        }

    }

    & > div.content {
        flex-grow: 1;
        width: calc(100% - 2em);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 1em 1em;

        & > div.title {
            margin-top: 10px;
            margin-bottom: 15px;
            font-weight: 500;
            color: #219653;
            font-size: 18px;
            text-align: center;
        }

        & > div.description {
            width: 100%;
            margin-bottom: 10px;
            flex-grow: 1;
            font-size: 14px;
            color: #333;
            text-align: justify;
            word-wrap: break-word;

            &.disabled {
                visibility: hidden;
            }
        }

        & > div.actions {
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: flex-end;

            & > a {
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
`;function x({items:i,title:a}){return e(m,{children:[t(h,{children:t("h2",{children:a})}),e(f,{children:[i.length>0&&i.map(((i,e)=>t(g,{children:t(c,{title:i.title,image:i.image,description:i.description,link:"LINK"===i.link.type&&i.link.url||"",file:"FILE"===i.link.type&&i.link.url||""})},i.title+"__"+e))),0===i.length&&t("p",{children:"Список пуст"})]})]})}x.propTypes={items:r.array,title:r.string};const m=i.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: calc(100% - 40px);
    margin: 0 auto 20px auto;
    max-width: 1600px;
    padding: 0 20px;
    
    @media screen and (max-width: 319px) {
        
    }
    @media screen and (max-width: 480px) and (min-width: 320px) {
        
    }
    @media screen and (max-width: 767px) and (min-width: 481px) {
       
    }
    @media screen and (max-width: 1024px) and (min-width: 768px) {
   
    }
    @media screen and (max-width: 1199px) and (min-width: 1025px) {
     
    }
    @media screen and (max-width: 1919px) and (min-width: 1200px) {  ;
        
    }
    @media screen and (min-width: 1920px) {
    }
`,h=i.div`
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    & > h2 {
        font-size: 26px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #232323;
        padding: 0;
        margin: 5px 0 20px;

        &::before,
        &::after
        {
            display: flex;
            height: 6px;
            width: 6px;
            background: rgb(33, 150, 83);
            content: " ";
            border-radius: 5px;
        }
    }
`,f=i.div`
    display: flex;
    position: relative;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
`,g=i.div`
    display: flex;
    flex-direction: column;
    position: relative;
    flex-basis: calc(100% - calc(20px * 0 / 1));
    align-items: stretch;
    @media screen and (max-width: 319px) {
        flex-basis: calc(100% - calc(20px * 0 / 1));
    }
    @media screen and (max-width: 480px) and (min-width: 320px) {
        flex-basis: calc(100% - calc(20px * 0 / 1));
    }
    @media screen and (max-width: 767px) and (min-width: 481px) {
        flex-basis: calc(100% / 2 - calc(20px * 1 / 2));
    }
    @media screen and (max-width: 1024px) and (min-width: 768px) {
        flex-basis: calc(100% / 3 - calc(20px * 2 / 3));
    }
    @media screen and (max-width: 1199px) and (min-width: 1025px) {
        flex-basis: calc(100% / 4 - calc(20px * 3 / 4));
    }
    @media screen and (max-width: 1919px) and (min-width: 1200px) {
        flex-basis: calc(100% / 4 - calc(20px * 3 / 4));
    }
    @media screen and (min-width: 1920px) {
        flex-basis: calc(100% / 5 - calc(20px * 4 / 5));
    }
`;function u(i){const{jsonPath:r}=i,[s,o,c,p,m,h]=function(i){const[e,t]=n.useState(!0),[a,r]=n.useState(),[d,s]=n.useState({}),[o,c]=n.useState([]),[p,x]=n.useState([]);function m(i){i!==a&&r(i)}n.useEffect((()=>{async function e(){try{t(!0);const e=await fetch(`${i}?v=${l()}`),a=await e.json();s(a),c(Object.keys(a).map((i=>({value:i,title:null==a?void 0:a[i].title}))))}catch(e){console.log("error")}finally{setTimeout((()=>t(!1)),300)}}i&&e()}),[i]),n.useEffect((()=>{var i;o.length>0&&r(null==(i=o[0])?void 0:i.value)}),[o]),n.useEffect((()=>{Object.keys(d).length>0&&a&&x(null==d?void 0:d[a].items)}),[d,a]);const h=n.useCallback((()=>{var i;return null==(i=o.find((i=>i.value===a)))?void 0:i.title}),[o,a]);return[p,o,a,h,m,e]}(r);return h?t(w,{children:t("img",{src:"/images/loader.svg",alt:"loading"})}):e(a,{children:[t(d,{items:o,active:c,onChange:m}),t(x,{title:p(),items:s})]})}const w=i.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    align-items: center;
`;u.propTypes={jsonPath:r.string.isRequired};export{u as T};
//# sourceMappingURL=TemplateOutputMaterialSubjects-20e483b5.js.map
