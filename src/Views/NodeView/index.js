import React, { useState, useEffect } from "react";
import "./index.scss";
import * as d3 from "d3";

const scale = d3.scaleOrdinal(d3.schemeCategory10);
const color = (d) => scale(d.type);

const drag = (simulation) => {
  const dragstarted = (event) => {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  };

  const dragged = (event) => {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  };

  const dragended = (event) => {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  };

  return d3
    .drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
};

const NodeView = React.memo(({ data, setSelectedNode }) => {
  const { nodes, links } = data;

  console.log(nodes, links);

  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  // const xPos = d3.scaleLinear().domain([1990, 2020]).range([0, clientWidth]);
  // nodes.forEach(node => {
  //   node.fx =  node.data.year ? xPos(node.data.year) : null
  // })
  useEffect(() => {
    const clientRect = d3.select(".NodeView").node().getBoundingClientRect();
    setClientWidth(clientRect.width);
    setClientHeight(clientRect.height);
  }, []);

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3.forceLink(links).id((d) => d.id)
    )
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(clientWidth / 2, clientHeight / 2));

  const svg = d3.select("#node-view-svg");

  svg.selectAll("*").remove();

  const linkG = svg.append("g").attr("id", "link-g").attr("stroke", "#999");
  const link = linkG
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke-width", 1)
    .attr("stroke-opacity", 0.6)
    .attr("pointer-events", "none");

  const nodeG = svg
    .append("g")
    .attr("id", "node-g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5);
  const node = nodeG
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("id", (d) => d.id)
    .attr("r", 5)
    .attr("fill", color)
    .style("cursor", "pointer")
    .on("click", (e, d) => {
      // console.log("d", d);
      setSelectedNode(d);
      e.stopPropagation();
      handleClick(d);
    })
    .call(drag(simulation));
  const handleClick = (d) => {
    const highlightSet = new Set([...d.cite_list, ...d.cited_list, d.id]);
    // console.log("highlightSet", node, highlightSet);
    d3.selectAll("circle").attr("opacity", (d) =>
      highlightSet.has(d.id) ? 1 : 0.2
    );
    d3.selectAll("circle").attr("stroke", (dd) =>
      dd.id == d.id ? "#f03b20" : null
    );
    d3.selectAll("circle").attr("stroke-width", (dd) =>
      dd.id == d.id ? 2.4 : null
    );
    d3.selectAll("line").attr("stroke-opacity", (dd) =>
      // dd.source.id == d.id || dd.target.id == d.id ? 0.6 : 0.1
      highlightSet.has(dd.source.id) && highlightSet.has(dd.target.id)
        ? 0.6
        : 0.1
    );
  };
  simulation.on("tick", () => {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  });

  const clickBackGround = () => {
    d3.selectAll("circle").attr("opacity", 1
    );
    d3.selectAll("circle").attr("stroke", null
    );
    d3.selectAll("circle").attr("stroke-width", 1.5);
    d3.selectAll("line").attr("stroke-opacity", 0.6);
  };

  return (
    <div className="NodeView">
      <svg
        width="100%"
        height="100%"
        id="node-view-svg"
        onClick={clickBackGround}
      />
    </div>
  );
});

export default NodeView;
