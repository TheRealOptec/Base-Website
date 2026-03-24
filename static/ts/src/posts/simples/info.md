# Simples Documentation
Simples is a language used to build posts. It can be used to incorporate design elements, images and API interfaces into posts. Simples uses XML to denote specific key ideas for building posts:

# Element

## Paragraph

To define a paragraph we use **\<p\>** tags. Any text, or other elements, between **\<p\>** tags will be within the paragraph.

## Header

To define a header we use **\<h\>** tags. This defines a top-level header - as of current, there is no way to define lower levels of header. 

# API
To handle api related tasks, we use the **\<embed\>** tag. The **\<embed\>** will not display any content on the post - thus it can be placed almost anywhere. However, the **\<embed\>** tag must be placed somewhere that would normally display text - eg an **\<embed\>** tag may not be placed within another **\<embed\>** tag. Within the **\<embed\>** tag, there are other specific "embed tags" which provide information to the backend for specific API calls. A list of supported embed options is shown below.

## Embed Options

### News
Major news headlines and articles can be embedded with the use of the **\<news\>** embed tag. This tag should not contain any content within it. Instead, API call arguments are specified in the tag's attributes.

#### News Options