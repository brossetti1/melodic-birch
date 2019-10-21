export default {
    "type": "document",
    "name": "social",
    "title": "Social Configuration",
    "fields": [
        {
            "type": "boolean",
            "name": "enabled",
            "title": "Enabled",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Section Title",
            "validation": null
        },
        {
            "type": "array",
            "name": "follow_section",
            "title": "Social Media Icons",
            "description": "A list of social media icons",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Icon Title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "icon",
                            "title": "Icon",
                            "description": "Font Awesome Icon",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "link_url",
                            "title": "URL",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Social Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/social.yml"
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