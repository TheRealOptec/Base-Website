import type { ISimplesNode } from "../../../ISimplesNode.js";
import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { NewsNode } from "./newsNode.js";

export class NewsLanguageNode implements ISimplesNode {
    private static instance: NewsLanguageNode|null = null;

    private constructor() {
        NewsNode.addCompilerNode("language", this);
    }

    public static getInstance(): ISimplesNode|null {
        if(this.instance === null) NewsLanguageNode.instance = new NewsLanguageNode();
        return this.instance;
    }

    compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void {
        if(node.textContent !== null) {
            const req = params["req"];
            if(req === undefined) {
                return;
            }
            req["language"] = node.textContent;
        }
        else SimplesCompiler.reportError("No content provided to language tag - content required");
    }
}
