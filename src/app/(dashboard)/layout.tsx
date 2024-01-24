import DashboardContextProvider from '@/context/DashboardContext';
import Dashboard from '@widget/dashboard/Dashboard';
import React from 'react';

function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <DashboardContextProvider>
      <Dashboard>{children}</Dashboard>
    </DashboardContextProvider>
  );
}

export default DashboardLayout;
