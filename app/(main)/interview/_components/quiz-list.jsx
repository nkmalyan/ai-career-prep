"use client"
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { format } from 'date-fns';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import QuizResult from './quiz-result';

const QuizList = ({assessments}) => {
    const router = useRouter();
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    
    const decideColor=(assessment)=>{
      if(assessment.quizScore.toFixed(1)>70){
        return "border-green-500";
      }     
      if(assessment.quizScore.toFixed(1)>40){
        return "border-yellow-500"
      }
      if(assessment.quizScore.toFixed(1)>=30){
        return "border-orange-400";
      }     
      return "border-red-500";
    }

    const getIcon=(assessment)=>{
      if(assessment.quizScore.toFixed(1)<30){
        return <TrendingDown color="#ff0000" />
      } 
      if(assessment.quizScore.toFixed(1)<40){
        return <TrendingDown color="#e55757" />
      } 
      return  <TrendingUp color='#00ff2a'/>
    }
    
    return (
      <>
        <Card className="bg-black">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="gradient-title text-3xl md:text-4xl">
                Recent Quizzes
              </CardTitle>
              <CardDescription className="">Review Your Past Quiz Performance</CardDescription>
            </div>
            <Button onClick={() => router.push("/interview/mock")}>
              Start New Quiz
            </Button>
          </CardHeader>
          <CardContent>
            <div className='space-y-6'>
              {assessments.map((assessment,i)=>{
                return (
                  <Card
                    key={assessment.id}
                    onClick={() => setSelectedQuiz(assessment)}
                    className={`cursor-pointer hover:bg-muted/50 transition-colors border-2 ${decideColor(assessment)}`}
                  >
                    <CardHeader>
                      <CardTitle>
                        <div className='flex items-center justify-between'>
                          Quiz {i+1}
                          {getIcon(assessment)}
                        </div>
                      </CardTitle>
                      <CardDescription className="flex justify-between w-full">
                        <div>
                          Score: {assessment.quizScore.toFixed(1)}%
                        </div>
                        <div>
                          {format(
                            new Date(assessment.createdAt),
                            "MMMM dd, yyyy HH:mm"
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground'>
                        {assessment.improvementTip}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>
        

        {/* dialog box */}
        <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle></DialogTitle>
            </DialogHeader>
            <QuizResult
              result={selectedQuiz}
              onStartNew={() => router.push("/interview/mock")}
              hideStartNew
            />
          </DialogContent>
        </Dialog>
      </>
    )
}

export default QuizList;
