"use client";

import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import "./blog.css";
import HeroSection from "@/landing-component/HeroSection";

const BlogPage = () => {
  return (
    <PageLayout header={4} footer={4} bodyClass="blog-page">
      <HeroSection />

      <section className="blog-grid-area py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8 text-center">
              <h2
                className="section-heading mb-20"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                Discover the Future of Learning
              </h2>
              <p
                className="section-description"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1200}
              >
                Stay updated with the latest trends, insights, and innovations
                in AI-powered learning and development
              </p>
            </div>
          </div>

          <div className="row g-4">
            {blogPosts.map((post, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration={1200}
                data-aos-offset={50}
              >
                <article className="blog-card-modern">
                  <Link href={`/blog/${post.slug}`} className="blog-image-link">
                    <div className="blog-image-wrapper">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="blog-image"
                      />
                      <div className="blog-overlay">
                        <span className="read-more-overlay">Read Article</span>
                      </div>
                    </div>
                    <div className="blog-date-badge">
                      <span className="date-number">{post.date}</span>
                      <span className="date-month">{post.month}</span>
                    </div>
                  </Link>

                  <div className="blog-card-body">
                    <div className="blog-meta-row">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-author">
                        <i className="far fa-user"></i> {post.author}
                      </span>
                    </div>

                    <h3 className="blog-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="blog-excerpt">
                      {post.description.substring(0, 120)}...
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="blog-read-link"
                    >
                      <span>Read More</span>
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;
