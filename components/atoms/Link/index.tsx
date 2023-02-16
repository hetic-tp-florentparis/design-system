import styles from './Link.module.scss';

type Link = {
  children: string;
  href: string;
};

export default function Link({ children, href }: Link) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}
