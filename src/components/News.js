import React, { Component } from "react";
import Spinner from "./Spinner";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from 'react-top-loading-bar';

export class News extends Component {
  static deafultProps = {
    country: "in",
    pagesize: 5,
    category: "general",
  };

  static proptype = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    console.log("this is news component");
    this.state = {
      // articles : this.articles, //if i so like this then above first two news that is sports , these will shown here  yah immediatly it will dissappear but still it shows when i comment this then that issue will gone
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `News - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async Upadate() {
    //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=84f17e0485f444ed9dcd78d3f515c095
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0374aabca31d476d834a4e36bcbc0e51&page=${this.state.page}&pagesize=${this.props.pagesize}`; //here i am taking data from this link and i am displaing these into window
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {

    this.Upadate();
  }

  handlePrevious = async () => {
  
    this.setState({ page: this.state.page - 1 });
    this.Upadate();
  };

  handleNext = async () => {
  
    this.setState({ page: this.state.page + 1 });
    this.Upadate();
  };

  

 

  render() {
    return (
      <>
        <div className="container my-4">
        {" "}
        {/*  this code is for privious and next button and next is for infinite scrool*/}
        <h1 className="text-center" style={{ margine: "40px 20px" }}>
          Top - Headlines - {this.capitalizeFirstLetter(this.props.category)}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 70) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
         <div className="container d-flex justify-content-between">
          {" "}
          {/* d-flex justify-content-between this class id for two buttons one is at one end and another is at another end */}
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &larr; Privious
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark "
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>{" "}
          {/*&larr; and &rarr; is for left and right arrow*/}
          </div> 
        </div>

       
          
        
      </>
    );
  }
}

export default News;
