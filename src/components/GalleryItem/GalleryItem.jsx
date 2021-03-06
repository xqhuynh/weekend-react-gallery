import React, { useState } from "react";
import axios from "axios";
// Retrieve 'item' and fetchPhotoItem props from GalleryList component
function GalleryItem({ item, fetchPhotoItem }) {
  // useState to toggle between image and description
  const [displayPhoto, setDisplayPhoto] = useState(true);

  // Function to toggle between image and description
  // Set toggle to opposite of useState initial value
  function togglePhoto() {
    setDisplayPhoto(!displayPhoto);
  }

  // Axios PUT to track 'likes' button click and update to database
  function addLikes() {
    console.log("Clicked gallery item", item.id);
    axios
      .put(`/gallery/like/${item.id}`) // Target item.id, make sure key={item.id} in GalleryList
      .then((response) => {
        console.log("In PUT /gallery/like", response);
        // console.log("Number of likes", item);
        // Refresh data by calling fetchPhotoItem()
        fetchPhotoItem();
      })
      .catch((err) => {
        console.log("Error in PUT /gallery/like", err);
      });
  }

  return (
    <>
      <div className="photo-container">
        {/* Conditional rendering to toggle disply of image and description */}
        {displayPhoto ? (
          <img className="picture" onClick={togglePhoto} src={item.path} />
        ) : (
          <div className="description">
            <p className="description-text" onClick={togglePhoto}>
              {item.description}
            </p>
          </div>
        )}

        {/* 'Love it' button */}
        <div>
          <button className="like-button" onClick={addLikes}>
            Love It!
          </button>
          {/* Conditional rendering for 'Love It' button */}
          {item.likes !== 0 ? (
            <p>{item.likes} people love this!</p>
          ) : (
            <p>No people love this!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default GalleryItem;
