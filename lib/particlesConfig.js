export const getParticlesConfig = (isDarkMode) => ({
  autoPlay: true,
  background: {
    opacity: 0
  },
  fullScreen: {
    enable: false,
    zIndex: 1
  },
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: isDarkMode ? ["#ffffff", "#a5b4fc", "#93c5fd"] : ["#3b82f6", "#6366f1", "#8b5cf6"],
      animation: {
        enable: true,
        speed: 10,
        sync: false
      }
    },
    shape: {
      type: ["circle"],
      options: {}
    },
    opacity: {
      value: 0.4,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: {
        enable: true,
        minimumValue: 1
      },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: isDarkMode ? "#ffffff20" : "#00000020",
      opacity: 0.4,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.05
      }
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      },
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.5
        }
      },
      push: {
        quantity: 3
      }
    }
  },
  detectRetina: true
});
