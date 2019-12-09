import React from "react";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdWater } from "react-icons/io";
import { FormattedMessage } from "react-intl";

const noOfItems = 6;
const noOfCards = 3;
const autoPlayDelay = 3000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  display: flex;
  margin: 5px;
`;

export default class AutoPlayCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0
    }

    this.tick = this.tick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1)
    }));
  } 

  onChange(value) {
    this.setState({ activeItemIndex: value });
  }

  render() {
    const carouselItems = this.props.listPost.map(item => (
      <SlideItem key={item}>
        <div className="job-grid style-1 job">
          <div className="job-grid-wrap" style={{ height: "400px" }}>
            <div className="featured-job">
              <IoMdArrowRoundDown />
            </div>
            <span className="job-type j-full-time"><FormattedMessage id="All the time" /></span>
            <div className="job-grid-thumb">
              <a href="">
                <img src={item.avatar} className="img-fluid mx-auto" alt="" />
              </a>
            </div>
            <h4 className="job-title">{item.user_name}</h4>
            <hr />
            <div className="job-grid-detail">
              <h4 className="jbc-name">
                <a href="employer-detail.html">{item.title}</a>
              </h4>
              <p>
                <IoMdWater />
                {item.location}
              </p>
            </div>
            <div className="job-grid-footer">
              <h4 className="job-price">{item.price}</h4>
              <a href="" className="btn btn-outline-info btn-rounded">
                <FormattedMessage id="Apply" />
              </a>
            </div>
          </div>
        </div>
      </SlideItem>
    ));
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}
