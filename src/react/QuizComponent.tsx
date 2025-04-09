import React from 'react';
import { QuizConfig, Question } from '../core/types';
import { useQuiz } from './hooks/useQuiz';

interface QuizComponentProps {
    config: QuizConfig;
    className?: string;
    questionClassName?: string;
    buttonClassName?: string;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({
    config,
    className,
    questionClassName,
    buttonClassName
}) => {
    const { answers, results, isSubmitting, handleAnswer, submitQuiz } = useQuiz(config);

    const renderQuestion = (question: Question) => {
        const answer = answers.find(a => a.questionId === question.id);

        return (
            <div key={question.id} className={questionClassName}>
                <p>{question.text}</p>
                <div>
                    <button
                        onClick={() => handleAnswer(question.id, true)}
                        className={`${buttonClassName} ${answer?.value === true ? 'active' : ''}`}
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => handleAnswer(question.id, false)}
                        className={`${buttonClassName} ${answer?.value === false ? 'active' : ''}`}
                    >
                        No
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className={className}>
            {config.questions.map(renderQuestion)}

            <button
                onClick={submitQuiz}
                disabled={isSubmitting || answers.length !== config.questions.length}
            >
                Submit
            </button>

            {results && (
                <div>
                    <h3>Results</h3>
                    <p>Score: {results.score}%</p>
                    <p>Outcome: {results.outcome}</p>
                </div>
            )}
        </div>
    );
}; 