import{a as e,j as i,s as t}from"./index-2d42a258.js";function n({items:t=[],active:n="",onChange:d}){return e(a,{children:e(r,{children:t.map(((t,a)=>e(o,{onClick:()=>d&&d(t.value),className:""+(t.value===n?"active":""),children:i("span",{children:["#",t.title]})},a)))})})}const a=t.div`
    display: flex;
    width: calc(100% - 20px);
    justify-content: center;
    flex-direction: row;
    position: relative;
    margin: 30px 0;
    padding: 0 10px;
`,r=t.nav`
    display: flex;
    border-radius: 10px;
    flex-direction: row;
    list-style: none;
    width: auto;
    gap: 10px;
    position: relative;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
    }
`,o=t.li`
    padding: 1em 20px;
    cursor: pointer;
    width: calc(100% - 40px - 10px * 3 / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease-in-out;
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
`;export{n as default};
//# sourceMappingURL=Filter-648fc630.js.map
