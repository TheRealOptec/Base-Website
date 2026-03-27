import type { ISimplesNode } from "../../../ISimplesNode.js";
import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { NewsNode } from "./newsNode.js";

export class NewsFromNode implements ISimplesNode {
    private static instance: NewsFromNode|null = null;

    private constructor() {
        NewsNode.addCompilerNode("from", this);
    }

    public static getInstance(): ISimplesNode|null {
        if(this.instance === null) NewsFromNode.instance = new NewsFromNode();
        return this.instance;
    }

    compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void {
        if(node.textContent !== null) {
            const req = params["req"];
            if(req === undefined) {
                return;
            }
            req["from"] = node.textContent;
        }
        else SimplesCompiler.reportError("No content provided to from tag - content required");
    }
}
