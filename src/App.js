import './App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const organisers = [
    {
      name: "Dibyendu Das",
      image: "https://i1.sndcdn.com/avatars-IlLhW1aTgXhG5P9T-e8kKpQ-t500x500.jpg",
      designation: "Tech Incharge"
    },
    {
      name: "Tanmay Sarkar",
      image: "https://i1.sndcdn.com/avatars-IlLhW1aTgXhG5P9T-e8kKpQ-t500x500.jpg",
      designation: "Tech Incharge"
    },
    {
      name: "Dibyendu Das",
      image: "https://i1.sndcdn.com/avatars-IlLhW1aTgXhG5P9T-e8kKpQ-t500x500.jpg",
      designation: "Tech Incharge"
    },
    {
      name: "Dibyendu Das",
      image: "https://i1.sndcdn.com/avatars-IlLhW1aTgXhG5P9T-e8kKpQ-t500x500.jpg",
      designation: "Tech Incharge"
    },
    {
      name: "Dibyendu Das",
      image: "https://i1.sndcdn.com/avatars-IlLhW1aTgXhG5P9T-e8kKpQ-t500x500.jpg",
      designation: "Tech Incharge"
    }
  ];
  return (
    <div className="App">
      <h1>React multi carousel</h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        
        showDots={true}
      >
        {organisers.map((item, index) => (
          <div className='card'>
            <img src={item.image} alt="organiser image" width="200px" />
            <h5>
              {item.name}
            </h5>
            <p>
              {item.designation}
            </p>


          </div>
        ))}
      </Carousel>





    </div>
  );
}


export default App;
