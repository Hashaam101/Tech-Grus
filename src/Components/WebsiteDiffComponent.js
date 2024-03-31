import React, { Component } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

class WebsiteDiffComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstImage: null,
      secondImage: null,
    };
  }

  handleButtonClick = (image1, image2) => {
    this.setState({ firstImage: image1, secondImage: image2 });
  };

  render() {
    const images = ["1d.jpg", "1o.jpg"];

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col lg:flex-row w-full lg:w-4/5 border border-gray-200 rounded-lg shadow-lg">
          <div className="w-full lg:w-1/5 flex flex-row  lg:flex-col  justify-center items-center">
            <button
              className="py-4 px-6 my-2 lg:my-0 lg:mr-2 bg-blue-500 text-white rounded-lg focus:outline-none"
              onClick={() => this.handleButtonClick(images[0], images[1])}
            >
              Button 1
            </button>
            <button
              className="py-4 px-6 my-2 lg:my-0 lg:mr-2 bg-green-500 text-white rounded-lg focus:outline-none"
              onClick={() => this.handleButtonClick(images[1], images[0])}
            >
              Button 2
            </button>
            {/* <button
              className="py-4 px-6 my-2 lg:my-0 lg:mr-2 bg-yellow-500 text-white rounded-lg focus:outline-none"
              onClick={() => this.handleButtonClick(images[2])}
            >
              Button 3
            </button>
            <button
              className="py-4 px-6 my-2 lg:my-0 bg-red-500 text-white rounded-lg focus:outline-none"
              onClick={() => this.handleButtonClick(images[3])}
            >
              Button 4
            </button> */}
          </div>
          <div className="">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src={this.state.firstImage}
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={this.state.secondImage}
                  alt="Image two"
                />
              }
            />
            {/* <img src={this.state.firstImage} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default WebsiteDiffComponent;
