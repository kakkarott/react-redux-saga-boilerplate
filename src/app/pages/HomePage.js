import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getSomeDetails} from '../actions/someActions';

class HomePage extends React.Component {
  render() {
    const { getSomeDetails, error, isLoading,subscriberDetails } = this.props;
    console.log("actions: "+getSomeDetails);
    return (
      <div>
        <b>{subscriberDetails.title}</b>
        {error && <h3>Error: {error.response.data}</h3>}
        {isLoading ? <h1>Loading ...</h1>
          : (
            <div>
              <h1>Get Wether Info</h1>
              <input type="text" name="Subscriber" />
              <button type="button" onClick={() => getSomeDetails(2)}>Get Subscriber</button>
            </div>
          )
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  //actions: PropTypes.object.isRequired,
  //subscriberDetails: PropTypes.object,
  //error: PropTypes.object,
};

const mapStateToProps = ({someReducer}) => ({
  subscriberDetails: someReducer.somethings,
  error: someReducer.error,
  isLoading: someReducer.isLoading,
});



export default connect(mapStateToProps, {getSomeDetails})(HomePage);