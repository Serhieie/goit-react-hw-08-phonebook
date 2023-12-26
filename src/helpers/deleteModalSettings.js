const windowWidth = window.innerWidth;
const settings = {
  overlay: {
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(250, 250, 210, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: 'rgb(245, 187, 86)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: windowWidth > 768 ? '60px 40px' : '20px 10px',
  },
};

const settings2 = {
  overlay: {
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(48, 45, 62, 0.3)',
  },
  content: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: 'rgb(4, 23, 55)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: windowWidth > 768 ? '60px 40px' : '20px 10px',
  },
};

export { settings, settings2 };
