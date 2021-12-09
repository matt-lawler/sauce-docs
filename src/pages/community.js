import React, { Component } from 'react';

class Community extends Component {
  render() {
    return (
      <div>
        <h2 className="title">Community</h2>
        <div className="callouts__container">
          <div className="callout">
            <h2>Selenium</h2>
            <p>Learn how to use Selenium like a pro.</p>
            <ul>
              <li><h4><a href="https://training.saucelabs.com/" target="_blank" rel="noopener noreferrer">Take a course</a></h4></li>
              <li><h4><a href="https://github.com/saucelabs-training" target="_blank" rel="noopener noreferrer">Go to sample code</a></h4></li>
            </ul>
          </div>
          <div className="callout">
            <h2>Stack Overflow</h2>
            <p>Tag your posts with <code>saucelabs</code> to get your questions answered by our experts</p>
            <ul>
              <li><h4><a href="https://stackoverflow.com/search?tab=newest&q=Sauce%20Labs" target="_blank" rel="noopener noreferrer">Join the conversation</a></h4></li>
            </ul>
          </div>
          <div className="callout">
            <h2>Engineering Blog</h2>
            <p>Get expert advice from our engineering and open source teams.</p>
            <ul>
              <li><h4><a href="https://opensource.saucelabs.com/blog/" target="_blank" rel="noopener noreferrer">Read the tips</a></h4></li>
            </ul>
          </div>
          <div className="callout">
            <h2>Sample Scripts</h2>
            <p>Get up and running quickly using Sauce Labs training code samples.</p>
            <ul>
              <li><h4><a href="https://github.com/saucelabs-training" target="_blank" rel="noopener noreferrer">Go to GitHub</a></h4></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
