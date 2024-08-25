
export const particleOptions: any = {
fpsLimit: 120,
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 700,
      },
    },
    color: {
      value: ["#999"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: { min: 1, max: 5 },
    },
    links: {
      enable: true,
      distance: 150,
      color: ["#808080", "#F072B6"],
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out",
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 1,
      },
    },
  },
};
