import React, {Suspense} from 'react';
import "./styles/index.scss";
import {useTheme} from "app/provideres/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/provideres/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

import "shared/config/i18n/i18n";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </Suspense>
        </div>
    );
};

export default App;