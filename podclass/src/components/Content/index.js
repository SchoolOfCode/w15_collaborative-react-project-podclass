import React from "react";
import Subheading from "./Subheading";
import Text from "./Text";
// import {titles} from "../src/pageContent.js";
// import List from "./List";

function Content (){

    const titles = [
        "Go on air!",
        "Before you start",
        "Content",
        "Recording environment",
        "Equipment",
        "Editing the audio",
        "Getting it out there",
        "Marketing",
        "My'PodList'"
    ];

    return (
    <div>
    {titles.map(
        (subheading) => (subheading = <Subheading key={subheading} subheadingName={subheading} />)
      )}
      {titles.map(
        (text) => (text = <Text key={text} textContent={text} />)
      )}
    </div>
    )
}

export default Content;