import React, { useEffect,  useState } from "react";
import Story from "./Story";
import { getStories } from "../functions";
const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(getStories());
  }, []);

  return (
    <div className="flex items-center gap-2 mt-2 overflow-x-scroll  room__scrollbar ">
      {stories.map((story,id) => (
        <Story
        key={id}
          name={story.name}
          storyImage={story.storyImage}
          userImage={story.userImage}
        />
      ))}
    </div>
  );
};

export default Stories;
