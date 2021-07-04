// import { useState } from "react";
// import Display from "../Display/index.js";
// import Button from "./Button";

// const Main = () => {
//   const [content, setContent] = useState([
//     {
//       id: 1,
//       header: "Getting started",
//       subheadings: ["Category and Topic", "Format", "Name"],
//       textContent: [
//         "this is about category and topic",
//         "this is about format",
//         "this is about name",
//       ],
//       images: ["getting started 1", "getting started2"],
//     },
//     {
//       id: 2,
//       header: "Content",
//       subheadings: ["Intro", "Main Content", "Outro"],
//       textContent: ["this is intro", "this is main", "this is outro"],
//       images: [["content 1"]],
//     },
//   ]);

//   const [contentState, setContentState] = useState("");

//   function changeState(key) {
//     setContentState(key);
//     console.log("hello", contentState);
//   }

//   return (
//     <div className="content">
//       <Button identity={changeState} identityNumber={1} />
//       <Button identity={changeState} identityNumber={2} />
//       <Display
//         content={content.filter((content) => content.id === contentState)}
//       />
//     </div>
//   );
// };

// export default Main;
