module.exports = {
    order: 6,
    status: "wip",
    context: {
        caption: "Members of the party.",
        captionSide: "top",
        columnHeaders: [
            "Name",
            "E-mail",
            "Role"
        ],
        rowHeaders: [],
        records: [
            [
                "Bilbo Baggins",
                "bilbo.baggins@hotmail.com",
                "Rogue"
            ],
            [
                "Gandalf the Grey",
                "gandalf@icloud.com",
                "Wizard"
            ],
            [
                "Thorin Oakenshield",
                "oakenshield@gmail.com",
                "Fighter"
            ]
        ]
    },
    variants: [
        {
            name: "bottom-caption",
            label: "Bottom Caption",
            context: {
                captionSide: "bottom"
            }
        },
        {
            name: "row-headers",
            label: "Row Headers",
            context: {
                caption: "First quarter revenue and expenses.",
                captionSide: "top",
                columnHeaders: [
                    "",
                    "Revenue",
                    "Expenses",
                    "Net Income"
                ],
                rowHeaders: [
                    "January",
                    "February",
                    "March"
                ],
                records: [
                    [
                        "1800.00",
                        "1375.00",
                        "425.00"
                    ],
                    [
                        "2100.00",
                        "1675.00",
                        "425.00"
                    ],
                    [
                        "2250.00",
                        "1375.00",
                        "875.00"
                    ]
                ]
            }
        }
    ]
};
