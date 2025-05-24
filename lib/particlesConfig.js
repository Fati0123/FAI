export const getParticlesConfig = (isDarkMode) => ({
  autoPlay: true,
  background: {
    opacity: 0
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: [
        isDarkMode ? "#00F5FF" : "#0095FF", // Cyan/Blue
        isDarkMode ? "#FF2E63" : "#FF0080", // Pink
        isDarkMode ? "#08FFC8" : "#00FFB2", // Mint
        isDarkMode ? "#7B61FF" : "#5B4DFF"  // Purple
      ],
      animation: {
        enable: true,
        speed: 12,
        sync: false
      }
    },
    shape: {
      type: ["circle", "square", "polygon"],
      options: {
        polygon: {
          sides: 6
        }
      }
    },
    opacity: {
      value: 0.6,
      random: true,
      animation: {
        enable: true,
        speed: 0.8,
        minimumValue: 0.2,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      animation: {
        enable: true,
        speed: 1.5,
        minimumValue: 1,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: isDarkMode ? "#00F5FF80" : "#0095FF80",
      opacity: 0.4,
      width: 1.5,
      triangles: {
        enable: true,
        opacity: 0.03
      },
      shadow: {
        enable: true,
        color: isDarkMode ? "#00F5FF" : "#0095FF",
        blur: 6
      }
    },
    move: {
      enable: true,
      speed: 1.8,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out"
      },
      attract: {
        enable: true,
        rotateX: 1200,
        rotateY: 1200
      },
      trail: {
        enable: true,
        length: 3,
        fill: { color: isDarkMode ? "#7B61FF15" : "#5B4DFF10" }
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onHover: {
        enable: true,
        mode: ["connect", "bubble"],
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
      onClick: {
        enable: true,
        mode: ["push", "attract"]
      },
      resize: true
    },
    modes: {
      connect: {
        distance: 180,
        links: {
          opacity: 0.5,
          color: isDarkMode ? "#00F5FF" : "#0095FF"
        },
        radius: 120
      },
      bubble: {
        distance: 200,
        size: 15,
        duration: 1.5,
        opacity: 0.7,
        color: isDarkMode ? "#FF2E63" : "#FF0080"
      },
      attract: {
        distance: 200,
        duration: 0.4,
        factor: 3
      },
      push: {
        particles_nb: 6
      }
    }
  },
  detectRetina: true,
  fpsLimit: 120,
  fullScreen: {
    enable: false,
    zIndex: -1
  },
  responsive: [
    {
      maxWidth: 768,
      options: {
        particles: {
          number: {
            value: 40
          },
          size: {
            value: 3,
            animation: {
              speed: 1
            }
          }
        }
      }
    }
  ]
});
