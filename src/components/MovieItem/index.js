import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <>
      <div className="mobile-view-container">
        <Popup
          modal
          trigger={
            <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
          }
          className="popup-content"
        >
          {close => (
            <div className="modal-container">
              <button
                className="close-button"
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="white" />
              </button>
              <div className="movie-player-container">
                <ReactPlayer width={300} height={170} url={videoUrl} controls />
              </div>
            </div>
          )}
        </Popup>
      </div>

      <div className="lab-view-container">
        <Popup
          modal
          trigger={
            <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
          }
          className="popup-content"
        >
          {close => (
            <div className="modal-container">
              <button
                className="close-button"
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="white" />
              </button>
              <div className="movie-player-container">
                <ReactPlayer width={620} height={340} url={videoUrl} controls />
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  )
}

export default MovieItem
