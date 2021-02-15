import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__artcile">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight"></div>
      <h4>{heading}</h4>
      <p>{subtitle}</p>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newArticle("PAPA React is back", "Top news - 9099 readers")}
      {newArticle("Coronovirus", "Top news - 9099 readers")}
      {newArticle("Tesla hits highss", "Top news - 9099 readers")}
      {newArticle("Crypto", "Top news - 9099 readers")}
      {newArticle("Coronovirus", "Top news - 9099 readers")}
    </div>
  );
};

export default Widgets;
