import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title,description,imgurl,newsUrl ,author,date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'50%', zIndex:'1'}}>{source}</span>
          <img src={!imgurl?"https://as1.ftcdn.net/v2/jpg/03/27/55/60/1000_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-body-secondary"> By {!author?"unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-outline-dark">
                ReadMore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
