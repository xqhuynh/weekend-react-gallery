// Import GalleryItem component
import GalleryItem from "../GalleryItem/GalleryItem";

// Pass galleryItems prop from App.js, remember curly braces
function GalleryList({ galleryItems, fetchPhotoItem }) {
  return (
    <>
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
