/**
 * Flightdeck - VGS Cursor - A visual guidance system (VGS)
 * @description Initializes a custom cursor that interacts with links.
 * @function VGSCursor
 * @returns {void}
 */
export function VGSCursor() {
  /**
   * The cursor element.
   * @type {HTMLElement}
   */
  const cursorElement = document.querySelector(".vgs-cursor");

  if (cursorElement) {
    /**
     * The inner cursor element.
     * @type {HTMLElement}
     */
    const innerCursor = document.querySelector(".cursor-inner");

    /**
     * The outer cursor element.
     * @type {HTMLElement}
     */
    const outerCursor = document.querySelector(".cursor-outer");

    /**
     * The y-coordinate of the mouse.
     * @type {number}
     */
    let mouseY;

    /**
     * The x-coordinate of the mouse.
     * @type {number}
     */
    let mouseX = 0;

    /**
     * Whether the cursor is hovering over a clickable element.
     * @type {boolean}
     */
    let isHovering = false;

    /**
     * Updates the position of the cursor based on the mouse position.
     * @function updateCursor
     * @param {MouseEvent} event - The mouse event.
     * @returns {void}
     */
    function updateCursor(event) {
      if (!isHovering) {
        outerCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        innerCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        mouseY = event.clientY;
        mouseX = event.clientX;
      }
    }

    /**
     * Handles the mouseover event for clickable elements.
     * @function handleMouseOver
     * @param {MouseEvent} event - The mouse event.
     * @returns {void}
     */
    function handleMouseOver(event) {
      if (event.target.matches("a, .cursor-pointer")) {
        innerCursor.classList.add("cursor-hover");
        outerCursor.classList.add("cursor-hover");
        isHovering = true;
      }
    }

    /**
     * Handles the mouseout event for clickable elements.
     * @function handleMouseOut
     * @param {MouseEvent} event - The mouse event.
     * @returns {void}
     */
    function handleMouseOut(event) {
      if (
        !event.target.matches("a, .cursor-pointer") &&
        (!event.relatedTarget || !event.relatedTarget.matches("a, .cursor-pointer"))
      ) {
        innerCursor.classList.remove("cursor-hover");
        outerCursor.classList.remove("cursor-hover");
        isHovering = false;
      }
    }

    window.addEventListener("mousemove", updateCursor);
    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseout", handleMouseOut);

    innerCursor.style.visibility = "visible";
    outerCursor.style.visibility = "visible";
  }
}
