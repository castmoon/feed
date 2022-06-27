import { format, formatDistanceToNow, set } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import Avatar from './Avatar';
import Comment from './Comment';
import styles from './Post.module.css';

const Post = ({ author, content, publishedAt }) => {
	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const [comment, setComment] = useState([
		{
			id: 1,
			author: {
				avatarUrl: 'https://github.com/castmoon.png',
				name: 'Guilherme martins',
			},
			text: 'muito bom!',
			publishedAt: new Date('2022-05-03 20:00:00'),
			likes: 20,
		},
		{
			id: 2,
			author: {
				avatarUrl: 'https://github.com/dannielss.png',
				name: 'Guilherme martins',
			},
			text: 'massa!',
			publishedAt: new Date('2022-05-03 20:00:00'),
			likes: 20,
		},
	]);

	const [commentText, setCommentText] = useState('');

	function handleCreateNewComment(event) {
		event.preventDefault();

		const newComment = {
			id: Math.floor(Math.random() * 100),
			author: {
				avatarUrl: 'https://github.com/castmoon.png',
				name: 'Guilherme martins',
			},
			text: commentText,
			publishedAt: new Date(Date.now()),
			likes: 1,
		};

		setComment([...comment, newComment]);
		setCommentText('');
	}

	function handleRemoveAComment(id) {
		const filteredComments = comment.filter((comment) => comment.id !== id);
		setComment([...filteredComments]);
	}
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar link={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === 'paragraph') {
						return <p>{line.content}</p>;
					}
					if (line.type === 'link') {
						return (
							<p>
								<a href="#">{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form
				onSubmit={handleCreateNewComment}
				className={styles.commentForm}
			>
				<strong>Deixe seu comentário</strong>

				<textarea
					onChange={(e) => setCommentText(e.target.value)}
					placeholder="Comentário"
					value={commentText}
				/>

				<footer>
					<button type="submit">Comentar</button>
				</footer>
			</form>

			<div className={comment}>
				{comment.map((comment) => (
					<Comment
						key={comment.id}
						author={comment.author}
						publishedAt={comment.publishedAt}
						text={comment.text}
						id={comment.id}
						onDelete={handleRemoveAComment}
					/>
				))}
			</div>
		</article>
	);
};

export default Post;
