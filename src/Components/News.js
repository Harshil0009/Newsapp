import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      error: null, // Added to store any errors
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - DailyNews`;
  }

  async updateNews(page) {
    const { country, category, pageSize } = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ff19d7e9359d43e59d1d591b70114fda&page=${page}&pageSize=${pageSize}`;

    this.setState({ loading: true, error: null }); // Reset error state before loading

    try {
      let response = await fetch(url);

      if (!response.ok) {
        // If the response is not ok, handle the error
        throw new Error(`Error: ${response.statusText}`);
      }

      let parsedData = await response.json();

      if (!parsedData.articles || parsedData.articles.length === 0) {
        throw new Error("No articles found."); // Handle empty response
      }

      this.setState({
        articles: this.state.articles.concat(parsedData.articles), // Append new articles
        totalResults: parsedData.totalResults,
        loading: false,
        page: page,
      });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  }

  async componentDidMount() {
    this.updateNews(1);

    // Infinite Scroll Event Listener
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Clean up the event listener when component unmounts
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // Detect when the user scrolls near the bottom of the page
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200 // Increased the threshold to avoid repeated calls
    ) {
      if (!this.state.loading) {
        this.updateNews(this.state.page + 1);
      }
    }
  };

  render() {
    return (
      <div
        className="container-fluid d-flex flex-column justify-content-between"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="text-center">
          DailyNews - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}
        </h1>

        {/* Show Spinner if loading */}
        {this.state.loading && <Spinner />}

        <div className="row flex-grow-1">
          {/* Display news items if no errors and articles exist */}
          {this.state.articles && this.state.articles.length > 0 ? (
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))
          ) : (
            !this.state.loading &&
            !this.state.error && (
              <div className="text-center">No articles found.</div>
            )
          )}
        </div>

        <div className="error-message" style={{ minHeight: "150px" }}>
          {!this.state.loading && this.state.error && (
            <div className="container my-4">
              <div className="alert alert-danger text-center my-4">
                {this.state.error}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default News;
