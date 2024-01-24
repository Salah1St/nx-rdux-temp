'use client';
import { useDashboard } from '@/context/DashboardContext';
import DashboardHeader from './DashboardHeader';
import DashboardLeftSideBar from './DashboardLeftSideBar';
import DashboardRightSideBar from './DashboardRightSideBar';
import { ReactNode } from 'react';

interface DashboardProps {
  children: ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  const {
    toggleLeftSideBar,
    handleToggleLeftSideBar,
    toggleRightSideBar,
    handleToggleRightSideBar
  } = useDashboard();
  return (
    <div className='flex'>
      <div
        className={`transform transition-transform ease-in-out ${
          toggleLeftSideBar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {toggleLeftSideBar && <DashboardLeftSideBar />}
      </div>
      <div className='flex-grow'>
        <DashboardHeader
          handleToggleLeftSideBar={handleToggleLeftSideBar}
          handleToggleRightSideBar={handleToggleRightSideBar}
        />
        <div>{children}</div>
      </div>
      <div
        className={`transform transition-transform ease-in-out ${
          toggleRightSideBar ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {toggleRightSideBar && <DashboardRightSideBar />}
      </div>
    </div>
  );
}
