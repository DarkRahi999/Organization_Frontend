// W<Comment>---------={ Reusable fadeUp animation function }=----------</Comment>
export const fadeUpAnimation = (y = 0, duration = 0, delay = 0) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay },
});

// W<Comment>---------={ Reusable fadeRight animation function }=----------</Comment>
export const fadeRightAnimation = (x = 20, duration = 0.5, delay = 0) => ({
  initial: { opacity: 0, x },
  animate: { opacity: 1, x: 0 },
  transition: { duration, delay },
});

// W<Comment>---------={ FadeUp Animation }=----------</Comment>
export const fadeUp = {
  hidden: (y = 0) => ({
    opacity: 0,
    y: y,
  }),
  visible: ({ delay = 0, y = 0 } = {}) => ({
    opacity: 1,
    y: y,
    transition: { duration: 0.8, delay },
  }),
};
