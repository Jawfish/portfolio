import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';
import Link from 'next/link';

const serialize = children =>
	children.map((node, i) => {
		if (Text.isText(node)) {
			let text = (
				<span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
			);

			if (node.bold) {
				text = <strong key={i}>{text}</strong>;
			}

			if (node.code) {
				text = <code key={i}>{text}</code>;
			}

			if (node.italic) {
				text = <em key={i}>{text}</em>;
			}

			return <Fragment key={i}>{text}</Fragment>;
		}

		if (!node) {
			return null;
		}

		switch (node.type) {
			case 'h1':
				return (
					<h1
						className="mt-12 mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50"
						key={i}>
						{serialize(node.children)}
					</h1>
				);
			case 'h2':
				return (
					<h2
						className="-mt-4 text-base font-semibold text-zinc-400 dark:text-zinc-600"
						key={i}>
						{serialize(node.children)}
					</h2>
				);
			case 'h3':
				return (
					<h3 className="font-semibold text-zinc-700" key={i}>
						{serialize(node.children)}
					</h3>
				);
			case 'quote':
				return <blockquote key={i}>{serialize(node.children)}</blockquote>;
			case 'ul':
				return (
					<ul className="-my-2" key={i}>
						{serialize(node.children)}
					</ul>
				);
			case 'ol':
				return (
					<ol className="my-0" key={i}>
						{serialize(node.children)}
					</ol>
				);
			case 'li':
				return (
					<li className="my-0" key={i}>
						{serialize(node.children)}
					</li>
				);
			case 'link':
				return (
					<Link
						key={i}
						href={escapeHTML(node.url)}
						passHref={true}
						target="_blank"
						className="text-emerald-500 transition-all hover:text-emerald-400">
						{serialize(node.children)}
					</Link>
				);

			default:
				return (
					<p className="my-4" key={i}>
						{serialize(node.children)}
					</p>
				);
		}
	});

export default serialize;
