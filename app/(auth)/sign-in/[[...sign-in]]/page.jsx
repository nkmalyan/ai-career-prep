import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <SignIn/>
    </div>
);
};

export default Page
