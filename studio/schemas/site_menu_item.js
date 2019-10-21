export default {
    "type": "object",
    "name": "site_menu_item",
    "title": "Site Menu Item",
    "fields": [
        {
            "type": "string",
            "name": "identifier",
            "title": "Identifier",
            "description": "The identifier of a menu item could be used as a parent menu of another menu item",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the menu item",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "url",
            "title": "URL",
            "description": "The URL the menu item links to",
            "validation": Rule => Rule.required()
        },
        {
            "type": "number",
            "name": "weight",
            "title": "Weight",
            "description": "Position for sorting",
            "validation": Rule => Rule.integer()
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
                    "object"
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