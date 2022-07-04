import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import Avatar from './Avatar';
import styles from './Comment.module.css';

const Comment = ({ author, publishedAt, text, likes, onDelete, id }) => {
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});
	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const [likeCount, setLikeCount] = useState(likes);

	function handleAddLike() {
		setLikeCount((previousValue) => previousValue + 1);
	}
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} link={author.avatarUrl} />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>{author.name}</strong>

							<time
								title={publishedDateFormatted}
								dateTime={publishedAt.toISOString()}
							>
								{publishedDateRelativeToNow}
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
					<button onClick={handleAddLike}>
						<ThumbsUp />
						Curtir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
};

export default Comment;
