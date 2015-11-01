/// <reference path="../virtual-dom/virtual-dom.d.ts" />
/// <reference path="../baconjs/baconjs.d.ts" />

declare function attach<E>(vtreeStream: Bacon.EventStream<E, VirtualDOM.VNode>): {
    to: (parentElement: Element) => void;
};

declare module "bacon-dom" {
    export = attach;
}
