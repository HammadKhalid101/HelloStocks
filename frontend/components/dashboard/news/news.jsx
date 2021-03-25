import React from 'react';
import PopularLists from './popular_lists';
import NewsItems from './news_Items';

class News extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="dashboard-main-news-section">
                <PopularLists />
                <header className="news-header">
                    <div className="news-heading-container">
                        <h2 className="news-heading"> 
                            <span className="news-heading-text-span">
                                News
                            </span>
                        </h2>
                    </div>
                </header>
                <div className="news-show-new-div">
                    <span span="news-show-new-span">
                        Show newer articles
                    </span>
                </div>
                <NewsItems />
            </section>
        )
    }
}

export default News;