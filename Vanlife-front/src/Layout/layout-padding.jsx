export default function layoutPadding(screenWidth) {
  return screenWidth > 580
    ? "layout-padding "
    : screenWidth > 360
    ? "layout-padding-mobile"
    : "layout-padding-mobile--s";
}
