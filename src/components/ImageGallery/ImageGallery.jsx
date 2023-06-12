import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export function ImageGallery ({list}) {

     return (
       <>
         <ul>
           {list.map(item => (
             <ImageGalleryItem
               key={item.id}
               smallImage={item.webformatURL}
               description={item.tags}
               largeImage={item.largeImageURL}
             />
           ))}
         </ul>
       </>
     );
  }
  