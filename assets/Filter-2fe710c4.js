import{a as e,j as i,s as n}from"./index-72cd84ee.js";function t({items:n=[],active:t="",onChange:o}){return e(a,{children:e(r,{children:n.map(((n,a)=>e(d,{onClick:()=>o&&o(n.value),className:""+(n.value===t?"active":""),children:i("span",{children:["#",n.title]})},a)))})})}const a=n.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin: 30px 0;
    padding: 0 10px;
`,r=n.nav`
    width: 100%;
    display: flex;
    border-radius: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    height: 100%;
    gap: 10px;
    position: relative;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
    }
    @media screen and (max-width: 900px) {
        flex-wrap: wrap;
        width: 100%;
    }
`,d=n.li`
    padding: 1em 20px;
    cursor: pointer;
    width: calc(100% / 4 - 40px);
    display: flex;
    min-height: 70px;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    & > span {
        font-style: normal;
        font-weight: bold;
        font-size: 1.2rem;
        color: #219653;
        width: max-content;
    }

    &.active {
        background: #219653;
        border-radius: 0;
        color: #FFFFFF;
        font-weight: bold;
        border-radius: 5px;
        & > span {
            color: #FFFFFF;
        }
    }

    @media screen and (max-width: 480px) {
        width: calc(100% - 40px);
        &.active {
            border-radius: 5px;
        }
    }
    @media screen and (max-width: 900px){
        width: calc(100% / 3);
    }
`;export{t as default};
//# sourceMappingURL=Filter-2fe710c4.js.map
