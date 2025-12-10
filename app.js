// PUT YOUR CODE HERE

const boxTimeline = gsap.timeline();

boxTimeline
  .from(".red", {
    y: "-100%",
    x: "-100%",
    duration: 0.5,
  })
  .from(".green", {
    y: "-100%",
    x: "100%",
    duration: 0.5,
  })
  .from(".blue", {
    y: "100%",
    x: "100%",
    duration: 0.5,
  })
  .from(".yellow", {
    y: "100%",
    x: "-100%",
    duration: 0.5,
  })
  .to(".red", {
    left: "100vw",
    x: "-100%",
    borderRadius: "100%",
    backgroundColor: "green",
    duration: 1,
  })
  .to(
    ".green",
    {
      top: "100vh",
      y: "-100%",
      borderRadius: "100%",
      duration: 1,
      backgroundColor: "blue",
    },
    "<"
  )
  .to(
    ".blue",
    {
      right: "100vw",
      x: "100%",
      borderRadius: "100%",
      duration: 1,
      backgroundColor: "yellow",
    },
    "<"
  )
  .to(
    ".yellow",
    {
      bottom: "100vh",
      y: "100%",
      borderRadius: "100%",
      duration: 1,
      backgroundColor: "red",
    },
    "<"
  )
  .to(".red", {
    x: "100%",
    duration: 1,
  })
  .to(
    ".green",
    {
      x: "100%",
      duration: 1,
    },
    "<"
  )
  .to(
    ".blue",
    {
      x: "-100%",
      duration: 1,
    },
    "<"
  )
  .to(
    ".yellow",
    {
      x: "-100%",
      duration: 1,
    },
    "<"
  );
