import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FaTwitter } from "react-icons/fa";
import "./components/quote.css";
import Footer from "./components/Footer";

const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  state = {
    quotes: null,
    randomQuote: null
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          quotes: data.quotes
        });
      });
  }

  randomQuoteHandler = () => {
    const randNumb = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote = this.state.quotes[randNumb];

    this.setState({
      randomQuote
    });
  };

  postOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${this.state.randomQuote.quote} - ${this.state.randomQuote.author}`
    )}`;
    window.open(twitterUrl, "_blank");
  };

  render() {
    return (
      <>
      <div className="container">
        <AppBar position="fixed" style={{ backgroundColor: "black" }}>
          <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="h4" style={{ color: "white" }}>Quotes</Typography>
          </Toolbar>
        </AppBar>
        <div className="ui card">
          <div className="content">
            <div className="header">
              {this.state.randomQuote !== null && this.state.randomQuote.quote}
            </div>
            <div className="description">
              {this.state.randomQuote !== null && `- ${this.state.randomQuote.author}`}
            </div>
            <br />
            <Button
              variant="contained"
              onClick={this.randomQuoteHandler}
            >
              NEXT!
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.postOnTwitter}
            >
              <FaTwitter/>
            </Button>
          </div>
        </div>
       
      </div>
      <Footer />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
