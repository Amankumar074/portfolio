import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="portfolio-wrapper text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="container min-vh-100 d-flex align-items-center py-5">
        <div className="row align-items-center w-100 gy-5">

          <div className="col-lg-6" data-aos="fade-right">
            <span className="badge bg-primary mb-3">WEB DEVELOPER</span>

            <h1 className="display-4 fw-bold">
              Aman Kumar <br />
              <span className="text-primary">Modern React Developer</span>
            </h1>

            <p className="text-secondary fs-5 mt-4">
              I build fast, scalable and visually stunning websites using
              React, Bootstrap and modern UI animations.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="#projects" className="btn btn-primary btn-lg px-4 btn-glow">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4 btn-glow">
                Contact Me
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-lg-6 text-center" data-aos="zoom-in">
            <div className="hero-image-wrapper mx-auto">
              <img
                src="images/myimage.jpeg"
                alt="Aman Kumar"
              />
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5 section-title" data-aos="fade-up">
            Featured Projects
          </h2>

          <div className="row g-4">
            {[
              "maheshwarifurniturejaipur.com",
              "togogreen.eco",
              "webnstack.com",
              "happyshells.in",
              "ellydecor.in",
            ].map((site, i) => (
              <div
                className="col-md-6 col-lg-4"
                key={site}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <a
                  href={`https://${site}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-white"
                >
                  <div className="project-card p-4 h-100 rounded-4">
                    <h5 className="d-flex justify-content-between align-items-center">
                      {site}
                      <i className="bi bi-box-arrow-up-right"></i>
                    </h5>
                    <p className="text-secondary mt-2">
                      Live production website
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5">
        <div className="container text-center" data-aos="fade-up">
          <h2 className="fw-bold mb-3 section-title">Let’s Work Together</h2>

          <p className="text-secondary fs-5">
            Have a project or idea? Let’s build it.
          </p>

          <div className="mt-4 fs-5">
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              amannirwal45@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              7357558168
            </p>
          </div>

          <div className="fs-2 mt-3">
            <i className="bi bi-github mx-3"></i>
            <i className="bi bi-linkedin mx-3"></i>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-3 text-secondary">
        © {new Date().getFullYear()} Aman Kumar
      </footer>

      {/* ALL STYLES */}
      <style>{`
        /* BACKGROUND */
        .portfolio-wrapper {
          background: linear-gradient(120deg,#020617,#020617,#0f172a,#020617);
          background-size: 400% 400%;
          animation: bgMove 18s ease infinite;
        }

        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* HERO IMAGE */
        .hero-image-wrapper {
          width: 300px;
          height: 300px;
          border-radius: 26px;
          padding: 4px;
          background: linear-gradient(135deg,#0d6efd,#00e5ff,#6610f2);
          box-shadow: 0 0 80px rgba(13,110,253,.45);
        }

        .hero-image-wrapper img {
          width: 100%;
          height: 100%;
          border-radius: 22px;
          object-fit: cover;
          background: #000;
        }

        @keyframes borderRotate {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }

        /* BUTTON GLOW */
        .btn-glow {
          position: relative;
          overflow: hidden;
        }

        .btn-glow::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 120%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,.4),
            transparent
          );
          transition: .6s;
        }

        .btn-glow:hover::after {
          left: 120%;
        }

        /* PROJECT CARD */
        .project-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.08);
          transition: .45s ease;
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0,229,255,.15);
        }

        /* SECTION TITLE */
        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: "";
          width: 60%;
          height: 4px;
          background: linear-gradient(90deg,#0d6efd,#00e5ff);
          display: block;
          margin: 12px auto 0;
          border-radius: 20px;
        }

        /* ICONS */
        .bi {
          transition: .3s;
          cursor: pointer;
        }

        .bi:hover {
          color: #00e5ff;
          transform: translateY(-6px) scale(1.15);
        }
      `}</style>

    </div>
  );
}
