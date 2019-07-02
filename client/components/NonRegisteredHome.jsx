import React, { Fragment } from "react";
import Carousel from "./Carousel"

class NonRegisteredHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Carousel />
        <h2 >
          Welcome!
        </h2>
        <div id="welcome">
            <div className="content has-text-left">
                <p>
                    Welcome to MotherLoad! Our aim is to bring information around 
                    PC building to make your life easier. Whether you're new to the 
                    area or an expert we hope you leave us learning something new. 
                    We also encourage viewers to share whatever knowledge they have 
                    that we may have missed. As an expert you've probably come across 
                    a few things you wish you had learnt sooner, so don't be afraid to share!
                </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NonRegisteredHome;
