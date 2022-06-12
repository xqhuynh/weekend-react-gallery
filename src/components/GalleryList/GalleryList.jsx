// Import GalleryItem component
import GalleryItem from "../GalleryItem/GalleryItem";

// Retrieve galleryItems prop from App.js, remember curly braces
function GalleryList({ galleryItems, fetchPhotoItem }) {
  return (
    <>
      {/* Loop over galleryItems and individual items
          and pass props to GalleryItem component.
          Set key={item.id} to use for axios PUT*/}
      <section>
        {galleryItems.map((item) => (
          <GalleryItem
            key={item.id}
            item={item}
            fetchPhotoItem={fetchPhotoItem}
          />
        ))}
      </section>
    </>
  );
}

export default GalleryList;
