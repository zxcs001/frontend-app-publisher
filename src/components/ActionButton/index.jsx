import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StatefulButton } from '@edx/paragon';

// Just a tiny wrapper around StatefulButton to provide some good defaults

const ActionButton = ({ className, ...passThroughProps }) => (
  <StatefulButton
    {...passThroughProps}
    type="submit"
    className={classNames('btn btn-primary form-submit-btn', className)}
  />
);

ActionButton.defaultProps = {
  className: '',
};

ActionButton.propTypes = {
  className: PropTypes.string,
};

export default ActionButton;