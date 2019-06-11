import React from 'react';
import PropTypes from 'prop-types';

function TabContainer(props) {
    return (
        <div component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TabContainer;