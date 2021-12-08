// import styled from '@emotion/styled' // if you want to use styled components, this is in the packages
import React from 'react'
import axios from 'axios'
import chunk from './utilities/chunk';
const IMAGES_URL = "https://dog.ceo/api/breed/hound/images/random/55";
/**
 *
 * @returns { "message": ["https://images.dog.ceo/breeds/hound-afghan/n02088094_1126.jpg", ...] }
 *
 * Step 1: Render all the images returned
 * Step 2: Create chunks of 10 images from the returned list
 * Step 3: Render the first 10 of the list
 * Step 4: Build a way to increment to the next 10
 * Step 5: Build a way to decrement to the previous 10
 * Step 6: Create a UI that shows which page you're viewing
 * Step 7: Write a test that covers a user interaction
 *
 */

type MyState = {
  images: [string];
  size: number;
  chunks: any[];
  page: number;
  error: any;
};
class App extends React.Component<{}, MyState> {

  constructor(props:any) {
    super(props);
    this.state = {
      images: [''],
      size: 10,
      chunks: [],
      page: 0,
      error: {}
    };
  }

  componentDidMount() {
    this.fetchImages()
  }

  createChunks() {
    this.setState({
      chunks: chunk(this.state.images, 10)
    })
  }

  nextPage() {
    this.setState({
      page: this.state.page < this.state.chunks.length-1 ? this.state.page+1: 0
    })
  }

  backPage() {
    this.setState({
      page: this.state.page-1
    })
  }

  async fetchImages() {
    try {
      const response = await axios.get(IMAGES_URL)
      const { message: images } = response.data
      this.setState({
        images
      })
      this.createChunks()
    } catch(error) {
      this.setState({
        error
      })
    }
  }

  render() {
    const chunkOfImages = this.state.chunks
    const page = this.state.page
    return (
      <div>
        <div className="flex flex-wrap justify-center mt-5">
          {chunkOfImages.length && chunkOfImages[page].map((image: string, idx: number) => (
            <img className="m-2 w-1/6" key={idx} src={image} alt="dog"/>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <h1 className="text-4xl mx-5">Page {page+1}</h1>
          {page > 0 ? <button className="btn" onClick={() => this.backPage()}>Back</button>: ''}
          <button className="btn" onClick={() => this.nextPage()}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
