"use client";

import Link from "next/link";
import "../app/BlogSection.css";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog/blog7.png",
      date: "25",
      month: "Sep",
      category: "e-Learning",
      title: "Meet Success the Cale Smashing Book By Addy Osmania",
      author: "Roger J. Spaulding",
      comments: "Comments(5)",
    },
    {
      id: 2,
      image: "/images/blog/blog8.png",
      date: "28",
      month: "Sep",
      category: "e-Learning",
      title: "Practical Design Tips Guidelines For Beginner Designers",
      author: "Roger J. Spaulding",
      comments: "Comments(5)",
    },
    {
      id: 3,
      image: "/images/blog/blog9.png",
      date: "30",
      month: "Sep",
      category: "e-Learning",
      title: "Meet Success the Cale Smashing Book By Addy Osmania",
      author: "Roger J. Spaulding",
      comments: "Comments(5)",
    },
  ];

  return (
    <section id="blog" className="blog-area-four pb-90 rpb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 col-lg-8"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title text-center mb-55">
              <h2>Get Every Single Updates and Learn Our News &amp; Blog</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {blogPosts.map((post, index) => (
            <div className="col-xl-4 col-md-6 col-sm-10" key={post.id}>
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src={post.image} alt="Blog" />
                  <div className="date">
                    <b>{post.date}</b>
                    <span>{post.month}</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    {post.category}
                  </a>
                  <h5>
                    <Link href="blog-details">{post.title}</Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle" />{" "}
                      <a href="#">{post.author}</a>
                    </li>
                    <li>
                      <i className="far fa-comment-lines" />{" "}
                      <a href="#">{post.comments}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
