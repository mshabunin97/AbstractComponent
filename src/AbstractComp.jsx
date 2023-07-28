/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import { v4 as uuidv4 } from "uuid";


const createNodes = (data) => {
    return data.map((node) => ({
        id: node.id,
        position: { x: node.x, y: node.y },
        data: { label: node.label },
        style: node.style,
        sourcePosition: "right",
        targetPosition: "left",
      }))
}


const AbstractComp = ({ data }) => {
  // Создаю массив узлов на основе данных, переданных в компонент
  const [nodes, setNodes, onNodesChange] = useNodesState(createNodes(data))

  // Использую хук useEdgesState для управления состоянием ребер
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Обработчик события onConnect, который вызывается при соединении узлов
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Создаю ребра между узлами
  for (let i = 0; i < nodes.length - 1; i++) {
    edges.push({
      id: `e-${uuidv4()}`,
      source: nodes[i].id,
      target: nodes[i + 1].id,
    });
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      />
    </div>
  );
};

export default AbstractComp;
