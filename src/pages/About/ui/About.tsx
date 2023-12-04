import React from 'react';
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation();
    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default About;