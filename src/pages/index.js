import React from "react";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import "../styles/index.scss";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="full-width-image-container margin-top-0 index-hero">
          <h1>
            <span className="mint-green">{"<"}</span>
            SelfTaughtDev
            <span className="mint-green">{"/>"}</span>
          </h1>
        </div>
        <section className="section blog-list-section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
