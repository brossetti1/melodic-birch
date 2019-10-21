export default {
    "type": "document",
    "name": "post",
    "title": "Post",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "home_style",
            "title": "Home Thumbnail Style",
            "description": "The style used for the home thumbnail",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "style1",
                    "style2",
                    "style3",
                    "style4",
                    "style5",
                    "style6",
                    "style7"
                ]
            }
        },
        {
            "type": "image",
            "name": "home_img",
            "title": "Home Thumbnail Image",
            "description": "The Image displayed in the home thumbnail on hover",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "excerpt",
            "title": "Excerpt",
            "description": "The text displayed in the home thumbnail on hover",
            "validation": null
        },
        {
            "type": "date",
            "name": "date",
            "title": "Post Date",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "img_src",
            "title": "Content Image",
            "description": "The Image displayed in the content section of the page",
            "validation": null
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Post Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Post URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}