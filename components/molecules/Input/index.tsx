import Field from '../../atoms/Field';
import styles from './Input.module.scss';

type Input = {
  label: string;
  type: string;
  placeholder: string;
};

export default function Input({ label, type, placeholder }: Input) {
  return (
    <div className={styles.input}>
      <label className={styles.input_label}>{label}</label>
      <Field type={type} placeholder={placeholder} />
    </div>
  );
}
