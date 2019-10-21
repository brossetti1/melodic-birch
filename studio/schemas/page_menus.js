export default {
    "type": "object",
    "name": "page_menus",
    "title": "Page Menus",
    "fields": [
        {
            "type": "page_menu_item",
            "name": "main",
            "title": "Main menu item",
            "description": "Main menu item for this page",
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
    ]
}