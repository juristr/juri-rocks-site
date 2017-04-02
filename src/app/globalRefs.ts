export interface MyGlobal {
  createElement: Function
}

export abstract class GlobalRef {
  abstract get nativeGlobal(): MyGlobal;
}

export class BrowserGlobalRef extends GlobalRef {
  get nativeGlobal(): MyGlobal { return document as MyGlobal; }
}
export class NodeGlobalRef extends GlobalRef {
  get nativeGlobal(): MyGlobal { return { createElement: ()=>{} } as MyGlobal; }
}
