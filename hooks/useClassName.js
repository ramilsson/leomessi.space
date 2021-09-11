export default function useClassName(name, styles, styleProps) {
  return Object.entries(styleProps).reduce((className, [key, value]) => {
    const style = styles[`${key}-${value}`];
    return style ? (className += ` ${style}`) : className;
  }, styles[name]);
}
