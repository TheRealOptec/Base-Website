import type { ISimplesNode } from "../../../ISimplesNode.js";
import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { NewsNode } from "./newsNode.js";

export class NewsQNode implements ISimplesNode {
    private static instance: NewsQNode|null = null;

    private constructor() {
        NewsNode.addCompilerNode("q", this);
    }

    public static getInstance(): ISimplesNode|null {
        if(this.instance === null) NewsQNode.instance = new NewsQNode();
        return this.instance;
    }

    compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void {
        if(node.textContent !== null) {
            const req = params["req"];
            if(req === undefined) {
                return;
            }
            req["q"] = node.textContent;
        }
        else SimplesCompiler.reportError("No content provided to q tag - content required");
    }
}
