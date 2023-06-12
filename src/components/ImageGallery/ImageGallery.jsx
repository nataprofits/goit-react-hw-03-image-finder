import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import {List} from '../ImageGallery/ImageGallery.styled'

export function ImageGallery({ list }) {
  return (
    <>
      <List>
        {list.map(item => (
          <ImageGalleryItem
            key={item.id}
            smallImage={item.webformatURL}
            description={item.tags}
            largeImage={item.largeImageURL}
          />
        ))}
      </List>
    </>
  );
}
