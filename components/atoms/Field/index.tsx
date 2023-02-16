import styles from './Field.module.scss';

type Field = {
  placeholder: string;
  type: string;
};

export default function Field({ placeholder, type }: Field) {
  return (
    <input
      className={styles.field}
      type={type}
      placeholder={placeholder || 'Write here...'}
    />
  );
}
