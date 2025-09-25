import{a as o,s as i}from"./index.88f42fb9.v2025.09.25-13.39.37.js";import{P as e}from"./ContentViewer.08f289c6.v2025.09.25-13.39.37.js";import"./HolidaysTimerLogistics.53be4b16.v2025.09.25-13.39.37.js";import"./Header.d4b92287.v2025.09.25-13.39.37.js";function r({children:i,type:e="rows"}){
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
