export const BodyChanger = isThemeDark => {
  const root = document.documentElement;

  if (isThemeDark) {
    root.style.setProperty('--scrollbar-thumb-light', 'rgb(26, 29, 39)');
    root.style.setProperty('--scrollbar-track-light', 'rgba(64, 81, 127, 0.5)');
    document.body.style.backgroundColor = 'var(--scrollbar-body-dark)';
  } else {
    root.style.setProperty('--scrollbar-thumb-light', 'rgb(215, 159, 63)');
    root.style.setProperty(
      '--scrollbar-track-light',
      'rgba(250, 250, 210, 0.5)'
    );

    document.body.style.backgroundColor = 'var(--scrollbar-body-light)';
  }
};
