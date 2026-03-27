import type { ISimplesNode } from "./ISimplesNode.js";

export class CompNodeParent {
    protected static compNodes: Record<string,ISimplesNode> = {};

    public static addCompilerNode(name: string, node: ISimplesNode): void {
        this.compNodes[name] = node;
    }
}
