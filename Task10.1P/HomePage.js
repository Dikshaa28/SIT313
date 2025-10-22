import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="home">
      <section className="intro">
        <h1>Welcome to DEV@Deakin</h1>
        <p>Your community for learning, coding, and collaboration.</p>
      </section>

      <section className="posts">
        <h2>Latest Posts</h2>
        <div className="post-grid">
          <div className="post-card">
            <h3>✨ How to build a React App</h3>
            <p>Learn the basics of React, JSX, and components in this beginner-friendly tutorial.</p>
          </div>
          <div className="post-card">
            <h3>🔐 Securing your Frontend</h3>
            <p>Explore authentication, HTTPS, and secure data handling for front-end apps.</p>
          </div>
          <div className="post-card">
            <h3>☁️ Deploying to the Cloud</h3>
            <p>Step-by-step guide to deploy your app to AWS, Vercel, or Netlify.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About DEV@Deakin</h2>
        <p>
          DEV@Deakin is a platform for students and developers to share knowledge, grow skills,
          and connect through projects.
        </p>
      </section>
    </main>
  );
}

export default HomePage;