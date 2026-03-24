import type { ISimplesNode } from "../ISimplesNode.js";
export declare class EmbedNode implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode;
    compile(fragHead: Node, node: ChildNode): void;
}
//# sourceMappingURL=embedNode.d.ts.map