import{a as n}from"./chunk-A4LJI763.js";import"./chunk-CPJJWSXC.js";import{b as o}from"./chunk-C5JGAWJQ.js";import{f as e}from"./chunk-IAMGS6YL.js";import"./chunk-CRNLDV6W.js";import"./chunk-GGCEL3NW.js";var m=n.create("deco-sites/std/actions/vtex/notifyme.ts");function l({productID:s}){let t=o(!1);return e("form",{class:"form-control justify-start gap-2",onSubmit:async a=>{a.preventDefault();try{t.value=!0;let r=a.currentTarget.elements.namedItem("name")?.value,i=a.currentTarget.elements.namedItem("email")?.value;await m({skuId:s,name:r,email:i})}finally{t.value=!1}},children:[e("span",{class:"text-base",children:"Este produto est\xE1 indisponivel no momento"}),e("span",{class:"text-sm",children:"Avise-me quando estiver disponivel"}),e("input",{placeholder:"Nome",class:"input input-bordered",name:"name"}),e("input",{placeholder:"Email",class:"input input-bordered",name:"email"}),e("button",{class:"btn disabled:loading",disabled:t,children:"Enviar"})]})}var d=l;export{d as default};
