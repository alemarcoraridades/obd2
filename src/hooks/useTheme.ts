// src/hooks/useTheme.ts
import themeColors from '../styles/colors';
import fonts from '../styles/fonts';

export const useTheme = () => {
  return {
    colors: themeColors,
    fonts,
    
    // Função auxiliar para aplicar estilos de texto
    getTextStyle: (variant: keyof typeof fonts) => {
      const fontConfig = fonts[variant];
      return {
        fontFamily: fontConfig.fontFamily,
        fontSize: `${fontConfig.fontSize}px`,
        fontWeight: fontConfig.fontWeight,
        ...(fontConfig.lineHeight && { lineHeight: `${fontConfig.lineHeight}px` }),
      };
    },
    
    // Função auxiliar para obter cores
    getColor: (colorName: keyof typeof themeColors) => {
      return themeColors[colorName];
    },
  };
};

export default useTheme;
