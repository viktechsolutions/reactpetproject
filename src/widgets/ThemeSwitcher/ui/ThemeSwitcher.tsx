import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/provideres/ThemeProvider";
import DarkMode from 'shared/assets/icons/darkMode.svg';
import LightMode from 'shared/assets/icons/lightMode.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
  <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
    {theme ===  Theme.DARK ? <DarkMode style={{width: 28, height: 28}} /> : <LightMode style={{width: 28, height: 28}}/>}
  </Button>
    );
};

