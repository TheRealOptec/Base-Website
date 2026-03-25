import { NewsFromNode } from './nodes/embed/news/newsFromNode.js';
import { NewsNode } from './nodes/embed/news/newsNode.js';
import { NewsQNode } from './nodes/embed/news/newsQNode.js';
import { NewsTopNode } from './nodes/embed/news/newsTopNode.js';
import { EmbedNode } from './nodes/embedNode.js';
import { HNode } from './nodes/hNode.js';
import { PNode } from './nodes/pNode.js';
import { TextNode } from './nodes/textNode.js';

// Literally just initialise all of our nodes
const nodes = [
    // Main nodes
    TextNode.getInstance(),
    PNode.getInstance(),
    HNode.getInstance(),
    EmbedNode.getInstance(),
    // Embed nodes

    // News nodes
    NewsNode.getInstance(),
    NewsQNode.getInstance(),
    NewsFromNode.getInstance(),
    NewsTopNode.getInstance(),
];
