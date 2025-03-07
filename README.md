# infinite-scroll
```javascript
const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom) {
      console.log("Scrolled to bottom!");
      setPage((prev) => prev + 1);
    }
};


- **`e.target.scrollHeight`**: This gives the total height of the content inside the scrollable element, including the hidden (non-visible) content.

- **`e.target.scrollTop`**: This is the number of pixels the content of the element has been scrolled vertically.

- **`e.target.clientHeight`**: This is the height of the visible part of the element (the viewport height).

