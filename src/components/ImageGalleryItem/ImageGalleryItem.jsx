import { Component } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import{ Item, Img} from './ImageGalleryItem.styled'

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { smallImage, largeImage, description } = this.props;
    return (
      <>
        <Item>
          <Img src={smallImage} alt={description} onClick={this.onModalOpen} />
        </Item>
        {isModalOpen && (
          <ModalWindow
            isOpen={isModalOpen}
            largeImage={largeImage}
            description={description}
            closeModal={this.onModalClose}
          />
        )}
      </>
    );
  }
}
