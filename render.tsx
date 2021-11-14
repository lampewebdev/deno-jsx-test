export const h = (
  tagNameOrComponent: string,
  props: PropertyDescriptor,
  ...children: JsxHTMLElement[]
) => {
  console.log(tagNameOrComponent, props, children);
};

export default (
  <div>
    <h1>JSX</h1>
    <span>Hello Deno</span>
  </div>
);
