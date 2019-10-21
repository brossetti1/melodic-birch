export default {
    "type": "document",
    "name": "contact",
    "title": "Contact Configuration",
    "fields": [
        {
            "type": "boolean",
            "name": "enabled",
            "title": "Enabled",
            "description": "Displays the section in the site footer",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Section Title",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Contact Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/contact.yml"
                ]
            }
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
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}