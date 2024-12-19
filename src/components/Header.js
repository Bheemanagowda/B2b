import React, { useState } from "react";
import logo from "../assets/images/logo.png";

// Bootstrap and FontAwesome
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Dropdown, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button/Button";

// Material UI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Styles
import "../styles/Header.css";
import "../styles/Responsive.css";

export default function Header() {
  // State for managing search input and category selection
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const [error, setError] = useState(""); // State for error message

  // Handle input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) setError(""); // Clear error if input is not empty
  };

  // Handle category selection
  const handleCategorySelect = (eventKey) => {
    setSelectedCategory(eventKey);
  };

  // Handle form submission
  const handleSearchClick = (e) => {
    e.preventDefault(); // Prevent default behavior
    if (!searchTerm.trim()) {
      setError("This field is required");
      return;
    }
    // Logic for submitting the search
    alert(`Searching for: ${searchTerm}`);
  };

  // Handle Sign-In click
  const handleSignInClick = () => {
    alert("Redirecting to Sign-In page...");
  };

  return (
    <div className="headerTop sticky-header p-31">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Company Logo" className="img-fluid" />
      </div>

      {/* Search Section */}
      <div className="searchFlex">
        <div className="search-bar mx-3">
          <InputGroup>
            {/* Dropdown for Categories */}
            <Dropdown onSelect={handleCategorySelect}>
              <Dropdown.Toggle
                id="dropdown-categories"
                className="categoriesDropdown"
                variant="none"
                style={{ color: "gray" }}
              >
                {selectedCategory}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Option 1">Option 1</Dropdown.Item>
                <Dropdown.Item eventKey="Option 2">Option 2</Dropdown.Item>
                <Dropdown.Item eventKey="Option 3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Search Input with Microphone Icon */}
            <div style={{ position: "relative", width: "60%" }}>
              <Form.Control
                type="text"
                placeholder="Search Here Products"
                aria-label="Search input"
                value={searchTerm}
                onChange={handleSearchChange}
                isInvalid={!!error}
                className="custom-search-input"
                style={{ paddingRight: "40px" }} // Space for the icon
              />

              {/* Microphone Icon */}
              <span
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "gray",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon icon={faMicrophone} />
              </span>

              {/* Error Message */}
              <Form.Control.Feedback type="invalid">
                {error}
              </Form.Control.Feedback>
            </div>

            {/* Search Button */}
            <InputGroup.Text
              type="button"
              onClick={handleSearchClick}
              className="searchIconContainer"
              style={{
                backgroundColor: "#204063", // Custom background color
                color: "#FFF", // White icon color
                cursor: "pointer",
                border: "none",
                padding: "10px 15px",
                borderRadius: "0 5px 5px 0",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
              SEARCH
            </InputGroup.Text>
          </InputGroup>
        </div>

        {/* Get Price Button */}
        <Button
          label="Get Best Price"
          type="submit" // Use type="submit" for button submission
          style={{
            display: "flex",
            padding: "14px 20px",
            backgroundColor: "#46A695",
            color: "white",

            alignItems: "center",
            border: "1px solid #46A695",
            borderRadius: "3px",
            fontSize: "16px",
            fontWeight: "400",
          }}
        />
      </div>

      {/* Sign-In Section */}
      <div
        className="signIn"
        onClick={handleSignInClick}
        style={{ cursor: "pointer" }}
      >
        <AccountCircleIcon fontSize="large" />
        <p>Sign In</p>
      </div>
    </div>
  );
}
