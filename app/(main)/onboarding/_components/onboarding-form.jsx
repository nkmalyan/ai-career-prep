"use client";
import { useEffect, useState} from "react";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { onboardingSchema } from '@/app/lib/schema'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";
import { updateUser } from "@/actions/user";
import { Loader2 } from "lucide-react";

const OnboardingForm = ({ industries }) => {

  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();

  // update user fn..
  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
  } = useFetch(updateUser)
  

  const {register, 
        handleSubmit, 
        formState: { errors },
        setValue,
        watch,
      } = useForm({
        resolver: zodResolver(onboardingSchema),
  });

  // form submit fn
  const onSubmit = async (values) => {
    try {
      const formattedIndustry = `${values.industry}-${values.subIndustry
        .toLowerCase()
        .replace(/ /g, "-")}`;

      await updateUserFn({
        ...values,
        industry: formattedIndustry,
      });
    } catch (error) {
      console.error("Onboarding error:", error);
    }
  };

  // this will run when something inside the dependancy array changes..
  useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      toast.success("Profile completed successfully!");
      router.push("/dashboard");
      router.refresh();
    }
  }, [updateResult, updateLoading]);

  const watchIndustries = watch("industry");

  return (
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2 my-2">
        <CardHeader>
          <CardTitle className="gradient-title text-4xl">Complete Your Profile</CardTitle>
          <CardDescription>Select your industry to get personalized career insights and recommendations.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6"  onSubmit ={handleSubmit(onSubmit)}>
          <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
            <Select
              onValueChange={(value) => {
                setValue("industry", value);
                setSelectedIndustry(
                  industries.find((ind) => ind.id === value)
                );
                setValue("subIndustry", "");
              }}
            >
              <SelectTrigger id="industry" className={"w-full"}>
                <SelectValue placeholder="Select Your Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) =>{
                  return (
                    <SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-sm text-red-500">
                errors.industry.message
              </p>
            )}
          </div>

          {/* subindustries */}
          { watchIndustries && (
          <div className="space-y-2">
          <Label htmlFor="subIndustry" className="">Specialization</Label>
            <Select
              onValueChange={(value) => setValue("subIndustry", value)}
            >
              <SelectTrigger id="subIndustry" className={"w-full"}>
                <SelectValue placeholder="Select Your Sub-Industry"/>
              </SelectTrigger>
              <SelectContent>
                {selectedIndustry?.subIndustries.map((ind) =>{
                  return (
                    <SelectItem value={ind} key={ind}>{ind}</SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
            {errors.sunIndustry && (
              <p className="text-sm text-red-500">
                errors.subIndustry.message
              </p>
            )}
          </div> )}


          {/* asking questions */}

          {/* asking experience */}
          <div className="space-y-2">
          <Label htmlFor="experience" className="">Years of Experience</Label>
          <Input
            id="experience"
            type="number"
            min="0"
            max="50"
            placeholder="Enter years of experience"
            {...register("experience")}
          />
            
            {errors.experience && (
              <p className="text-sm text-red-500">
                errors.experience.message
              </p>
            )}
          </div>

          {/* asking skills */}
          <div className="space-y-2">
          <Label htmlFor="skills" className="">Related Skills</Label>
          <Input
            id="skills"
            placeholder="e.g., C++, Python, Java, Marketing etc"
            {...register("skills")}
          />
          <p className="text-sm text-muted-foreground">
            Skills should me in comma separated format.
          </p>
            {errors.skills && (
              <p className="text-sm text-red-500">
                errors.skills.message
              </p>
            )}
          </div>
          
          
          {/* asking bio */}
          <div className="space-y-2">
          <Label htmlFor="bio" className="">Your Professional Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell us about your Professional background"
            className="h-32"
            {...register("bio")}
          />
            {errors.bio && (
              <p className="text-sm text-red-500">
                errors.bio.message
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={updateLoading}>
              {updateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Getting your profile ready..
                </>
              ) : (
                "Lets begin with us."
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

    </div>
  )
}

export default OnboardingForm
