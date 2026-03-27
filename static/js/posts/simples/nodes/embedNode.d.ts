import { CompNodeParent } from "../CompNodeParent.js";
import type { ISimplesNode } from "../ISimplesNode.js";
export declare class EmbedNode extends CompNodeParent implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode | null;
    private compileEmbedNode;
    compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void;
}
//# sourceMappingURL=embedNode.d.ts.map