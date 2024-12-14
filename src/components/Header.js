import React, { useState } from 'react';  // Import useState hook
import logo from '../assets/images/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Dropdown, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';  // Correct import for microphone and search icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/Header.css';
import '../styles/Responsive.css';



export default function Header() {


  const [searchTerm, setSearchTerm] = useState('');  // Using useState hook to manage search term

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);  // Update search term as user types
  };

  const handleSearchClick = () => {
    alert(`Search term: ${searchTerm}`);  // Action for search button (can replace with your logic)
  };

  const handleSignInClick = () => {
    alert("Redirecting to Sign-In page...");  // Example action for sign-in
  };

  return (
    <div className="headerTop  p-31">
      {/* Logo Section */}
      <div className='logo'>
        <img src={logo} alt='logo' className="img-fluid" />  {/* Display logo */}
      </div>

      {/* Search Section */}
     <div className='searchFlex '>
     <div className="search-bar  mx-3 " >
        <InputGroup className="mb-0">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />  {/* Add search icon inside the input */}
          </InputGroup.Text>
          <Form.Control
            placeholder="Search/Products"  // Updated placeholder
            aria-label="Search input"
            value={searchTerm}
            onChange={handleSearchChange}  // Handle input change
          />
          <InputGroup.Text>
            <FontAwesomeIcon icon={faMicrophone}  style={{color:"gray"}}/>  {/* Display microphone icon */}
          </InputGroup.Text>
          <Dropdown>
            <Dropdown.Toggle className='categoriesBtn' id="dropdown-basic">
              Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button className='searchButton' onClick={handleSearchClick}>
            Search
          </Button>
        </InputGroup>
      </div>

      {/* Get Price Button */}
      <div className='getPrice'>
        <Button className='getPrice'>
          Get Price
        </Button>
      </div>
     </div>

      {/* Sign-In Section */}
      <div className='signIn' onClick={handleSignInClick} style={{ cursor: 'pointer' }}>
        <AccountCircleIcon fontSize="large" />
        <p>Sign In</p>
      </div>
    </div>
  );
}
