import { Component } from 'react';
import { GoSearch } from 'react-icons/go';
// import { Formik } from "formik";
import {
  Header,
  SearchForm,
  Input,
  Button,
} from "./Searchbar.styled";

 class Searchbar extends Component {
  state = {
    listName: '',
  };
  handleListSubmit = evt => {
    evt.preventDefault();
    if (this.state.listName.trim() === '') {
      alert('Search field is empty!Please enter a search word.');
      return;
    }
    this.props.onSubmit(this.state.listName);
    this.setState({ listName: '' });
  };
  handleListChange = evt => {
    this.setState({ listName: evt.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleListSubmit}>
          <Button type="submit">
            <GoSearch size="20" />
            <span>Search</span>
          </Button>
          <Input
            name="title"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleListChange}
            value={this.state.listName}
          />
        </SearchForm>
      </Header>
    );
  }
}


//  class Searchbar extends Component {
//   state = {
//     imagesSearch: "",
//   };

//   handleSubmit = () => {
//     if (this.state.imagesSearch === "") {
//       return;
//     }

//     this.props.onSubmitForm(this.state.imagesSearch);
//     this.setState({ imagesSearch: "" });
//   };

//   handleSearchImages = (e) => {
//     this.setState({ imagesSearch: e.target.value.trim().toLowerCase() });
//   };

//   render() {
//     return (
//       <Header>
//         <Formik initialValues={{ image: "" }} onSubmit={this.handleSubmit}>
//           <SearchForm onChange={this.handleSearchImages}>
//             <Button type="submit">
//               <SearchIcon />
//             </Button>

//             <Input
//               name="image"
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//             />
//           </SearchForm>
//         </Formik>
//       </Header>
//     );
//   }
// }
export default Searchbar


