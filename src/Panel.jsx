import React, { PropTypes } from 'react';
import PanelContent from './PanelContent';
import Animate from 'rc-animate';

const CollapsePanel = React.createClass({
  propTypes: {
    children: PropTypes.any,
    openAnimation: PropTypes.object,
    prefixCls: PropTypes.string,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ]),
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func,
    className: PropTypes.string
  },

  getDefaultProps() {
    return {
      isActive: false,
      onItemClick() {
      },
    };
  },

  handleItemClick() {
    this.props.onItemClick();
  },

  render() {
    const { prefixCls, header, children, isActive, className } = this.props;
    const headerCls = `${prefixCls}-header`;
    return (
      <div className={className ? className + ' ' + `${prefixCls}-item` : `${prefixCls}-item`}>
        <div
          className={headerCls}
          onClick={this.handleItemClick}
          role="tab"
          aria-expanded={isActive}
        >
          <i className="arrow"></i>
          {header}
        </div>
        <Animate
          showProp="isActive"
          exclusive
          component=""
          animation={this.props.openAnimation}
        >
          <PanelContent prefixCls={prefixCls} isActive={isActive}>
            {children}
          </PanelContent>
        </Animate>
      </div>
    );
  },
});

export default CollapsePanel;
