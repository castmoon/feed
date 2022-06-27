import Post from './components/Post';
import Header from './components/Header';
import './global.css';
import styles from './App.module.css';
import Sidebar from './components/Sidebar';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/castmoon.png',
			name: 'Guilherme martins',
			role: 'Fullstack developer',
		},
		content: [
			{
				type: 'paragraph',
				content: 'Olá',
			},
			{
				type: 'paragraph',
				content:
					'Acabei de enviar o link do artigo que escrevi sobre tipos no typescript',
			},
			{
				type: 'link',
				content: 'link',
			},
		],
		publishedAt: new Date('2022-05-03 20:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/dannielss.png',
			name: 'Daniel de Sousa',
			role: 'Front end developer',
		},
		content: [
			{
				type: 'paragraph',
				content: 'Eai',
			},
			{
				type: 'paragraph',
				content: 'Olha que massa essa lib de animações que encontrei',
			},
			{
				type: 'link',
				content: 'link',
			},
		],
		publishedAt: new Date('2022-06-10 20:00:00'),
	},
];

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post
							key={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					))}
				</main>
			</div>
		</div>
	);
}

export default App;
