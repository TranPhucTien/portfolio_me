import { useContext } from 'react';
import classNames from 'classnames/bind';
import Infomation from './components/Infomation';
import Selection from './components/Selection';
import styles from './Info.module.scss';
import { ThemeContext } from '~/ThemeContext';

const cx = classNames.bind(styles);

function Info() {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    return (
        <div className={cx('wrapper')} style={{ background: darkMode ? 'var(--night)' : 'var(--background-darker)' }}>
            <div className={'container'}>
                <div className={'sub-header-container'}>
                    <hr />
                    <h5 className={'sub-header'}>About</h5>
                </div>
            </div>
            <div className={classNames(styles.container, 'container')}>
                <div
                    className={cx('selection')}
                    style={{
                        background: darkMode ? ' rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.5)',
                    }}
                >
                    <Selection />
                </div>
                <div
                    className={cx('show')}
                    style={{
                        background: darkMode ? ' rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.5)',
                    }}
                >
                    <Infomation />
                </div>
            </div>
        </div>
    );
}

export default Info;
