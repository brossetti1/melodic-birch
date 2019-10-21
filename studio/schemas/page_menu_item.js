export default {
    "type": "object",
    "name": "page_menu_item",
    "title": "Page Menu Item",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the menu item",
            "validation": null
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
            "name": "identifier",
            "title": "Identifier",
            "description": "The identifier of a menu item could be used as a parent menu of another menu item",
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