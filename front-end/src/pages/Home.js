import React from 'react';
import RestaurantList from '../components/RestaurantList';
import Search from '../components/Search'
import Yelp from '../models/yapiref/yapi2'
import BlogCards from '../components/Blogs/BlogCards'
// import ReviewShow from '../components/ReviewShow'
// import Carousel from '../components/Carousel'







class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        };

        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy).then(restaurants => {
            this.setState({ restaurants: restaurants || [] });
        });
    }

    render() {

        return ( 
          <div >
            <Search searchYelp = { this.searchYelp }/> 
            <RestaurantList restaurants = {this.state.restaurants }/> 
            <BlogCards/>
            </div>
        );
    }
}


export default Home;