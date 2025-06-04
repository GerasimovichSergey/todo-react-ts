import { Theme, Themes } from '../models/theme';


const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: 'rgb(70, 130, 180)',
        backgroundSecondary: 'rgb(237, 240, 241)',
    },
};

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: 'black',
        backgroundSecondary: 'gray',
    },
};

export const themes: Themes = {
    light: light,
    dark: dark,
};