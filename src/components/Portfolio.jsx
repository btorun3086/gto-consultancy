import React from 'react'

const PortfolioLinks = ({ portfolioLinks, title }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">{title}</h2>
                        <br></br>
                    </div>
                </div>
                <div className="row">
                    {
                        portfolioLinks && portfolioLinks.map(({ title, caption, caption2, caption3, caption4, number, src }, index) =>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href={"#portfolioModal" + number}>
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={src} alt="portfolio_img" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>{title}</h4>
                                    {caption && <p className="text-muted">{caption}</p>}
                                    {caption2 && <p className="text-muted">{caption2}</p>}
                                    {caption3 && <p className="text-muted">{caption3}</p>}
                                    {caption4 && <p className="text-muted">{caption4}</p>}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
export default PortfolioLinks;