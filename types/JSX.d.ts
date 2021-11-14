declare type JsxHTMLElement = HTMLCollection | Record<never, never>;

declare namespace JSX {
  interface IntrinsicElements {
    div: JsxHTMLElement;
    h1: JsxHTMLElement;
    h2: JsxHTMLElement;
    span: JsxHTMLElement;
  }
  interface ElementClass {
    render: any;
  }
}
