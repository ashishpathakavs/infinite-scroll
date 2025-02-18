# infinite-scroll
Created with CodeSandbox
const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom) {
      console.log("Scrolled to bottom!");
      setPage((prev) => prev + 1);
    }
  };
