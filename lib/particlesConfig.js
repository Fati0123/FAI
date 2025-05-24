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
      value: 120,
      density: {
        enable: true,
        value_area: 1200
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
      value: 0.5,
      random: true,
      animation: {
        enable: true,
        speed: 1.2,
        minimumValue: 0.15,
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
        speed: 3,
        minimumValue: 0.5,
        sync: false,
        startValue: "random",
        destroy: "min"
      }
    },
    links: {
      enable: true,
      distance: 180,
      color: isDarkMode ? "#00F5FF60" : "#0095FF60",
      opacity: 0.3,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.02
      },
      shadow: {
        enable: true,
        color: isDarkMode ? "#00F5FF" : "#0095FF",
        blur: 8
      }
    },
    move: {
      enable: true,
      speed: 1.8,
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
        rotateX: 2000,
        rotateY: 2000,
        distance: 200
      },
      path: {
        enable: true,
        delay: {
          value: 0.1
        },
        options: {
          size: 20,
          draw: false
        }
      },
      trail: {
        enable: true,
        length: 5,
        fill: { color: isDarkMode ? "#7B61FF10" : "#5B4DFF08" }
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble", "repulse"],
        parallax: {
          enable: true,
          force: 50,
          smooth: 20
        }
      },
      onClick: {
        enable: true,
        mode: ["push", "attract", "trail"]
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 250,
        links: {
          opacity: 0.7,
          color: isDarkMode ? "#00F5FF" : "#0095FF",
          consent: true
        }
      },
      bubble: {
        distance: 250,
        size: 12,
        duration: 2,
        opacity: 0.8,
        speed: 3,
        color: isDarkMode ? "#FF2E63" : "#FF0080"
      },
      repulse: {
        distance: 150,
        duration: 0.4,
        speed: 1
      },
      attract: {
        distance: 200,
        duration: 0.4,
        factor: 5,
        easing: "ease-out-quad"
      },
      push: {
        particles_nb: 4,
        default: true
      },
      trail: {
        delay: 0.1,
        quantity: 3
      }
    }
  },
  detectRetina: true,
  fpsLimit: 120,
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
