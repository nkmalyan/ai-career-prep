import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Trophy, XCircle } from 'lucide-react';
import React from 'react'

export default function QuizResult({result,hideStartNew = false,onStartNew,}) {
  
    if(!result) return null;
  
    return (
        <div className='mx-auto'>
            <div className="flex items-center justify-center">
                <h1 className='flex items-center gap-2 text-3xl gradient-title pt-4'>
                    <Trophy className='h-6 w-6 text-yellow-500'/>
                    Quiz Results
                </h1>
            </div>
            <CardContent className="">
                {/* overview of the score */}
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">{result.quizScore.toFixed(1)}%</h3>
                    <Progress value={result.quizScore} className="w-full" />
                </div>

                {/* if result tip is present rendering it */}
                {result.improvementTip && (
                    <div className="bg-muted p-4 rounded-lg my-6">
                        <p className="font-medium">Improvement Tip:</p>
                        <p className="text-muted-foreground">{result.improvementTip}</p>
                    </div>
                )}   

                {/* reviewing the questions */}
                <div className="space-y-6 mx-auto">
                    <h3 className="text-2xl mt-6">Question Review</h3>
                    {result.questions.map((q, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-start justify-between gap-2">
                                <p className="font-medium">{q.question}</p>
                                {q.isCorrect ? (
                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                ) : (
                                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                                )}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                <p>Your answer: {q.userAnswer}</p>
                                {!q.isCorrect && <p>Correct answer: {q.answer}</p>}
                            </div>
                            <div className="text-sm bg-muted p-2 rounded">
                                <p className="font-medium">Explanation:</p>
                                <p>{q.explanation}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </CardContent>

            {!hideStartNew && (
                <CardFooter className="my-4">
                    <Button onClick={onStartNew} className="w-full">
                        Start New Quiz
                    </Button>
                </CardFooter>
            )}

        </div>
    )
}

