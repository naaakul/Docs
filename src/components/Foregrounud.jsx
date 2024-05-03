import React, { useRef } from "react";
import Card from "./Card";

function Foregrounud() {

  const ref = useRef(null);

  const data = [
    {
      desc: "QUESTIONS - IMPORTANT",
      filesize: "1.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Completed", tagColor: "green" },
    },
    {
      desc: "Remember to call Sarah about the meeting tomorrow.",
      filesize: "2.2mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Read Chapter 5 of 'The Great Gatsby' Practice guitar chords: G, C, D. ",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Downloading", tagColor: "blue" },
    },
    {
      desc: "--- Meeting Agenda --- 1. Discuss quarterly sales report 2. Review marketing strategies 3. Assign tasks for upcoming project",
      filesize: ".3mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "**Household Chores:** 1. Clean the kitchen and organize pantry shelves. 2. Do laundry and fold clothes. 3. Water the plants in the garden.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    }
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foregrounud;
