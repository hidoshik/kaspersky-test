import React from "react";
import "./App.css";
import { SnippetNews } from "./components/SnippetNews";
import { ConfigProvider, theme } from "antd";
import { data } from "./__fixtures__/data.js";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="card-wrapper">
        {data.map((item) => (
          <SnippetNews key={item.ID} data={item} />
        ))}
      </div>
    </ConfigProvider>
  );
}

export default App;
