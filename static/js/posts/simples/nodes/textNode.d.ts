import type { ISimplesNode } from "../ISimplesNode.js";
export declare class TextNode implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode;
    compile(fragHead: Node, node: Node): void;
}
//# sourceMappingURL=textNode.d.ts.map