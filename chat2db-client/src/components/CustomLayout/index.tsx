import React, { memo } from 'react';
import styles from './index.less';
import classnames from 'classnames';
import { useWorkspaceStore } from '@/store/workspace';

interface IProps {
  className?: string;
}

export default memo<IProps>((props) => {
  const { className } = props;
  const { panelLeft, togglePanelLeft } = useWorkspaceStore((state) => {
    return {
      togglePanelLeft: state.togglePanelLeft,
      panelLeft: state.layout.panelLeft,
    };
  });

  return (
    <div className={classnames(styles.customLayout, className)}>
      <div
        className={classnames(styles.iconPanelLeft, styles.iconPanel, { [styles.iconPanelLeftHidden]: !panelLeft })}
        onClick={togglePanelLeft}
      />
      {/* <div className={classnames(styles.iconPanelRight, styles.iconPanel, { [styles.iconPanelRightHidden]: false })} /> */}
    </div>
  );
});
