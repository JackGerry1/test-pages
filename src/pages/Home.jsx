import * as React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <div className="page-container">
      <div className="content">
        <h1>Home page</h1>
        <Link to="/TOS">TOS</Link>
        <Link to="/Settings">Settings</Link>
      </div>
    </div>
  );
}
