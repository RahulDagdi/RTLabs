import React, { useState } from "react";
import "./BlogPage.css";

const blogs = [
  {
    id: 1,
    title: "Top Digital Marketing Jobs for Freshers You Should Know",
    img: "/img/graphics-design-course/illustrator Tools.png",
    category: "Career",
    desc: "Digital marketing is one of the fastest-growing fields today, with hundreds of companies actively hiring fresh graduates. Whether you're a creative thinker or an analytical mind, there's a role for everyone. From SEO specialists to social media managers, explore the most in-demand digital marketing jobs available for freshers in 2026.",
    date: "March 15, 2026",
    readTime: "5 min read",
    author: "Rahul Sharma",
  },
  {
    id: 2,
    title: "What Is Email Marketing and How to Learn It",
    img: "/img/graphics-design-course/Photoshop Tools.png",
    category: "Email Marketing",
    desc: "Email marketing remains one of the highest ROI channels in digital marketing, generating up to $42 for every $1 spent. But what exactly is it, and how do you get started? In this guide, we break down everything from building your first email list to crafting campaigns that actually convert.",
    date: "March 18, 2026",
    readTime: "7 min read",
    author: "Priya Verma",
  },
  {
    id: 3,
    title: "Career in Digital Marketing From Fresher to Manager",
    img: "/img/graphics-design-course/Premier pro Tools.png",
    category: "Growth",
    desc: "Starting as a fresher in digital marketing can feel overwhelming, but with the right roadmap, you can grow from an entry-level executive to a marketing manager within 3–5 years. This guide covers the exact skills, certifications, and experience milestones you need to advance your career step by step.",
    date: "March 20, 2026",
    readTime: "9 min read",
    author: "Amit Joshi",
  },
  {
    id: 4,
    title: "Digital Marketing Guide: When to Use SEO and When to Use Ads",
    img: "/img/graphics-design-course/After effect Tools.png",
    category: "SEO & Ads",
    desc: "Many businesses struggle with deciding between organic SEO and paid advertising. The truth is — both have their place, and knowing when to use each strategy can make or break your marketing budget. We break down the decision-making framework so you can invest your time and money where it matters most.",
    date: "March 21, 2026",
    readTime: "6 min read",
    author: "Sneha Kapoor",
  },
  {
    id: 5,
    title: "How to Find High-Value Keywords: A Step-by-Step Keyword Research Guide",
    img: "/img/graphics-design-course/Coraldraw Tools.png",
    category: "SEO",
    desc: "Keyword research is the foundation of every successful SEO strategy. But not all keywords are created equal — you need to find the ones with high search volume, manageable competition, and strong conversion intent. This step-by-step guide walks you through the entire research process using free and paid tools.",
    date: "March 22, 2026",
    readTime: "8 min read",
    author: "Karan Mehta",
  },
  {
    id: 6,
    title: "What Is On-Page and Off-Page SEO? How They Impact a Website",
    img: "/img/graphics-design-course/illustrator Tools.png",
    category: "SEO",
    desc: "SEO has two major pillars — on-page and off-page optimization. On-page SEO focuses on elements within your website like content, meta tags, and internal linking, while off-page SEO covers external signals like backlinks and brand mentions. Understanding both is essential for ranking higher on Google.",
    date: "March 23, 2026",
    readTime: "6 min read",
    author: "Divya Nair",
  },
  {
    id: 7,
    title: "Best Google Ads Training Course with AI",
    img: "/img/graphics-design-course/Photoshop Tools.png",
    category: "Google Ads",
    desc: "Google Ads is evolving fast with AI-powered features like Performance Max and Smart Bidding. To stay competitive, you need training that keeps up with these changes. We've reviewed the top Google Ads training courses that incorporate AI tools to help you master modern paid advertising in 2026.",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Rahul Sharma",
  },
  {
    id: 8,
    title: "AEO vs SEO: What's the Difference and Why It Matters in Digital Marketing",
    img: "/img/graphics-design-course/Premier pro Tools.png",
    category: "SEO",
    desc: "You've heard of SEO, but have you heard of AEO — Answer Engine Optimization? With the rise of AI-driven search tools like ChatGPT, Gemini, and Google's SGE, optimizing for answer engines is becoming just as important as traditional SEO. Learn the key differences and how to future-proof your content strategy.",
    date: "March 24, 2026",
    readTime: "7 min read",
    author: "Priya Verma",
  },
  {
    id: 9,
    title: "What Is a Domain Name, and How Does It Work on a Website?",
    img: "/img/graphics-design-course/After effect Tools.png",
    category: "Web Basics",
    desc: "A domain name is your website's address on the internet — but how does it actually work? From DNS lookups to hosting servers, understanding the technical journey behind a URL helps you make smarter decisions when setting up or managing a website. This beginner-friendly guide explains it all clearly.",
    date: "March 24, 2026",
    readTime: "4 min read",
    author: "Amit Joshi",
  },
  {
    id: 10,
    title: "What's the Difference Between SEO and SEM?",
    img: "/img/graphics-design-course/Coraldraw Tools.png",
    category: "SEO & Ads",
    desc: "SEO and SEM are often confused, but they serve distinct purposes in digital marketing. SEO focuses on earning organic traffic through content and optimization, while SEM encompasses paid strategies like Google Ads. Together, they form a powerful combination — but knowing when to prioritize each is what separates good marketers from great ones.",
    date: "March 24, 2026",
    readTime: "5 min read",
    author: "Karan Mehta",
  },
];

