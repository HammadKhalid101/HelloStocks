import React from "react";

class NewsItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="news-articles-container">
        <div className="news-article-div">
          <article className="news-article">
            <a className="article-link" target="_blank" href="/#/dashboard">
              <div className="article-heading-container">
                <div className="article-heading">
                  <span className="article-heading-svg-span">
                    <svg
                      fill="none"
                      height="12"
                      role="img"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.73913L8.4 0L7.33333 4.69565L10 5.73913L3.6 12L5.2 7.30435L2 5.73913Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <span className="article-heading-text">
                    The HelloStocks Journal
                  </span>
                  <span className="article-heading-time">4h</span>
                </div>
                <div className="article-heading-button-container">
                  <svg
                    fill="none"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 10.5H3.5V13.5H6.5V10.5Z" fill="black"></path>
                    <path
                      d="M13.5 10.5H10.5V13.5H13.5V10.5Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 10.5H20.5V13.5H17.5V10.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="article-content-container">
                <div className="article-content">
                  <div className="article-content-text-div">
                    <span className="article-content-text-span">
                      Today TSLA, GME, DOGE, and BTC flew to the moon. Should
                      you join the the next takeoff by purchasing shares today?
                    </span>
                  </div>
                  {/* <div className="article-content-link-div">
                                        <a className="article-content-link">
                                            <span className="article-content-link-tikr-span">TSLA</span>
                                            <span className="article-content-link-tikr-percent">4.36%</span>
                                        </a>
                                    </div> */}
                </div>
                <div className="article-img-div">
                  <img className="article-img" src={window.elon_doge} />
                </div>
              </div>
            </a>
          </article>
        </div>
        <div className="news-article-div">
          <article className="news-article">
            <a
              className="article-link"
              target="_blank"
              href="https://wccftech.com/apple-aapl-patents-a-lidar-system-with-a-waveform-design-for-the-apple-car/"
            >
              <div className="article-heading-container">
                <div className="article-heading">
                  <span className="article-heading-svg-span">
                    <svg
                      fill="none"
                      height="12"
                      role="img"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.73913L8.4 0L7.33333 4.69565L10 5.73913L3.6 12L5.2 7.30435L2 5.73913Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <span className="article-heading-text">WCCF Tech</span>
                  <span className="article-heading-time">1h</span>
                </div>
                <div className="article-heading-button-container">
                  <svg
                    fill="none"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 10.5H3.5V13.5H6.5V10.5Z" fill="black"></path>
                    <path
                      d="M13.5 10.5H10.5V13.5H13.5V10.5Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 10.5H20.5V13.5H17.5V10.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="article-content-container">
                <div className="article-content">
                  <div className="article-content-text-div">
                    <span className="article-content-text-span">
                      Apple (AAPL) Patents a LIDAR System With a Waveform Design
                      for the Apple Car
                    </span>
                  </div>
                  {/* <div className="article-content-link-div">
                                        <a className="article-content-link">
                                            <span className="article-content-link-tikr-span">TSLA</span>
                                            <span className="article-content-link-tikr-percent">4.36%</span>
                                        </a>
                                    </div> */}
                </div>
                <div className="article-img-div">
                  <img className="article-img" src={window.aapl} />
                </div>
              </div>
            </a>
          </article>
        </div>
        <div className="news-article-div">
          <article className="news-article">
            <a
              className="article-link"
              target="_blank"
              href="https://www.theverge.com/2021/3/25/22350173/google-assistant-memory-save-to-do-pocket-pinterest-notes-reminders"
            >
              <div className="article-heading-container">
                <div className="article-heading">
                  <span className="article-heading-svg-span">
                    <svg
                      fill="none"
                      height="12"
                      role="img"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.73913L8.4 0L7.33333 4.69565L10 5.73913L3.6 12L5.2 7.30435L2 5.73913Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <span className="article-heading-text">The Verge</span>
                  <span className="article-heading-time">2h</span>
                </div>
                <div className="article-heading-button-container">
                  <svg
                    fill="none"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 10.5H3.5V13.5H6.5V10.5Z" fill="black"></path>
                    <path
                      d="M13.5 10.5H10.5V13.5H13.5V10.5Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 10.5H20.5V13.5H17.5V10.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="article-content-container">
                <div className="article-content">
                  <div className="article-content-text-div">
                    <span className="article-content-text-span">
                      Google is testing Memory, an upgrade for Assistant to
                      ‘save and find everything’
                    </span>
                  </div>
                  {/* <div className="article-content-link-div">
                                        <a className="article-content-link">
                                            <span className="article-content-link-tikr-span">TSLA</span>
                                            <span className="article-content-link-tikr-percent">4.36%</span>
                                        </a>
                                    </div> */}
                </div>
                <div className="article-img-div">
                  <img className="article-img" src={window.google} />
                </div>
              </div>
            </a>
          </article>
        </div>
        <div className="news-article-div">
          <article className="news-article">
            <a
              className="article-link"
              target="_blank"
              href="https://www.cnn.com/2021/03/25/tech/tech-ceos-hearing/index.html"
            >
              <div className="article-heading-container">
                <div className="article-heading">
                  <span className="article-heading-svg-span">
                    <svg
                      fill="none"
                      height="12"
                      role="img"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.73913L8.4 0L7.33333 4.69565L10 5.73913L3.6 12L5.2 7.30435L2 5.73913Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <span className="article-heading-text">CNN</span>
                  <span className="article-heading-time">30m</span>
                </div>
                <div className="article-heading-button-container">
                  <svg
                    fill="none"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 10.5H3.5V13.5H6.5V10.5Z" fill="black"></path>
                    <path
                      d="M13.5 10.5H10.5V13.5H13.5V10.5Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 10.5H20.5V13.5H17.5V10.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="article-content-container">
                <div className="article-content">
                  <div className="article-content-text-div">
                    <span className="article-content-text-span">
                      Facebook, Twitter and Google CEOs grilled by Congress on
                      misinformation
                    </span>
                  </div>
                  {/* <div className="article-content-link-div">
                                        <a className="article-content-link">
                                            <span className="article-content-link-tikr-span">TSLA</span>
                                            <span className="article-content-link-tikr-percent">4.36%</span>
                                        </a>
                                    </div> */}
                </div>
                <div className="article-img-div">
                  <img className="article-img" src={window.dc} />
                </div>
              </div>
            </a>
          </article>
        </div>
        <div className="news-article-div">
          <article className="news-article">
            <a
              className="article-link"
              target="_blank"
              href="https://finance.yahoo.com/news/market-wrap-bitcoin-slips-52k-203147900.html"
            >
              <div className="article-heading-container">
                <div className="article-heading">
                  <span className="article-heading-svg-span">
                    <svg
                      fill="none"
                      height="12"
                      role="img"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.73913L8.4 0L7.33333 4.69565L10 5.73913L3.6 12L5.2 7.30435L2 5.73913Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <span className="article-heading-text">Yahoo Finance</span>
                  <span className="article-heading-time">5h</span>
                </div>
                <div className="article-heading-button-container">
                  <svg
                    fill="none"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 10.5H3.5V13.5H6.5V10.5Z" fill="black"></path>
                    <path
                      d="M13.5 10.5H10.5V13.5H13.5V10.5Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 10.5H20.5V13.5H17.5V10.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="article-content-container">
                <div className="article-content">
                  <div className="article-content-text-div">
                    <span className="article-content-text-span">
                      Market Wrap: Bitcoin Slips to $52K; All Eyes on Friday’s
                      $6B Options Expiry
                    </span>
                  </div>
                  {/* <div className="article-content-link-div">
                                        <a className="article-content-link">
                                            <span className="article-content-link-tikr-span">TSLA</span>
                                            <span className="article-content-link-tikr-percent">4.36%</span>
                                        </a>
                                    </div> */}
                </div>
                <div className="article-img-div">
                  <img className="article-img" src={window.btc} />
                </div>
              </div>
            </a>
          </article>
        </div>
        <div className="news-article-div">
          <article className="news-article">
            <a
              className="article-link"
              target="_blank"
              href="https://markets.businessinsider.com/news/stocks/gamestop-stock-new-price-target-jefferies-reddit-traders-celebrating-2021-3-1030242026"
            >
              <div className="article-heading-container">
                <div className="article-heading">
                  <svg
                    fill="none"
                    height="12"
                    role="img"
                    viewBox="0 0 12 12"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5.73913L8.4 0L7.33333 4.69565L10 5.73913L3.6 12L5.2 7.30435L2 5.73913Z"
                      fill="black"
                    ></path>
                  </svg>
                  <span className="article-heading-text">Business Insider</span>
                  <span className="article-heading-time">1h</span>
                </div>
                <div className="article-heading-button-container">
                  <svg
                    fill="none"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 10.5H3.5V13.5H6.5V10.5Z" fill="black"></path>
                    <path
                      d="M13.5 10.5H10.5V13.5H13.5V10.5Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 10.5H20.5V13.5H17.5V10.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="article-content-container">
                <div className="article-content">
                  <div className="article-content-text-div">
                    <span className="article-content-text-span">
                      GameStop's new $175 price target from Jefferies has Reddit
                      traders celebrating
                    </span>
                  </div>
                  {/* <div className="article-content-link-div">
                                        <a className="article-content-link">
                                            <span className="article-content-link-tikr-span">TSLA</span>
                                            <span className="article-content-link-tikr-percent">4.36%</span>
                                        </a>
                                    </div> */}
                </div>
                <div className="article-img-div">
                  <img className="article-img" src={window.gme} />
                </div>
              </div>
            </a>
          </article>
        </div>
        <div className="news-article-div">
          <article className="news-article">
            <a
              className="article-link"
              target="_blank"
              href="https://www.cnbc.com/2021/03/25/vizio-ipo-comes-14-years-after-company-took-us-tv-market-by-storm.html"
            >
              <div className="article-heading-container">
                <div className="article-heading">
                  <span className="article-heading-svg-span">
                    <svg
                      fill="none"
                      height="12"
                      role="img"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.73913L8.4 0L7.33333 4.69565L10 5.73913L3.6 12L5.2 7.30435L2 5.73913Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <span className="article-heading-text">CNBC</span>
                  <span className="article-heading-time">4h</span>
                </div>
                <div className="article-heading-button-container">
                  <svg
                    fill="none"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 10.5H3.5V13.5H6.5V10.5Z" fill="black"></path>
                    <path
                      d="M13.5 10.5H10.5V13.5H13.5V10.5Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 10.5H20.5V13.5H17.5V10.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="article-content-container">
                <div className="article-content">
                  <div className="article-content-text-div">
                    <span className="article-content-text-span">
                      Vizio slumps 9% in NYSE debut 14 years after company took
                      TV market by storm.
                    </span>
                  </div>
                  {/* <div className="article-content-link-div">
                                        <a className="article-content-link">
                                            <span className="article-content-link-tikr-span">VZIO</span>
                                            <span className="article-content-link-tikr-percent">-9.12%</span>
                                        </a>
                                    </div> */}
                </div>
                <div className="article-img-div">
                  <img className="article-img" src={window.nyse} />
                </div>
              </div>
            </a>
          </article>
        </div>
        <div className="news-article-div">
          <article className="news-article">
            <a
              className="article-link"
              target="_blank"
              href="https://www.bloomberg.com/news/articles/2021-03-24/tesla-tsla-and-elon-musk-s-dominance-is-threatened-by-volkswagen"
            >
              <div className="article-heading-container">
                <div className="article-heading">
                  <span className="article-heading-svg-span">
                    <svg
                      fill="none"
                      height="12"
                      role="img"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.73913L8.4 0L7.33333 4.69565L10 5.73913L3.6 12L5.2 7.30435L2 5.73913Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <span className="article-heading-text">Bloomberg</span>
                  <span className="article-heading-time">2h</span>
                </div>
                <div className="article-heading-button-container">
                  <svg
                    fill="none"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 10.5H3.5V13.5H6.5V10.5Z" fill="black"></path>
                    <path
                      d="M13.5 10.5H10.5V13.5H13.5V10.5Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 10.5H20.5V13.5H17.5V10.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="article-content-container">
                <div className="article-content">
                  <div className="article-content-text-div">
                    <span className="article-content-text-span">
                      The End of Tesla’s Dominance May Be Closer Than It
                      Appears.
                    </span>
                  </div>
                  {/* <div className="article-content-link-div">
                                        <a className="article-content-link">
                                            <span className="article-content-link-tikr-span">TSLA</span>
                                            <span className="article-content-link-tikr-percent">4.36%</span>
                                        </a>
                                    </div> */}
                </div>
                <div className="article-img-div">
                  <img className="article-img" src={window.tsla} />
                </div>
              </div>
            </a>
          </article>
        </div>
      </div>
    );
  }
}

export default NewsItems;
