import React, { useState } from "react";
import ReactFlow, {
  Background,
  MarkerType,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import { Brain, CheckCheck, File, Text, LetterText, Info } from "lucide-react";
export default function App() {
  // State for nodes and edges
  const [nodes, setNodes] = useState([
    {
      id: "1",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">PDF</div>
              <div className="text-xs">Upload or select a PDF document</div>
            </div>

            <File size={60} />
          </div>
        ),
      },
      position: { x: 100, y: -250 },
      style: {
        width: 250,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },
    {
      id: "2",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">Parser</div>
              <div className="text-xs">Extract raw data from the PDF</div>
            </div>

            <Text size={60} />
          </div>
        ),
      },

      position: { x: 470, y: -250 },
      style: {
        width: 200,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },
    {
      id: "3",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">Text</div>
              <div className="text-xs">Converted readable text format</div>
            </div>

            <LetterText size={60} />
          </div>
        ),
      },
      position: { x: 800, y: -250 },
      style: {
        width: 200,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },
    {
      id: "4",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">
                {" "}
                Document Analysis Agent
              </div>
              <div className="text-xs">AI agent analyzes the document</div>
            </div>

            <Brain size={60} />
          </div>
        ),
      },
      position: { x: 740, y: -50 },
      style: {
        width: 360,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },
    {
      id: "5",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">Infos</div>
              <div className="text-xs">Extracted structured information</div>
            </div>

            <Info size={60} />
          </div>
        ),
      },
      position: { x: 450, y: -50 },
      style: {
        width: 200,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },
    {
      id: "6",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">Summary Agent</div>
              <div className="text-xs">Summarizes key points</div>
            </div>

            <Brain size={60} />
          </div>
        ),
      },
      position: { x: 100, y: -50 },
      style: {
        width: 250,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },

    {
      id: "7",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">summarized info</div>
              <div className="text-xs">Provides an overview of collected data</div>
            </div>

            <Info size={60} />
          </div>
        ),
      },
      position: { x: 100, y: 150 },
      style: {
        width: 250,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },

    {
      id: "8",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">Scraping Agent</div>
              <div className="text-xs">Extracts data from multiple sources</div>
            </div>

            <Brain size={60} />
          </div>
        ),
      },
      position: { x: 430, y: 150 },
      style: {
        width: 250,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },

    {
      id: "9",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">
                Interships & Grants Data
              </div>
              <div className="text-xs">Stores internships and grants listings</div>
            </div>

            <CheckCheck size={60} />
          </div>
        ),
      },
      position: { x: 750, y: 150 },
      style: {
        width: 350,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },

    {
      id: "10",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">Matcher</div>
              <div className="text-xs">Finds matches between users and data</div>
            </div>

            <CheckCheck size={60} />
          </div>
        ),
      },
      position: { x: 750, y: 350 },
      style: {
        width: 250,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },

    {
      id: "11",
      data: {
        label: (
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-2">
                Matches Interships & Grants
              </div>
              <div className="text-xs">Displays the matched opportunities</div>
            </div>

            <CheckCheck size={60} />
          </div>
        ),
      },
      position: { x: 300, y: 350 },
      style: {
        width: 350,
        height: 100,
        background: "rgba(187, 155, 255, 0.05)",
        color: "#BB9BFF",
        borderRadius: "1rem",
        border: "1px solid rgba(187, 155, 255, 0.2)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 0 25px 5px rgba(187,155,255,0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      },
    },
  ]);

  const [edges, setEdges] = useState([
    {
      id: "1-2",
      source: "1",
      target: "2",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
    {
      id: "2-3",
      source: "2",
      target: "3",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
    {
      id: "3-4",
      source: "3",
      target: "4",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
    {
      id: "4-5",
      source: "4",
      target: "5",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
    {
      id: "5-6",
      source: "5",
      target: "6",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
    {
      id: "6-7",
      source: "6",
      target: "7",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
    {
      id: "7-8",
      source: "7",
      target: "8",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
    {
      id: "8-9",
      source: "8",
      target: "9",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
    {
      id: "9-10",
      source: "9",
      target: "10",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
    {
      id: "10-11",
      source: "10",
      target: "11",
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    },
  ]);

  // Handle node drag
  const onNodeDragStop = (event, node) => {
    const updatedNodes = nodes.map((n) => {
      if (n.id === node.id) {
        return node;
      }
      return n;
    });
    setNodes(updatedNodes);
  };

  // Handle connecting nodes
  const handleConnect = (params) => {
    const newEdge = {
      id: `${params.source}-${params.target}`,
      source: params.source,
      target: params.target,
      animated: true,
      style: { stroke: "#BB9BFF", strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#BB9BFF",
        width: 20,
        height: 20,
      },
    };
    setEdges((eds) => [...eds, newEdge]);
  };

  return (
    <div className="h-screen w-full  mx-auto overflow-y-auto">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={handleConnect}
        onNodeDragStop={onNodeDragStop}
        fitView
        nodesDraggable={true}
        className="bg-background"
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false} // Important: allow page to scroll
        onScroll={(event) => event.stopPropagation()} // Prevent ReactFlow from catching scroll
      >
        <Background variant="dots" gap={20} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
