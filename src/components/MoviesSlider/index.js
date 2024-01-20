import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const mobileSettings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 2,
  }

  const labSettings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  const {moviesList} = props

  return (
    <>
      <div className="mobile-slider-container">
        <Slider {...mobileSettings}>
          {moviesList.map(eachMovie => (
            <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
          ))}
        </Slider>
      </div>

      <div className="lab-slider-container">
        <Slider {...labSettings}>
          {moviesList.map(eachMovie => (
            <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default MoviesSlider
