import { Pen, PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1656259656295-cb3d0c2a383b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
				alt=""
			/>

			<div className={styles.profile}>
				<img
					className={styles.avatar}
					src="https://avatars.githubusercontent.com/u/61637963?v=4"
					alt=""
				/>
				<strong>Guilherme Martins</strong>
				<span>Fullstack developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20} /> Editar seu perfil
				</a>
			</footer>
		</aside>
	);
};

export default Sidebar;
