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
      <div>
        {/* Conditional rendering to toggle disply of image and description */}
        {displayPhoto ? (
          <img onClick={togglePhoto} src={item.path} />
        ) : (
          <p onClick={togglePhoto}>{item.description}</p>
        )}

        {/* 'Love it' button */}
        <button onClick={addLikes}>Love It!</button>
        {/* Conditional rendering for 'Love It' button */}
        {item.likes !== 0 ? (
          <p>{item.likes} people love this!</p>
        ) : (
          <p>No people love this!</p>
        )}
      </div>
    </>
  );
}

export default GalleryItem;
