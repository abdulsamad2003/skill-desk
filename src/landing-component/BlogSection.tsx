"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import "@/landing-component/BlogSection.css";

const BlogSection = () => {

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
              <h2>Latest Insights &amp; Updates from SkillDesk.AI</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-stretch">
          {blogPosts.map((post, index) => (
            <div className="col-xl-4 col-md-6 col-sm-10 d-flex" key={post.id}>
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
                  <p className="category">
                    {post.category}
                  </p>
                  <h5>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle" />{" "}
                      <a href="#">{post.author}</a>
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
