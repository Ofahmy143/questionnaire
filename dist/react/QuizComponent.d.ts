import React from 'react';
import { QuizConfig } from '../core/types';
interface QuizComponentProps {
    config: QuizConfig;
    className?: string;
    questionClassName?: string;
    buttonClassName?: string;
}
export declare const QuizComponent: React.FC<QuizComponentProps>;
export {};
