
import { industries } from '@/Data/industries';
import OnboardingForm from './_components/onboarding-form';
import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';

const OnboardingPage = async () => {
  // check whether the user is onboarded or not
  const { isOnboarded } = await getUserOnboardingStatus()

  if(isOnboarded){
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  )
}

export default OnboardingPage
