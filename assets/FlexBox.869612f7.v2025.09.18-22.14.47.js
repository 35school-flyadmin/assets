import{a as o,s as i}from"./index.a9ab95a3.v2025.09.18-22.14.47.js";import{P as e}from"./ContentViewer.f9f7bd36.v2025.09.18-22.14.47.js";import"./HolidaysTimerLogistics.e31ef7d2.v2025.09.18-22.14.47.js";import"./Header.e747d351.v2025.09.18-22.14.47.js";function r({children:i,type:e="rows"}){
return o("columns"===e?n:"rows"===e?s:t,{children:i})}r.propTypes={type:e.oneOf(["rows","columns"])};const t=i.div`
  display: flex;
  position: relative;
  width: 100%;
`,s=i(t)`
  flex-direction: row;
  width: auto;
  flex-wrap: wrap;
`,n=i(t)`
  flex-direction: column;
  width: 100%;
`;export{r as default};
