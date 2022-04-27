import Styles from './CardTemp.module.css';

export default function CardTemp ({label, value}) {
    return (
    <div className={Styles.Temp}>
        <label>{label}</label>
        <span>{value}</span>
    </div>
    )
};