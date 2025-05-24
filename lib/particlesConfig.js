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
      value: 80,
      density: {
        enable: true,
        value_area: 1200
      }
    },
    color: {
      value: [
        isDarkMode ? "#ffffff" : "#000000", // White/Black
        isDarkMode ? "#a5b4fc" : "#3b82f6", // Indigo/Blue
        isDarkMode ? "#c4b5fd" : "#6366f1", // Purple/Indigo
        isDarkMode ? "#93c5fd" : "#0ea5e9"  // Light Blue/Sky
      ],
      animation: {
        enable: true,
        speed: 8,
        sync: false
      }
    },
    shape: {
      type: ["circle", "square"],
      options: {
        polygon: {
          sides: 6
        }
      }
    },
    opacity: {
      value: 0.3,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 2.5,
      random: {
        enable: true,
        minimumValue: 0.8
      },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5,
        sync: false,
        startValue: "random",
        destroy: "min"
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: isDarkMode ? "#ffffff40" : "#00000040",
      opacity: 0.2,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.01
      },
      shadow: {
        enable: false
      }
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out",
        top: "bounce",
        bottom: "bounce"
      },
      attract: {
        enable: true,
        rotateX: 1200,
        rotateY: 1200,
        distance: 200
      },
      path: {
        enable: true,
        delay: {
          value: 0.1
        }
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"]
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
          opacity: 0.4
        }
      },
      bubble: {
        distance: 200,
        size: 4,
        duration: 2,
        opacity: 0.8
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
});
