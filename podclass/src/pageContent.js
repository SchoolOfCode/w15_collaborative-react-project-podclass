export const listItems = [
    "what's your name?",
    "what's your topic?",
    "I hate Sundays"
    ]

export const contentData = [
//   {
//     id: 0,
//     header: "Getting started",
//     subheadings: ["Category and Topic", "Format", "Name"],
//     textContent: [
//       `this is about category and topic ${listItems[0]}`,
//       "this is about format",
//       `this is about name ${listItems[1]} ${listItems[2]}`,
//     ],
//     images: ["getting started 1", "getting started2"],

//     lists: ["create name for podcast", "make a picture", "record"],
//   },
  {
    id:1,
    header: "Getting started with new data",
    sections: [{key: "1.1",
                subheading:"Category and Topic", 
                textContent: "this is about category and topic" ,
                image: "xx",
                checklist: [{key: "1.1.1", text:"checklist 1.1", selected: false},
                            {key: "1.1.2", text:"checklist 1.2", selected: false}]
                },
                {key: "1.2",
                subheading:"Format", 
                textContent: "this is about format" ,
                image: "yy",
                checklist: [{key: "1.2.1", text:"checklist 1.1", selected: false},
                {key: "1.2.2", text:"checklist 1.2", selected: false}]
                },
                {key: "1.3",
                subheading: "Arshi is amazeballs",
                textContent: "shout-out to Arshi!",
                image: "clapping-hands",
                checklist: [{key: "1.2.1", text:"checklist 1.1"},
                {key: "1.2.2", text:"checklist 1.2"}]
                }
    ]
  },

//   {
//     id: 2,
//     header: "Content",
//     subheadings: ["Intro", "Main Content", "Outro"],
//     textContent: ["this is intro", "this is main", "this is outro"],
//     images: [["content 1"]],
//     lists: ["flowers", "rainbow", "sugar"],
//   },
];

export const titles = [
  // "Go on air!",
  "Before you start",
  "Content",
  "Recording environment",
  "Equipment",
  "Editing the audio",
  "Getting it out there",
  "Marketing",
  "My'PodList'",
];

export const checklistItems = [
"checklist item 1",
"checklist item 2",
"checklist item 3",
"checklist item 4",
];
