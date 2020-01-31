import React from "react";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { FormattedMessage, FormattedNumber, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";

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

class AutoPlayCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0
    };

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

  applyJob(post_id) {
    if (!this.props.me) {
      this.props.history.push("/login");
      return;
    }

    if (!this.props.me.id_card) {
      toast.error(
        this.props.intl.formatMessage({
          id: "You have to update your information"
        }),
        "Title",
        {
          displayDuration: 3000
        }
      );
      return;
    }

    if (this.props.me.role === 2) {
      this.props
        .http({
          url: "/auth/post/apply",
          method: "POST",
          data: {
            post_id: post_id
          }
        })
        .then(res => {
          toast.success(
            this.props.intl.formatMessage({
              id: "Apply successfully"
            }),
            "Title",
            {
              displayDuration: 3000
            }
          );
        })
        .catch(error => {
          toast.warning(
            this.props.intl.formatMessage({
              id: "Appied"
            }),
            "Title",
            {
              displayDuration: 3000
            }
          );
        });
    }
  }

  render() {
    const carouselItems = this.props.listPost.map(item => (
      <SlideItem key={item}>
        <div className="job-grid style-1 job">
          <div className="job-grid-wrap" style={{ height: "400px" }}>
            <span className="job-type j-full-time">
              <FormattedMessage id="All the time" />
            </span>
            <div className="job-grid-thumb">
              <img src={item.avatar} className="img-fluid mx-auto" alt="" />
            </div>
            <h4 className="job-title">{item.user_name}</h4>
            <hr />
            <div className="job-grid-detail">
              <h4 className="jbc-name">
                <Link to={"job/detail/" + item.id}>{item.title}</Link>
              </h4>
              <p>
                <FormattedMessage id="Location" /> :{item.location}
              </p>
              <p>
                <FormattedMessage id="End time" /> : {item.end_time}
              </p>
            </div>
            <div className="job-grid-footer">
              <h6 className="job-price">
                <FormattedMessage id="Salary" />  :  {" "}
                <FormattedNumber value={item.price} /> đ
              </h6>
              {!this.props.me ||
                (this.props.me && this.props.me.role !== 1 && item.is_apply === 0 && (
                  <button
                    className="btn btn-outline-info btn-rounded"
                    onClick={this.applyJob.bind(this, item.id)}
                  >
                    <FormattedMessage id="Apply" />
                  </button>
                ))}
                {!this.props.me ||
                (this.props.me && this.props.me.role !== 1 && item.is_apply === 1 && (
                  <button
                    className="btn btn-outline-info btn-rounded nut"
                  >
                    <FormattedMessage id="Applied" />
                  </button>
                ))}
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

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;
  newState.me = stateStore.me;

  return newState;
};

export default connect(mapStateToProps)(injectIntl(AutoPlayCarousel));
