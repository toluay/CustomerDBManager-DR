import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
    }
    componentDidUpdate(prevProps) {
    this.props.alert.show('It works ');
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
        alert.error('there is an error ');
    }
    

    }

    render() {
        return <Fragment />;
      }

  mapStateToProps = (state) => ({
        error: state.errors});
}
export default connect(mapStateToProps)(withAlert()(Alerts));