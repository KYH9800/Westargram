import React from 'react';
// CSS
import { ActivityWrapper } from '../../style/NavMenu/Activity';
// components
import ActivityEntry from './ActivityEntry';

const Activity = () => {
  return (
    <ActivityWrapper>
      <div id="activity-box-point"></div>
      <div id="activity-list">
        <div className="list-keyword">오늘</div>
        <ActivityEntry />
        <ActivityEntry />
        <div id="activity-br"></div>
        <div className="list-keyword">이번 주</div>
        <ActivityEntry />
        <ActivityEntry />
        <div id="activity-br"></div>
        <div className="list-keyword">이번 달</div>
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
        <ActivityEntry />
      </div>
    </ActivityWrapper>
  );
};

export default Activity;
