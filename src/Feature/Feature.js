import classNames from 'classnames/bind';
import styles from './Feature.module.scss';
const cx = classNames.bind(styles);
function Feature({ ...props }) {
    return (
        <div className={cx('wrapper')}>
            <h2>{props.title}</h2>
            <div className={cx('content')}>
                <img src={props.img} alt={props.img} />

                <span>{props.desc}</span>
            </div>
        </div>
    );
}

export default Feature;
