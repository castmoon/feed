import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from './Avatar';
import styles from './Comment.module.css';

const Comment = ({ author, publishedAt, text, likes, onDelete, id }) => {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} link={author.avatarUrl} />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>{author.name}</strong>
							<time dateTime="2022-05-11 08:13:30">
								Cerca de 1h atrás
							</time>
						</div>

						<button
							title="Deletar comentário"
							onClick={() => onDelete(id)}
						>
							<Trash size={24} />
						</button>
					</header>

					<p>{text}</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Curtir <span>{likes}</span>
					</button>
				</footer>
			</div>
		</div>
	);
};

export default Comment;
