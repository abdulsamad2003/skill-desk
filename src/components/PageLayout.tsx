"use client";
// import VideoPopup from "@/components/VideoPopup";
import { akpagerUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface PageLayoutProps {
  children: React.ReactNode;
  header?: number;
  footer?: number;
  bodyClass?: string;
  onePage?: boolean;
}

const PageLayout = ({ children, header, footer, bodyClass, onePage }: PageLayoutProps) => {
  useEffect(() => {
    akpagerUtility.animation();
    akpagerUtility.fixedHeader();
  });

  useEffect(() => {
    niceSelect();
    if (bodyClass) {
      document.querySelector("body")?.classList.add(bodyClass);
    }
  }, [bodyClass]);

  return (
    <Fragment>
      {/* <VideoPopup /> */}
      <div className="page-wrapper">
        <Header header={header} onePage={onePage} />
        {children}
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};

export default PageLayout;

