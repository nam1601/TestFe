import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import logo from '~/asset/images/logoNCC 1.png';
import cssLogo from '~/asset/images/css-icon 1.png';
import htmlLogo from '~/asset/images/html-icon 1.png';
import urlLogo from '~/asset/images/url-icon 1.png';
import Feature from '~/Feature/Feature';
const cx = classNames.bind(styles);
const title = 'Lorem ipsum dolor sit asmet?';
const desc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.';
function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={logo} alt="logo" />
            </div>
            <div className={cx('about')}>
                <h3 className={cx('about__title')}>
                    Lorem ipsum dolor sit asmet?
                </h3>
                <p className={cx('about__description')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tristique consequat placerat. Vestibulum auctor pellentesque
                    sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                    turpis. Nam facilisis, ligula in mattis sodales, augue justo
                    tristique nulla, sed lacinia ante eros ut mi. Morbi vitae
                    diam augue. Aliquam vel mauris a nibh auctor commodo.
                    Praesent et nisi eu justo eleifend convallis. Quisque
                    suscipit maximus vestibulum. Phasellus congue mollis orci,
                    sit amet luctus augue tristique eu. Donec vulputate odio
                    neque, sed semper turpis pellentesque a.
                </p>
            </div>
            <div className={cx('feature')}>
                <Feature title={title} desc={desc} img={cssLogo} />
                <Feature title={title} desc={desc} img={htmlLogo} />
                <Feature title={title} desc={desc} img={urlLogo} />
            </div>
        </div>
    );
}

export default Content;
