"use client";

import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable APIs with Node.js and Express",
      date: "April 29, 2025",
      excerpt:
        "Learn how to build a scalable RESTful API with Node.js and Express. This guide will walk you through the setup, handling API routes, and database integration for production-ready APIs.",
      author: "Affnan Sawad",
      slug: "https://nodejs.org/en",
    },
    {
      title: "Understanding Redux for State Management in React",
      date: "April 26, 2025",
      excerpt:
        "Redux is a powerful state management library for React. In this blog, we’ll go over the fundamentals of Redux, how to use it, and why it can make your applications more manageable.",
      author: "Affnan Sawad",
      slug: "https://redux.js.org/",
    },
    {
      title: "A Deep Dive into PostgreSQL for Full-Stack Developers",
      date: "April 24, 2025",
      excerpt:
        "PostgreSQL is a powerful relational database that is widely used in full-stack development. In this post, we’ll explore PostgreSQL's features, how it differs from other databases, and best practices for using it.",
      author: "Affnan Sawad",
      slug: "https://www.postgresql.org/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200  to-purple-300 px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <h1 className="text-5xl font-extrabold text-white text-center mb-12">Welcome to Our Blog</h1>

        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105"
          >
            <h2 className="text-3xl font-bold text-indigo-700 mb-3">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{post.date} | By {post.author}</p>
            <p className="text-lg text-gray-700 mb-4">{post.excerpt}</p>
            <Link
              href={post.slug}
              className="text-indigo-600 hover:text-indigo-700 font-semibold mt-4 inline-block"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
