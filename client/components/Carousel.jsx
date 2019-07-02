import React, { Component } from "react";
import Slider from "react-slick";
import RandomTips from './RandomTips'
import RandomArticle from './RandomArticle'
import RandomTutorials from './RandomTutorials'



export default class Carousel extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div className='carousel'>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
        <div>
            <div>
              <h2 id="carouselHeader" >A useful tool!</h2>
            </div>
            
            <p>
              If you haven't come across it already,<a href="https://nz.pcpartpicker.com/" target="_blank">
              <strong> PC Part picker</strong></a> is a really good place that helps 
              bring your build together. It tells you when parts don't work together and also gives 
              you the best and cheapest places to get them. Another great feature they have, is that it allows
              you to save your builds as well as look at other people's builds to gain ideas.
            </p>
            
          </div>
          <div>
          <h2 id="carouselHeader" >Want help from a human?</h2>
          <p>
          If you can't find what you're looking for on our site, or want to chat through your builds and bugs with an 
          expereinced person, <a href="https://www.computerhope.com/" target="_blank"><strong>Computer Hope</strong></a> is the place for you. 
          You'll find a community with a great pool of knowledge who will have your best interests in mind.
            </p>
          </div>
          <div>
          <h2 id="carouselHeader" >Need a place to start?</h2>
          <p>
            If you're unsure of what direction to begin looking in <a href="https://www.logicalincrements.com/" target="_blank"><strong>Logical Increments</strong></a> is a great place to start.
            The site has options that can take in your needs and give you possible builds based on 
            them. The only thing that isn't to great about it is that it doesn't have room for compromise if the build 
            is mid range then all the parts will be midrange. There's no mix and match. A recommendation would be to use them as a rough guide and then use PC Part p
          </p>
          </div>

          <div>
            <h3><RandomTips /></h3>
          </div>
          <div>
            <h3><RandomTutorials /></h3>
          </div>
          <div>
            <h3><RandomArticle /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}

