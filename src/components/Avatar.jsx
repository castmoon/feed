import styles from './Avatar.module.css';

const Avatar = ({ link, hasBorder = true }) => {
	return (
		<img
			src={link}
			alt=""
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
		/>
	);
};

export default Avatar;
