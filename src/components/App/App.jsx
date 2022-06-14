import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// Import GalleryList component
import GalleryList from "../GalleryList/GalleryList";

function App() {
  // Create useState to store galleryItems array from gallery.data.js file
  // useState should always be the same data type as array it's coming from
  const [galleryItems, setGalleryItems] = useState([]);

  // Axios GET to retrieve data from /gallery
  function fetchPhotoItem() {
    axios
      .get("/gallery")
      .then((response) => {
        console.log("In GET /gallery", response);
        // Use setter from useState setGalleryItems to store gallery data
        setGalleryItems(response.data);
      })
      .catch((err) => {
        console.log("Error in GET /gallery", err);
      });
  }

  // Call on useEffect for initial page load to call fetchPhotoItem()
  useEffect(() => {
    fetchPhotoItem();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <h2>My Gallery</h2>
      <h4>
        Click on the photo to see description. Click again to toggle back to
        photo.
      </h4>
      <GalleryList
        // Pass props to GalleryList component
        // need galleryItems and fetchPhotoItem()
        galleryItems={galleryItems}
        fetchPhotoItem={fetchPhotoItem}
      />
    </div>
  );
}

export default App;

// PUT request should be in App.js not GalleryItem
// add id to argument

// function addLikes(id) {
//   url: '/gallery/like/${id}'

// Pass addLikes() to GalleryList to GalleryItem
// onClick in GalleryItem should be
// onClick={() => onLike(item.id)}
