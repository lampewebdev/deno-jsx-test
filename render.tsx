import "./JSX.ts";
// declare namespace JSX {
//   interface IntrinsicElements {
//     [elemName: string]: any;
//   }
//   interface ElementClass {
//     render: any;
//   }
// }

export const h = (tagNameOrComponent: any, props: any, ...children: any) => {
  console.log(tagNameOrComponent, props, children);
};

export default (
  <div>
    <h1>JSX</h1>
    <span>Hello Deno</span>
  </div>
);
