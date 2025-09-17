import{u as e,r as t,a as o,j as r,s as i}from"./index-d5577b2c.js";import{H as s}from"./HolidaysTimerLogistics-08ea8e91.js";const n="viewer_data_object";function a(){const r=e();return t.useEffect((()=>{null===sessionStorage.getItem(n)&&r(-1)}),[]),JSON.parse(sessionStorage.getItem(n)),o(l,{})}function l(){const t=e(),{title:i}=JSON.parse(sessionStorage.getItem(n));return r(c,{children:[o(s,{}),o("div",{className:"title",children:i}),o("div",{className:"action",children:o("button",{onClick:()=>{sessionStorage.removeItem(n),t(-1)},children:"Закрыть"})})]})}const c=i.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  background-color: #2f4858;
  height: 70px;
  justify-content: center;
  align-items: center;

  & > div.title {
    display: flex;
    margin-left: 1em;
    font-size: 20px;
    color: #FFFFFF;
    flex: 12;
  }

  & > div.action {
    display: flex;
    flex: 2;
    flex-direction: row;
    justify-content: flex-end;

    & > button {
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
`;export{n as VIEWER_DOCUMENT_SESSION_STORAGE,a as default};
//# sourceMappingURL=ViewerDocumentScreen-07aa7905.js.map
