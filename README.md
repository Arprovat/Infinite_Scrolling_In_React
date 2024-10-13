## Understanding Window and Document Height in JavaScript for Infinite scrolling in react

### Window Inner Height (`window.innerHeight`)

* **Definition:** Returns the height of the browser window's viewport in pixels.
* **Purpose:** Represents the visible area of the webpage within the browser window.

### Document Scroll Properties

* **`document.documentElement.scrollTop`:**
  - Returns the number of pixels the document has been scrolled vertically.
  - Indicates the current position of the viewport within the document.
* **`document.documentElement.scrollHeight`:**
  - Returns the total height of the entire document in pixels.
  - Includes the height of content that may extend beyond the viewport.

### Relationship Between Window and Document Heights

* **`window.innerHeight`** is the height of the viewport.
* **`document.documentElement.scrollTop`** is the number of pixels scrolled.
* **`document.documentElement.scrollHeight`** is the total document height.

### Example Usage


// Check if the user has scrolled to the bottom of the page


if (scrollPosition + viewportHeight+1 >= documentHeight) {
  console.log("Reached the bottom of the page!");
}
