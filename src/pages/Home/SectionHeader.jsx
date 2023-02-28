import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = (props) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-base">{props.paragraph}</p>
      </div>
      <Link
        to={props.link.url}
        className="no-underline text-lg font-medium text-[#219653]"
      >
        {props.link.name}
      </Link>
    </div>
  );
};

SectionHeader.defaultProps = {
  title: "title",
  paragraph: "paragraph",
  link: {
    name: "Link Name",
    url: "#",
  },
};

export default SectionHeader;
