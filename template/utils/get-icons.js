const files = require.context('../assets/svg/', true, /\.svg$/);
const components = files.keys().reduce((icons, path) => {
  const file = path.replace('./', '');
  const key = file.replace('.svg', '');
  icons[key] = async () => import(`~/assets/svg/${file}`);
  return icons;
}, {});

export default components;
