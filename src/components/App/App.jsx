import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// Import GalleryList component
import GalleryList from "../GalleryList/GalleryList";

function App() {
  // Create useState to store galleryItems array from gallery.data.js file
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
      <h4>Click on the picture to see the description.</h4>
      <h4>Click again to see the picture.</h4>
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
