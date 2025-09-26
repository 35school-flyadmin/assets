import{a as o,s as i}from"./index.542724f3.v2025.09.26-14.20.36.js";import{P as e}from"./ContentViewer.8ae02749.v2025.09.26-14.20.36.js";import"./HolidaysTimerLogistics.cdec8585.v2025.09.26-14.20.36.js";import"./Header.c7155494.v2025.09.26-14.20.36.js";function r({children:i,type:e="rows"}){
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
