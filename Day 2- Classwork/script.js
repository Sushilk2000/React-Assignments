const headerElement = React.createElement(
  "h1", //konsa tag
  {
    className: "header",
    style: {
      display: "flex",
      color: "green",
    },
    //attributes
  },
  "Learn Web Development" // content kya chahiye (innerHTML)
);

const div1 = React.createElement(
  "div", //tag
  { className: "divs" }, //attributes
  React.createElement(
    //element
    "p",
    null,
    "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites." //context
  )
);

const div2 = React.createElement(
  "div",
  { className: "divs" },
  React.createElement(
    "p",
    null,
    'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ',
    React.createElement("a", { href: "#" }, "the rest of the MDN"),
    ", and other intermediate to advanced resources that assume a lot of previous knowledge."
  )
);

const div3 = React.createElement(
  "div",
  { className: "divs" },
  React.createElement(
    "p",
    null,
    "If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."
  )
);

const rootElement = React.createElement(
  "div",
  { className: "container" },
  headerElement,
  div1,
  div2,
  div3
);

ReactDOM.render(rootElement, document.getElementById("root"));
