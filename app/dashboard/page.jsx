// Dashboard.js
"use client";
import React, { useState } from 'react';
import DashboardComponent from "@/app/dashboard/components/dashboardComponent";
import withAuth from '@/app/auth/withAuth';
import UserProfileCard from './components/userProfileCard';

const Dashboard = () => {
    const [userType] = useState(localStorage.getItem('user_type'))
  return (
      <div>
        {/* <DashboardComponent userType={userType}/> */}
        <UserProfileCard />
      </div>
  );
};

export default withAuth(Dashboard);
