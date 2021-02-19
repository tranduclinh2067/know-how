import React from "react";

function PostPostPage(props) {
    return (
        <div>
        <h1>{props.post.title}</h1>
        <p>{props.post.category}</p>
        <section
            dangerouslySetInnerHTML={{ __html: props.post.content }}
        ></section>
        </div>
    );
}

// pass props to PostPostPage component
export async function getStaticProps(context) {
    const fs = require("fs");
    const html = require("remark-html");
    const highlight = require("remark-highlight.js");
    const unified = require("unified");
    const markdown = require("remark-parse");
    const matter = require("gray-matter");

    const slug = context.params.slug; // get slug from params
    const path = `${process.cwd()}/src/contents/${slug}.md`;
    
    // read file content and store into rawContent variable
    const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
    });

    const { data, content } = matter(rawContent);

    const result = await unified()
        .use(markdown)
        .use(highlight) // highlight code block
        .use(html)
        .process(content); // pass content to process

    return {
        props: {
        post: {
            ...data,
            content: result.toString(),
        },
        },
    };
}

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
};

export default PostPostPage;