export class SimplesParser {
    static parse(content) {
        const parser = new DOMParser();
        return parser.parseFromString(content, "text/xml");
    }
}
//# sourceMappingURL=SimplesParser.js.map