const categories = ["All", "SEO", "Career", "Google Ads", "SEO & Ads", "Email Marketing", "Growth", "Web Basics"];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogs.filter((b) => {
    const matchCat = activeCategory === "All" || b.category === activeCategory;
    const matchSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const recentPosts = [...blogs].slice(0, 5);

  return (
    <div className="blog-page">
      {/* TOP BANNER */}
      <div className="blog-banner">
        <div className="banner-overlay" />
        <div className="banner-content">
          <span className="banner-tag">📚 Knowledge Hub</span>
          <h1>Explore Our Blog</h1>
          <p>Insights, guides & tips on Digital Marketing, SEO, and Career Growth</p>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="category-bar">
        <div className="category-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="blog-container">
        {/* LEFT - BLOG LIST */}
        <div className="blog-left">
          {filtered.length === 0 && (
            <div className="no-results">
              <p>No blogs found. Try a different search or category.</p>
            </div>
          )}

          {filtered.map((blog, index) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-img-wrap">
                <img src={blog.img} alt={blog.title} />
                <span className="blog-category-badge">{blog.category}</span>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">🗓 {blog.date}</span>
                  <span className="blog-read">⏱ {blog.readTime}</span>
                  <span className="blog-author">✍ {blog.author}</span>
                </div>

                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>

                <button className="read-btn">
                  Read More <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="blog-right">
          {/* Search */}
          <div className="sidebar-box search-box">
            <input
              type="text"
              placeholder="🔍  Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Recent Posts */}
          <div className="sidebar-box">
            <h3 className="sidebar-title">
              <span className="title-line" />
              Recent Posts
            </h3>
            <ul className="recent-list">
              {recentPosts.map((item) => (
                <li key={item.id} className="recent-item">
                  <div className="recent-thumb">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="recent-info">
                    <span className="recent-post-title">{item.title}</span>
                    <span className="recent-date">{item.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="sidebar-box">
            <h3 className="sidebar-title">
              <span className="title-line" />
              Categories
            </h3>
            <ul className="cat-list">
              {categories.slice(1).map((cat) => (
                <li
                  key={cat}
                  className={`cat-item ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="cat-count">
                    {blogs.filter((b) => b.category === cat).length}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter CTA */}
          {/* <div className="sidebar-box newsletter-box">
            <div className="nl-icon">📧</div>
            <h3>Subscribe to Newsletter</h3>
            <p>Get the latest blogs delivered to your inbox every week.</p>
            <input type="email" placeholder="Your email address" className="nl-input" />
            <button className="nl-btn">Subscribe Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

