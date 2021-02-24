// This function returns the users preferred color scheme preference
export function getPrefColorScheme() {
  if (!window.matchMedia) return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function getInitialMode() {
  const isReturningUser = 'dark' in localStorage;
  const savedMode = JSON.parse(localStorage.getItem('dark'));
  const userPrefersDark = getPrefColorScheme();
  // if mode was saved --> dark / light
  if (isReturningUser) {
    return savedMode;
    // if preferred color scheme is dark --> dark
  } if (userPrefersDark) {
    return true;
    // otherwise --> light
  }
  return false;
}
