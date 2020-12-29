import React from "react";
import './index.scss';

const RecommendView = React.memo(({ cite_node_list, cited_node_list }) => {
  console.log(cite_node_list, cited_node_list);
  return <div className="RecommendView">
    <div>
      cite:
    </div>
    {cite_node_list.map(node => (<div key={node.id}>
      {node.data.title || node.id}
    </div>))}
    <br/>
    <div>
      cited:
    </div>
    {cited_node_list.map(node => (<div key={node.id}>
      {node.data.title}
    </div>))}
  </div>;
});

export default RecommendView;
