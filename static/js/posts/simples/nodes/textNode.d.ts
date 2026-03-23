import type { ISimplesNode } from "../ISimplesNode.js";
export declare class TextNode implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode;
    compile(frag: DocumentFragment, node: ChildNode): DocumentFragment;
}
//# sourceMappingURL=textNode.d.ts.map