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
Major news headlines and articles can be embedded with the use of the **\<news\>** embed tag. The arguments for an API call are contained within the internal tags (these are specific to specific APIs).

#### q
The **\<q\>** option specifies the search query for news articles.

#### from
The **\<from\>** option specifies the date after which news article should be taken from. This api is free and so this date is limited to about half a month ago - this may cause issues with posts but it's not important. Dates should be in yyyy-mm-dd format. 

#### language
The **\<language\>** option specifies the language the article should be in - this will likely be set to **en** for English.

#### sortBy
The **\<sortBy\>** option specifies how to the articles should be sorted - I'll list the available options for this later. 

#### top
The **\<top\>** option specifies how many articles should be displayed - by default this will be set to display every single article. 