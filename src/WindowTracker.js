import React from 'react';

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return <h2>Window width : {windowWidth}</h2>;
}
