import { useState } from "react";
import Display from "./Display.js";

const Main = () => {
  const [content, setContent] = useState([
    {
      id: 1,
      header: "Getting started",
      subheadings: ["Category and Topic", "Format", "Name"],
      textContent: [
        "this is about category and topic",
        "this is about format",
        "this is about name",
      ],
      images: ["getting started 1", "getting started2"],
    },
    {
      id: 2,
      header: "Content",
      subheadings: ["Intro", "Main Content", "Outro"],
      textContent: ["this is intro", "this is main", "this is outro"],
      images: [["content 1"]],
    },
  ]);

  return (
    <div className="content">
      <Display content={content.filter((content) => content.id === 2)} />
    </div>
  );
};

export default Main;
