"use client";

import { use } from "react";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blogData";
import { notFound } from "next/navigation";
import "./blog-detail.css";

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
  const { slug } = use(params);
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(post.id, 2);

  return (
    <PageLayout header={4} footer={4} bodyClass="blog-details-page">
      <section
        className="page-banner-area overlay py-250 rpy-120 rel z-1 bgs-cover text-center"
        style={{ backgroundImage: "url(/images/backgrounds/banner.jpg)" }}
      >
        <div className="container">
          <div className="banner-inner pt-70 rpt-60 text-white">
            <h1
              className="page-title"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              {post.title}
            </h1>
            <ul
              className="blog-meta"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li>
                <span className="category">{post.category}</span>
              </li>
              <li>
                <i className="far fa-user-circle" /> <span>{post.author}</span>
              </li>
              <li>
                <i className="far fa-calendar-alt" />{" "}
                <span>{post.month} {post.date}, 2023</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="blog-details-wrap">
                <div className="blog-details-content">
                  <div
                    className="image mb-30"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                  
                  <div className="content-text">
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} style={{ marginBottom: '20px' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                
                {relatedBlogs.length > 0 && (
                  <>
                    <h3 className="related-articles-title">
                      Related Articles
                    </h3>
                    <div className="next-prev-blog">
                      {relatedBlogs.map((relatedPost, index) => (
                        <div
                          key={relatedPost.id}
                          className="item"
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                          data-aos-duration={1200}
                          data-aos-offset={50}
                        >
                          <div className="image">
                            <img src={relatedPost.image} alt={relatedPost.title} />
                          </div>
                          <div className="content">
                            <span className="date">{relatedPost.month} {relatedPost.date}, 2023</span>
                            <h6>
                              <Link href={`/blog/${relatedPost.slug}`}>
                                {relatedPost.title}
                              </Link>
                            </h6>
                            <Link href={`/blog/${relatedPost.slug}`} className="read-more-arrow">
                              Read Article <i className="far fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="back-to-blog-wrapper">
                  <Link href="/blog" className="back-to-blog-btn">
                    <i className="far fa-arrow-left" />
                    <span>Back to Blog</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogDetailsPage;

