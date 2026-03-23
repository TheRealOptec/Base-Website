
export class SimplesParser {
    public static parse(content: string): Document {
        const parser: DOMParser = new DOMParser();
        return parser.parseFromString(content, "text/xml");
    }
}