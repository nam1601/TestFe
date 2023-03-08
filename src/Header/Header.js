import classNames from 'classnames/bind';

import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('nav__bar')}>
                <ul className={cx('nav__list')}>
                    <li className={cx('nav__list-item')}>Home</li>
                    <li className={cx('nav__list-item')}>Sẻvices</li>
                    <li className={cx('nav__list-item')}>Home</li>
                    <li className={cx('nav__list-item')}>Home</li>
                    <li className={cx('nav__list-item')}>Home</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
