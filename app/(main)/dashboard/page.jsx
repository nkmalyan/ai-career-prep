import { getIndustryInsights } from '@/actions/dashboard';
import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react'
import DashboardView from './_components/dashboard-view';

const IndustryInsightsPage = async () => {

  // checking onboarding status...
  const { isOnboarded } = await getUserOnboardingStatus()
  // if not onboarded redirect to onboarding page...
  if(!isOnboarded){
    redirect("/onboarding");
  }

  // getting industry insights..
  const insights  = await getIndustryInsights();
  return (
    <div className=''>
      <DashboardView insights={insights}/>
    </div>
  )
}

export default IndustryInsightsPage
