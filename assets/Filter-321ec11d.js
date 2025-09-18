import{a as e,j as i,s as a}from"./index-9e8840c1.js";function n({items:a=[],active:n="",onChange:l}){return e(t,{children:e(r,{children:a.map(((a,t)=>e(o,{onClick:()=>l&&l(a.value),className:""+(a.value===n?"active":""),children:i("span",{children:["#",a.title]})},t)))})})}const t=a.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin: 30px 0;
`,r=a.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 10px;
    position: relative;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`,o=a.li`
    cursor: pointer; 
    max-width: calc(100% / 4 - 48px);
    width: auto;
    padding: 0 24px;
    display: flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    border-radius: 24px;
    & > span {
        font-style: normal;
        font-weight: bold;
        font-size: 1.2rem;
        color: #219653;
    }

    &.active {
        background: #219653;
        color: #FFFFFF;
        font-weight: bold;
        & > span {
            color: #FFFFFF;
        }
    }

    @media screen and (max-width: 1000px) {
        max-width: calc(100% / 3 - 48px);
    }
    @media screen and (max-width: 800px) {
        max-width: calc(100% / 2 - 48px);
    }
    @media screen and (max-width: 600px) {
        max-width: calc(100% - 48px);
        flex-wrap: wrap;
    }
`;export{n as default};
//# sourceMappingURL=Filter-321ec11d.js.map
