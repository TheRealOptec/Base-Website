import { SimplesParser } from './SimplesParser.js';
export class SimplesCompiler {
    static compile(content) {
        const frag = SimplesCompiler.interpretXML(document.createDocumentFragment(), SimplesParser.parse(content));
        return frag;
    }
    static interpretXML(frag, xml) {
        return SimplesCompiler.interpretNodeList(frag, xml.documentElement.childNodes);
    }
    static interpretNodeList(frag, nodes) {
        for (let node of nodes) {
            if (node.hasChildNodes())
                frag = this.interpretNodeList(frag, node.childNodes);
            else
                console.log(node.nodeName);
        }
        return frag;
    }
}
SimplesCompiler.compile("<a><b></b><b></b><a><c></c></a></a>");
//# sourceMappingURL=SimplesCompiler.js.map