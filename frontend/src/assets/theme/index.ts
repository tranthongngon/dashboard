import { PaletteMode, createTheme } from "@mui/material";
import colorsDark from "./base/color-dark";
import colorsLight from "./base/color-light";

const getDesignTokens = (mode: PaletteMode) => ({
 palette: {
  mode,
  ...(mode === 'light' ? colorsLight : colorsDark)
 }
})
export {getDesignTokens};