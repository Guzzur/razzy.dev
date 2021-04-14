import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Buzzwords from "./Buzzwords";

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <img
            src={"https://avatars2.githubusercontent.com/u/6122352?s=460&v=4"}
            alt="It's a me!"
            style={{
              width: "25%",
              minWidth: "150px",
              border: "5px #ffffff solid",
              borderRadius: "33%",
              boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)"
            }}
          />
        </div>

        <div className="text-center mt-4" style={{ fontSize: "0.8rem" }}>
          <h1 className="text">Hi there!</h1>
          <h3 className="text mb-4">I'm Felix Razykov</h3>
          <Tippy content={<span>me@razzy.dev</span>}>
            <a className="social-link" href="mailto:me@razzy.dev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className='mx-1' />
            </a>
          </Tippy>
          <Tippy content={<span>linkedin.com/in/felix-razykov</span>}>
            <a className="social-link" href="https://linkedin.com/in/felix-razykov" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className='mx-1' />
            </a>
          </Tippy>
          <Tippy content={<span>+972-544710690</span>}>
            <a className="social-link" href="tel:+972544710690" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPhone} className="rotate-180 mx-1" />
            </a>
          </Tippy>
          <Tippy content={<span>dev.to/guzzur</span>}>
            <a className="social-link" href="https://dev.to/guzzur" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDev} className='mx-1' />
            </a>
          </Tippy>
        </div>

        <div className="mt-4">
          <h3>Brief</h3>
          <div>
            Self-motivated and result-driven software developer, specializing in the development of
            high complexity systems. <pre className='d-inline'>⚪️ Seeking / 🔘 Found</pre> a challenging position of exciting product creation at
            a dynamic and growth oriented organization.
          </div>
        </div>

        <div className="mt-4">
          <h3>Skills</h3>
          <div>
            4 years of experience in web development, using mostly React.JS, Node.JS and Python.
          </div>
          <div>
            6 years of experience in object oriented design, programming and integration using C++
            and C#.
          </div>
          <div>
            Experience in low-level programming and debugging on several platforms (Linux, Windows,
            vxWorks).
          </div>
        </div>

        <div className="mt-4">
          <h3>Functional skills</h3>
          <div>Excellent analytical and logical skills</div>
          <div>Excellent communication skill</div>
        </div>

        <div className="mt-4">
          <h3>Languages</h3>
          <div>Hebrew</div>
          <div>English</div>
          <div>Russian</div>
        </div>

        <div className="mt-4">
          <h3>Career snapshot</h3>
          {/*  */}
          <div className="mt-4 font-weight-bold">2021 Fullstack developer @ Strigo</div>
          <div>Developing in Meteor, React and Node.js</div>
          <div className="mt-2">
            <Buzzwords
              words={["react", "typescript", "node", "nomad", "meteor"]}
            />
          </div>
          {/*  */}
          <div className="mt-4 font-weight-bold">2019-2021 Fullstack developer @ BigPanda</div>
          <div>Developing in React and Node.js</div>
          <div className="mt-2">
            <Buzzwords
              words={["react", "redux", "node", "kubernetes", "kafka"]}
            />
          </div>     
          {/*  */}
          <div className="mt-4 font-weight-bold">2019 Fullstack developer @ Wallpex</div>
          <div>Developing in React and Node.js</div>
          <div className="mt-2">
            <Buzzwords
              words={["react", "redux", "node", "mongo", "aws"]}
            />
          </div>
          {/*  */}
          <div className="mt-4 font-weight-bold">
            2017-2019 Fullstack developer @ Cyber division, ELTA Systems
          </div>
          <div>Developing in React, Node.js and Python</div>
          <div>Documentation (requirements, design, API docs etc.)</div>
          <div className="mt-2">
            <Buzzwords
              words={["react", "node", "mongo", "postgres", "python", "storybook"]}
            />
          </div>
          {/*  */}
          <div className="mt-4 font-weight-bold">
            2013-2017 Software project manager and integrator @ Radar division, ELTA Systems
          </div>
          <div>Developing in C/C++, C#, Python</div>
          <div>Multi processing, cross platform software integration</div>
          <div>Documentation (requirements, design, APIs etc.)</div>
          <div>Scripting using Perl, Bash/Csh</div>
          <div className="mt-2">
            <Buzzwords
              words={["c/c++", "c#", "vxworks", "python", "pygtk", "qt", "wpf", "perl", "bash"]}
            />
          </div>
          {/*  */}
          <div className="mt-4 font-weight-bold">
            2011-2013 Communication solutions team leader @ Intelligence corps, IDF
          </div>
          <div>Developing and customizing of encrypted communication solutions</div>
          <div>Securing and dissembling network usage and behavior</div>
          <div>Configuring servers running different operating systems</div>
          {/*  */}
          <div className="mt-4 font-weight-bold">
            2009-2011 Project Management Officer and QA team leader @ Intelligence corps, IDF
          </div>
          <div>Managing 10 QA and PM teams members</div>
          <div>Projects’ resources scheduling</div>
          <div>Testing of software and complete products in various disciplines</div>
        </div>

        <div className="mt-4">
          <h3>Academia</h3>
          <div>Current B. Sc. CS (Israel Open University, until 2020)</div>
          <div>2018 Fundamentals of Big Data (Sela College)</div>
          <div>2018 Mastering WPF (Sela College)</div>
          <div>2017 Python (Sela College)</div>
          <div>2016 Design Patterns for C++ programming (Sela College)</div>
          <div>2013 Scripting with Bash, Python, Perl, Batch (IDF)</div>
          <div>2012 Advanced C++ (IDF)</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AboutMe)
);
