export default {
    "type": "document",
    "name": "header",
    "title": "Header Configuration",
    "fields": [
        {
            "type": "image",
            "name": "logo_img_src",
            "title": "Header Logo",
            "description": "The logo displayed On the upper left side of the page header",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Header Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/header.yml"
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