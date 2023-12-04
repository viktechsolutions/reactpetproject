import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import i18n from "i18next";


interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t} = useTranslation();
    const onToggle = () => {
        i18n.changeLanguage((i18n.language === 'ru' ? 'en' : 'ru'));
    };
    return (
        <Button theme={ThemeButton.CLEAR} onClick={onToggle} className={classNames(cls.LangSwitcher, {}, [className])}>
            {t("Язык")}
        </Button>
    );
};

