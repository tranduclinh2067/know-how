import React from 'react';
import Link from 'next/link';
import vetnamese_slug from 'vietnamese-slug';
import Image from 'next/image';

function IndexPage(props) {
    
    return (
        <div>
            <h1>Post list</h1>
            <ul>
                { props.posts.map((post, id) => {
                    return (
                        <li key={id}>
                            <Link href={`/post/${vetnamese_slug(post.title)}`}>
                                <a>{post.title}</a>
                            </Link>
                            <p>
                                <Link href={`/category/${post.category}`}>
                                    <a>#{post.category}</a>
                                </Link>
                            </p>
                            <p>
                                {post.category}
                            </p>
                            <p>Trần Đức Lĩnh</p>
                        </li>
                    );
                })}
            </ul>
            <hr />
        </div>
    );
}

export async function getStaticProps() {
    const fs = require('fs');
    const matter = require('gray-matter');
    const { v4: uuid } = require('uuid');

    const files = fs.readdirSync(`${process.cwd()}/src/contents`, 'utf-8');

    const posts = files
        .filter((fn) => fn.endsWith('.md'))
        .map((fn) => {
            const path = `${process.cwd()}/src/contents/${fn}`;
            const rawContent = fs.readFileSync(path, {
                encoding: 'utf-8',
            });
            const { data } = matter(rawContent);

            return { ...data, id: uuid() };
        });

        return {
            props: { posts },
        };
};

// generate HTML paths at build time
export async function getStaticPaths(context) {
    const fs = require("fs");

    const path = `${process.cwd()}/src/contents`;
    const files = fs.readdirSync(path, "utf-8");

    const markdownFileNames = files
        .filter((fn) => fn.endsWith(".md"))
        .map((fn) => fn.replace(".md", ""));

    return {
        paths: markdownFileNames.map((fileName) => {
            return {
                params: {
                slug: fileName,
                },
            };
        }),
        fallback: false,
    };
}

export default IndexPage;