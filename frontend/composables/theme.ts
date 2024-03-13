import { defineStore } from "pinia"

export type Theme = 'main' | 'dark' | 'bright';

export interface IThemeColors {
    color1?: string,
    color2?: string,
    color3?: string,
    color4?: string,
    color5?: string,
    color6?: string,
    colorHealthBar?: string,
    colorEnergyBar?: string,
    colorExperienceBar?: string,
}

export interface ITheme {
    colors: IThemeColors & Record<string, string>,
}

type IThemeStore = (
    Record<'themeName', Theme> &
    Record<Theme, ITheme>
)

function mergeThemes(...themes: ITheme[]): ITheme {
    return themes.reduce((acc, theme) => {
        return {
            colors: Object.assign({}, acc.colors, theme.colors),
        }
    }, {} as ITheme)
}

export const useTheme = defineStore({
    id: 'theme',
    state: () => ({
        themeName: 'bright',
        main: {
            colors: {
                color1: "#FFC746",
                color2: "#4E4637",
                color3: "#B5AA99",
                color4: "#00D1A3",
                color5: "#009970",
                color6: "#DBE0D5",

                colorHealthBar: "#FF5E5E",
                colorEnergyBar: "#5E81FF",
                colorExperienceBar: "#FFAB5E",
            }
        },
        bright: {
            colors: {}
        },
        dark: {
            colors: {}
        },
    } as IThemeStore),
    getters: {
        theme: (state) => mergeThemes(state['main'], state[state.themeName]),
    }
});