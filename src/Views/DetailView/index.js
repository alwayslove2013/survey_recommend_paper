import React from "react";

const DetailView = React.memo(({ selectedNode }) => {
  const { id, data = {}, cited_list = [] } = selectedNode;
  // console.log(id, data, cited_list);
  return (
    <div className="DetailView">
      <div>title: {data.title}</div>
      <div>doi: {data.doi || id}</div>
      <div>author: {data.author}</div>
      <div>year: {data.year}</div>
    </div>
  );
});

export default DetailView;
