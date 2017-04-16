export interface ICreateElement {
  createElement: Function
}

export abstract class CreateElementRef {
  abstract get nativeGlobal(): ICreateElement;
}

export class BrowserCreateElementRef extends CreateElementRef {
  get nativeGlobal(): ICreateElement {
    return document as ICreateElement;
  }
}

export class NodeCreateElementRef extends CreateElementRef {
  get nativeGlobal(): ICreateElement {
    return {
      createElement: ()=>{}
    } as ICreateElement;
  }
}
