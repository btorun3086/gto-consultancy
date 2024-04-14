import React, { useState } from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import teamJpg from "./assests/img/team.jpg"
import tr from "./assests/language/turkish.json"
import eng from "./assests/language/english.json"
import importExportImg from "./assests/img/import_export.png"
import product_and_market_Img from "./assests/img/product_market.png"
import trading_strategy_Img from "./assests/img/trading_strategy.png"
import logo from "./assests/img/logo.png"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ReactWhatsapp from 'react-whatsapp';
import { ContactUs } from './components/Contact-Us';
function App() {

  const [lang, setLang] = useState(tr);
  const [language, setLanguage] = useState("tr");
  console.log(lang);
  const portfolioLinks = [
    {
      title: lang.services.import_and_market_classifaction.title,
      caption: lang.services.import_and_market_classifaction.product_and_market_classification.title,
      caption2: lang.services.import_and_market_classifaction.certification.title,
      caption3: lang.services.import_and_market_classifaction.international_logistics.title,
      number: 1,
      src: importExportImg
    },
    {
      title: lang.services.product_and_market_inspection.title,
      caption: lang.services.product_and_market_inspection.product_and_market.title,
      caption2: lang.services.product_and_market_inspection.reliable_supplier.title,
      caption3: lang.services.product_and_market_inspection.quality_price_balance.title,
      caption4: lang.services.product_and_market_inspection.sectoral_area.title,
      number: 2,
      src: product_and_market_Img
    },
    {
      title: lang.services.trading_strategy.title,
      caption: lang.services.trading_strategy.reliable_partner.title,
      caption2: lang.services.trading_strategy.new_markets.title,
      caption3: lang.services.trading_strategy.market_strategy.title,
      number: 3,
      src: trading_strategy_Img
    }
  ]
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <img className='navbar-brand-img' src={logo} alt='' href="#page-top"></img>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">{lang.services.title}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">{lang.product_groups.title}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">{lang.aboutus.title}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">{lang.founder.title}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">{lang.contact.title}</a>
              </li>
              <li className="nav-item">
                {language === "tr" && <p className="nav-link js-scroll-trigger" onClick={() => { setLang(eng); setLanguage("eng"); }}>English</p>}
                {language === "eng" && <p className="nav-link js-scroll-trigger" onClick={() => { setLang(tr); setLanguage("tr"); }}>Turkish</p>}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">{lang.title}</div>
            <div className="intro-heading text-uppercase">GTO</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">{lang.tell_more_button}</a>
          </div>
        </div>
      </header>


      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{lang.product_groups.title}</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-industry fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">{lang.product_groups.machine.title}</h4>
              <p className="text-muted">{lang.product_groups.machine.body}</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-cutlery fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">{lang.product_groups.food.title}</h4>
              <p className="text-muted">{lang.product_groups.food.body}</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-scissors fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">{lang.product_groups.textile.title}</h4>
              <p className="text-muted">{lang.product_groups.textile.body}</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-industry fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">{lang.product_groups.manufacturing_industry.title}</h4>
              <p className="text-muted">{lang.product_groups.manufacturing_industry.body}</p>
            </div>

          </div>
        </div>
      </section>

      <FloatingWhatsApp statusMessage='' avatar={logo} phoneNumber='905325107627' accountName='GTO Consultancy' >Whatsapp</FloatingWhatsApp>

      <Portfolio portfolioLinks={portfolioLinks} title={lang.services.title}></Portfolio>
      <section className="page-section" id="portfolioModal1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-services">{lang.services.import_and_market_classifaction.title}</h2>
              <h3 className="section-services">{lang.services.import_and_market_classifaction.product_and_market_classification.title}</h3>
              <h4 className="section-services">{lang.services.import_and_market_classifaction.product_and_market_classification.body}</h4>
              <h3 className="section-services">{lang.services.import_and_market_classifaction.certification.title}</h3>
              <h4 className="section-services">{lang.services.import_and_market_classifaction.certification.body}</h4>
              <h3 className="section-services">{lang.services.import_and_market_classifaction.international_logistics.title}</h3>
              <h4 className="section-services">{lang.services.import_and_market_classifaction.international_logistics.body}</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="portfolioModal2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-services">{lang.services.product_and_market_inspection.title}</h2>
              <h3 className="section-services">{lang.services.product_and_market_inspection.product_and_market.title}</h3>
              <h4 className="section-services">{lang.services.product_and_market_inspection.product_and_market.body}</h4>
              <h3 className="section-services">{lang.services.product_and_market_inspection.reliable_supplier.title}</h3>
              <h4 className="section-services">{lang.services.product_and_market_inspection.reliable_supplier.body}</h4>
              <h3 className="section-services">{lang.services.product_and_market_inspection.quality_price_balance.title}</h3>
              <h4 className="section-services">{lang.services.product_and_market_inspection.quality_price_balance.body}</h4>
              <h3 className="section-services">{lang.services.product_and_market_inspection.sectoral_area.title}</h3>
              <h4 className="section-services">{lang.services.product_and_market_inspection.sectoral_area.body}</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="portfolioModal3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-services">{lang.services.trading_strategy.title}</h2>
              <h3 className="section-services">{lang.services.trading_strategy.reliable_partner.title}</h3>
              <h4 className="section-services">{lang.services.trading_strategy.reliable_partner.body}</h4>
              <h3 className="section-services">{lang.services.trading_strategy.new_markets.title}</h3>
              <h4 className="section-services">{lang.services.trading_strategy.new_markets.body}</h4>
              <h3 className="section-services">{lang.services.trading_strategy.market_strategy.title}</h3>
              <h4 className="section-services">{lang.services.trading_strategy.market_strategy.body}</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{lang.aboutus.title}</h2>
              <h3 className="section-subheading text-muted">{lang.aboutus.body}</h3>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{lang.founder.title}</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
          </div>
          <div className="row">

            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={teamJpg} alt="" />
                <h4>Mehmet Hanifi Solak</h4>
                <p className="text-muted">{lang.founder.title}</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/mehmet-hanifi-solak-76304b170/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted"></p>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  </section>*/}
      


      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; By Bekir Torun</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;