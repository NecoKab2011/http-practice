import React, { Component } from "react";
import { ArticleList } from "./components/ArticleList/ArticleList.jsx";
import { Box, Title } from "./App.js"
import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

class App extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    const response = await axios.get("/search?query=react");
    this.setState({ articles: response.data.hits });
  }

  render() {
    const { articles } = this.state;
    console.log(articles)

    return (
      <Box>
        <Title>Articles</Title>
        <ArticleList articles={articles} />
      </Box>
    );
  }
}

export default App;
