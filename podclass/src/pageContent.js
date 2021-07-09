import Button from "./components/Button";
export const listItems = [
    "what's your name?",
    "what's your topic?",
    "I hate Sundays"
    ]
export let searchItem = "";

export const contentData = [
  {
    id:1,
    header: "Before you start",
    sections: [{key: "1.1",
                subheading:"Category and Topic", 
                textContent: "The first thing to think about when looking to create your podcast is your topic, or subject. \n\n Pick something related to your interests, hobbies or anything that you’re passionate about. This way the conversation will be sure to flow… \n\nIf you are feeling stuck, maybe use Quora or Twitter Explore to spark up topic ideas. Twitter Explore includes trending topics, which might be handing when thinking about attracting new audiences. \n\nAnother approach is to think about your “USP” (unique selling point).  What topic might help you stand out from what is already on offer?" ,
                image: "",
                checklist: [{key: "1.1.1", text:"decide topic", selected: false},
                            {key: "1.1.2", text:"checkout potential ideas", selected: false},
                            {key: "1.1.3", text:"checkout popular podcasts", selected: false}
                        ]
                },
                {key: "1.2",
                subheading:"Format", 
                textContent: "Once you've chosen your topic, think about the way in which you want to deliver your podcast.  For example \n\n\u0009\u2022 Solo podcast \n\u0009\u0009\u2713 easiest format to get going with \n\u0009\u0009\u2717 difficult to script for longer lengths  \n\n\u0009\u2022 Co-hosted podcast - you and somebody else, chatting about your chosen topic \n\u0009\u0009\u2713 can have a great conversational vibe \n\u0009\u0009\u2717 can be tricky to get the flow right  \n\n\u0009\u2022 Interview style - you and a guest, where you ask them questions you think will interest your audience \n\u0009\u0009\u2713 great for engaging your audience and keeping it fresh \n\u0009\u0009\u2717 needs a lot of planning and co-ordinating" ,
                image: "",
                checklist: [{key: "1.2.1", text:"decide on podcast format", selected: false}]
                },
                {key: "1.3",
                subheading: "Your podcast name",
                textContent: "Already have an idea for your podcast name? Enter it here: \n\nMake sure your chosen podcast name is \n\n\u0009\u2022 easy to pronounce \n\u0009\u2022 easy to type into a search engine (no more than 20 characters \n\u0009\u2022 easy to spell \n\u0009\u2022 isn't already taken! \n\nYou might also want to check if the domain name (website address) of your podcast name is available - think future marketing!",
                image: "",
                checklist: [{key: "1.3.1", text:"decide on my podcast name", selected:false},
                            {key: "1.3.2", text:"check name is available", selected: false},
                            {key: "1.3.3", text:"check domain name is available", selected:false}]
                }
    ]
  },
  {
    id:2,
    header: "Content",
    sections: [{key: "2.1",
                subheading:"Intro", 
                textContent: "Grab their attention!  Up to approx 30 seconds in length is ideal. \n\nYour intro is a trailer of what the listener can expect from your podcast.  Work with the idea that everyone is brand new to the show.  Tell your listeners \n\n\u0009\u2713 who you are: introduce yourself \n\u0009\u2713 what the show is about \n\u0009\u2713 what will be happening in the episode \n\u0009\u2713 if you have guests, who they will be hearing from. \n\nRemember to mention the name of your show! \n\nGive a call to action - this is where you invite your listeners to follow you/like you on social media. \n\nThink about theme music here.  Ideally you want to find free-to-use audio.  You can do a search here:" ,
                image: "",
                checklist: [{key: "2.1.1", text:"write the intro", selected: false},
                            {key: "2.1.2", text:"decide on theme music", selected: false}]
                },
                {key: "2.2",
                subheading:"Content", 
                textContent: "This is the main part of your podcast.  Plan beforehand what you want to say: \n\n\u0009\u2013 Are you going to have a script? \n\u0009\u2013 Are you going to work from a list of points/comments you want to make? \n\u0009\u2013 Are you going to free-style?  Think about how you will know when you've covered everything. \n\nWriting a script or having a list of talking points is probably more important if you are co-hosting to make sure your podcast flows. \n\nIf you are having guests, think about a list of questions (and follow-ups).  Are you going to give them the questions beforehand?" ,
                image: "",
                checklist: [{key: "2.2.1", text:"write a script", selected: false},
                            {key: "2.2.2", text:"plan talking points", selected: false},
                            {key: "2.2.3", text:"plan guest questions", selected: false}]
                },
                {key: "2.3",
                subheading: "Outro",
                textContent: "this should be a similar length to your intro.  Good podcasts include \n\n\u0009\u2713 a recap of what your podcast episode was about \n\u0009\u2713 thanks to your listeners \n\u0009\u2713 a reminder of how they can connect with you on social media \n\u0009\u2713 advertises your next podcast! \n\nIf you've included theme music in your intro, play it in your outro too.",
                image: "",
                checklist: [{key: "2.3.1", text:"write the outro", selected:false}]
                }
    ]
  },
  {
    id:3,
    header: "Recording Environment",
    sections: [{key: "3.1",
                subheading:"Category and Topic", 
                textContent: "The ultimate place to record is in a studio but we don't all have access to one....not to worry, you can create great podcasts from your home, an office space, or anywhere - as long as the environment is right! \n\nWhen working out where you are going to record your podcast, think about \n\n\u0009\u2013 making sure there are no echos or background noise \n\u0009\u2013 you have space for your equipment \n\u0009\u2013 how you can stop any potential interruptions (your mate, your cat, your phone...) \n\u0009\u2013 making sure you're comfortable \n\u0009\u2013 if it's video, what can people see in the background?" ,
                image: "",
                checklist: [{key: "3.1.1", text:"choose location", selected: false},
                            {key: "3.1.2", text:"check location set-up", selected: false}]
                }
              ]         
  },
  {
    id:4,
    header: "Equipment",
    sections: [{key: "4.1",
                subheading:"", 
                textContent: "You can make a basic podcast using just your phone!  All you need to do is make sure you \n\n\u2022 know how to record \n\u2022 have enough charge! \n\n However, for better quality, you still don't need to break the bank on equipment.  To start, all you need is your computer/laptop and a microphone." ,
                image: "",
                checklist: [{key: "", text:"", selected: false}]
                },
                {key: "4.2",
                subheading:"Computer", 
                textContent: "Make sure you know how to record, and how to access your recordings.  You will have pre-installed software to do this, usually through your camera app.  You can also record via Zoom or other virtual meeting software." ,
                image: "",
                checklist: [{key: "4.2.1", text:"checkout recording software on my computer", selected: false}]
                },
                {key: "4.3",
                subheading: "Microphones",
                textContent: "You can use your computer's built in microphone but the easiest way to get a higher quality sound is to use a USB microphone. \n\n You can search for Amazon examples here:",
                image: <Button className="nav-button" />,
                checklist: [{key: "4.3.1", text:"get USB microphone", selected: false}]
                },
                {key: "4.4",
                subheading: "Headphones",
                textContent: "Headphones can prevent many retakes….closed-back headphones are what you want to use for recording.  Avoid open-back headphones as your microphone will pick up the sound from them. \n\n You can search for Amazon examples here:",
                image: "",
                checklist: [{key: "4.4.1", text:"get headphones", selected:false}]
                },
                {key: "4.5",
                subheading: "Audio Interface",
                textContent: "This is the “bridge” between your microphone and your computer. It converts the analogue signal from the mic into a digital signal that a computer can use.  Not essential but good for sound quality. \n\n You can search for Amazon examples here:",
                image: "",
                checklist: [{key: "4.5.1", text:"get audio interface", selected:false}]
                },
                {key: "4.6",
                subheading: "Mixer",
                textContent: "Similar to the audio interface, but a mixer gives more control over levels,inputs, outputs and more.  (More expensive versions of audio interfaces have in-built mixers). \n\n You can search for Amazon examples here:",
                image: "",
                checklist: [{key: "4.6.1", text:"get mixer", selected:false}]
                }
    ]
  },
  {
    id:5,
    header: "Editing the audio",
    sections: [{key: "5.1",
                subheading:"", 
                textContent: "After recording your first Podcast you might want to consider making some improvements. \n\nWe are not talking about anything crazy, just maybe your file could use some adjustments like removing any unwanted mistakes, noise or just simply to bling it up a little with sound effects! To do that, obviously you will need the right tools - and that's where the editing software comes in. \n\nEvery Podcaster wants to produce quality episodes. However, when considering which editing software to use you might want to think about your experience level. Naturally, to start with you wouldn’t want to use anything that's too complicated and that would take ages to learn how to use, or to spend money on a fancy, expensive software with many features that you’ll probably never use. Instead, as a beginner, you should go with something simple, easy to use and budget friendly." ,
                image: "",
                checklist: [{key: "", text:"", selected: false}]
                },
                {key: "5.2",
                subheading:"Audio", 
                textContent: "If you want to go with the traditional vibe and record your Podcast in an audio format then: \n\n\u0009\u2013 For Windows: Audacity is a free, easy-to-use, multi-track audio editor and recording application software. \n\u0009\u2013 For Mac: GarageBand is ideal! You could describe it as a line of digital audio workstations for macOS, iPadOS, and iOS devices that allows users to create music or podcasts.  It’s already installed on your device." ,
                image: "",
                checklist: [{key: "5.2.1", text:"download Audacity", selected: false},
                            {key: "5.2.1", text:"checkout GarageBand", selected: false}]
                },
                {key: "5.3",
                subheading: "Video",
                textContent: "If you want to be slightly more ambitious and record your podcasts in a video format then you can simply record on your phone or computer and use the pre-installed video editors. \n\nHowever, for a better quality product check out DaVinci Resolve.  This free to use software combines editing, color correction, visual effects, motion graphics and audio post production all in one tool!",
                image: "",
                checklist: [{key: "5.3.1", text:"checkout my pre-installed video editor", selected: false},
                            {key: "5.2.1", text:"download DaVinici Resolve", selected: false}]
                }
    ]
  },
  {
    id:6,
    header: "Getting it out there",
    sections: [{key: "6.1",
                subheading:"Publishing Your Podcast", 
                textContent: "Getting your podcast out there can be tricky as you need to upload it to a hosting service, and publish. \n\nAnchor is one of the very few applications that provides both a hosting services for your podcast and publishes your podcast to the top 3 directories (Apple, Google and Spotify) as well as many others. Anchor will step you through the whole process." ,
                image: "",
                checklist: [{key: "6.1.1", text:"download Anchor", selected: false}]
                }
    ]
  },
  {
    id:7,
    header: "Marketing",
    sections: [{key: "7.1",
                subheading:"The basics", 
                textContent: `\u2714 Consider your audience \nWhere can you find your listeners, digitally or even physically?  That’s where you want them to be able to find your podcast. \n\n \u2714 Cross promotion is a great way to gain exposure. \nBe a guest on another podcast that has similar audiences or bring on a guest from another podcast who can bring their audience . Alternatively you can invite specialists on your podcast topic to join you. \n\n\u2714 Be consistent. \nThis really matters. Host of the podcast re:Posted, Andrew Keller, says “If your listeners never know if you are going to be there or not they’ll stop checking” \n\n\u2714 Use social media \n Which ever social media platform you decide to use, be sure to keep your audience informed.  Write posts so your listeners know what they can expect from the next episode.  Ask for contributions (i.e voice notes, questions) that can be featured in your podcasts.`   ,
                image: "",
                checklist: [{key: "7.1.1", text:"plan podcast advertising", selected: false},
                            {key: "7.1.2", text:"plan before and after podcast social media posts", selected: false}]
                },
                {key: "7.2",
                subheading:"YouTube", 
                textContent: "YouTube is a great way to market your podcast. The visual aspect allows you to grab the audience with an extra sense to podcasting alone - sight.  Also , thanks to the YouTube comments , you are able to interact with your audience and get feedback from them which is vital for growth." ,
                image: "",
                checklist: [{key: "7.2.1", text:"create YouTube account", selected: false}]
                },
                {key: "7.3",
                subheading: "Cover Art",
                textContent: "Cover art is very important as it’s the first thing your listeners will see when searching for your podcast . Plus, the better your artwork, the more likely you are to be featured in the directories.  \n\nCanva is a great, free-to-download  tool that can help you create a striking visual.  However you create it, make sure your image is of good quality (min 1400x1400 pixel resolution).",
                image: "",
                checklist: [{key: "7.3.1", text:"create cover artwork", selected: false}]
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
];

export const checklistItems = [
"checklist item 1",
"checklist item 2",
"checklist item 3",
"checklist item 4",
];
