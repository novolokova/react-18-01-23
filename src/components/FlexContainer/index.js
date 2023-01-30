import React from 'react';
import PropTypes from 'prop-types';


const FlexContainer = (props) => {

    const {children, style, jCont, alingIt, flexDir, flexWr, ...restProps} = props;
    const inlineStyles = {
        ...style,
        display: 'flex',
        justifyContent: jCont,
        alignItems: alingIt,
        flexDirection: flexDir,
        flexWrap: flexWr,
    }
    return (
        <div style={inlineStyles} {...restProps}>
        {children}
    </div>
    );
};

FlexContainer.defaultProps = {
    jCont:'center', 
    alingIt:'center', 
    flexDir:'row', 
    flexWr: 'nowrap',

}

FlexContainer.propTypes = {
    jCont:PropTypes.string,
    alingIt:PropTypes.string,
    flexDir:PropTypes.string,
    flexWr:PropTypes.string,

};


export default FlexContainer;
