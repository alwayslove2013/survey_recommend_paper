import "./App.scss";
import NodeView from "./Views/NodeView";
import DetailView from "./Views/DetailView";
import RecommendView from "./Views/RecommendView";
import * as d3 from "d3";
import React, { useState, useEffect } from "react";
import { InputNumber } from "antd";

function App() {
  const [data, setData] = useState({
    nodes: [],
    links: [],
  });
  const [citeCount, setCiteCount] = useState(4);
  const [citedCount, setCitedCount] = useState(4);
  useEffect(() => {
    const getData = async () => {
      // let nodes = await d3.json("[20201228]survey_nodes.json");
      let nodes = await d3.json("[20210105]survey_nodes.json");
      nodes = nodes.filter(
        (node) =>
          node.type === "in_survey" ||
          node.cited_count >= citeCount ||
          node.cite_count >= citedCount
      );
      const nodeSet = new Set(nodes.map((node) => node.id));
      const links = [];
      nodes.forEach((node) => {
        // if (node.type === "in_survey") {
        //   node.cite_list.forEach(
        //     (cite_doi) =>
        //       nodeSet.has(cite_doi) &&
        //       links.push({
        //         source: node.id,
        //         target: cite_doi,
        //       })
        //   );
        // }
        node.cite_list.forEach(
          (cite_doi) =>
            nodeSet.has(cite_doi) &&
            links.push({
              source: node.id,
              target: cite_doi,
            })
        );
        node["type"] =
          node.type === "in_survey"
            ? "survey"
            : node.cited_count > node.cite_count;
      });
      setData({
        nodes,
        links,
      });
    };
    getData();
  }, [citeCount, citedCount]);
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
      <div className="ControlPanel">
        <div className="panelItem">
          <div className="panelItem-title">cite count &ge;</div>
          <div className="panelItem-component">
            <InputNumber
              min={1}
              max={10}
              style={{ width: 50}}
              defaultValue={citeCount}
              onChange={setCiteCount}
              size="small"
            />
          </div>
        </div>
        <div className="panelItem">
          <div className="panelItem-title">cited count &ge; </div>
          <div className="panelItem-component">
            <InputNumber
              min={1}
              max={10}
              style={{ width: 50}}
              defaultValue={citedCount}
              onChange={setCitedCount}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
