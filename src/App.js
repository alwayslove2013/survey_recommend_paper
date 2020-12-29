import "./App.scss";
import NodeView from "./Views/NodeView";
import DetailView from "./Views/DetailView";
import RecommendView from "./Views/RecommendView";
import * as d3 from "d3";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
    nodes: [],
    links: [],
  });
  useEffect(() => {
    const getData = async () => {
      let nodes = await d3.json("[20201228]survey_nodes.json");
      nodes = nodes.filter(
        (node) => node.type === "in_survey" || node.cited_list.length > 3
      );
      const nodeSet = new Set(nodes.map((node) => node.id));
      const links = [];
      nodes.forEach((node) => {
        if (node.type === "in_survey") {
          node.cite_list.forEach(
            (cite_doi) =>
              nodeSet.has(cite_doi) &&
              links.push({
                source: node.id,
                target: cite_doi,
              })
          );
        }
      });
      setData({
        nodes,
        links,
      });
    };
    getData();
  }, []);
  const [selectedNode, setSelectedNode] = useState({});
  console.log("select", selectedNode);
  const cite_node_list = data.nodes.filter(
    (node) => (selectedNode.cite_list || []).indexOf(node.id) > -1
  );
  const cited_node_list = data.nodes.filter(
    (node) => (selectedNode.cited_list || []).indexOf(node.id) > -1
  );
  return (
    <div className="App">
      <div className="NodeViewContainer">
        <NodeView data={data} setSelectedNode={setSelectedNode} />
      </div>
      <div className="RecommendViewContainer">
        <RecommendView
          cite_node_list={cite_node_list}
          cited_node_list={cited_node_list}
        />
      </div>
      <div className="DetailViewContainer">
        <DetailView selectedNode={selectedNode} />
      </div>
    </div>
  );
}

export default App;
