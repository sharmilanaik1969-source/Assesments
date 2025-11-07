import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultsDisplay from './components/ResultsDisplay';
import TestSelectionScreen from './components/TestSelectionScreen';
import VedicNumerologyInput from './components/VedicNumerologyInput';
import NumerologyResults from './components/NumerologyResults';
import MoneyReikiResults from './components/MoneyReikiResults';
import LandingPage from './components/LandingPage';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import LanguageSwitcher from './components/LanguageSwitcher';
import { translations } from './translations';
import { QUESTIONS, ANSWER_OPTIONS, MONEY_REIKI_QUESTIONS } from './constants';
import { Language, Screen, NumerologyData } from './types';
import { calculatePsychicNumber, calculateDestinyNumber, calculateNameNumber } from './utils/numerology';


const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('landing');
  const [language, setLanguage] = useState<Language>('en');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  
  // Chakra Test State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  
  // Numerology State
  const [numerologyData, setNumerologyData] = useState<NumerologyData | null>(null);

  // Money Reiki State
  const [moneyReikiCurrentQuestionIndex, setMoneyReikiCurrentQuestionIndex] = useState(0);
  const [moneyReikiAnswers, setMoneyReikiAnswers] = useState<{ [key: number]: number }>({});
  
  const t = translations[language];

  const handleLandingStart = () => {
    setScreen('signup');
  };

  const handleAuthSuccess = (email: string) => {
    setUserEmail(email);
    setScreen('welcome');
  };

  const navigateToLogin = () => setScreen('login');
  const navigateToSignup = () => setScreen('signup');

  const handleStart = () => {
    setScreen('testSelection');
  };
  
  const handleSelectTest = (testType: 'chakra' | 'numerology' | 'moneyReiki') => {
    if (testType === 'chakra') {
      setScreen('questionnaire');
    } else if (testType === 'numerology') {
      setScreen('numerologyInput');
    } else {
      setScreen('moneyReikiQuestionnaire');
    }
  };

  const handleAnswer = (answerValue: number) => {
    const questionId = QUESTIONS[currentQuestionIndex].id;
    const newAnswers = { ...answers, [questionId]: answerValue };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScreen('chakraResults');
    }
  };
  
  const handleMoneyReikiAnswer = (answerValue: number) => {
    const questionId = MONEY_REIKI_QUESTIONS[moneyReikiCurrentQuestionIndex].id;
    const newAnswers = { ...moneyReikiAnswers, [questionId]: answerValue };
    setMoneyReikiAnswers(newAnswers);

    if (moneyReikiCurrentQuestionIndex < MONEY_REIKI_QUESTIONS.length - 1) {
      setMoneyReikiCurrentQuestionIndex(moneyReikiCurrentQuestionIndex + 1);
    } else {
      setScreen('moneyReikiResults');
    }
  };

  const handleNumerologySubmit = (date: string, name: string) => {
    // Adding timezone offset to prevent day-before issues
    const dateObj = new Date(date);
    const correctedDate = new Date(dateObj.valueOf() + dateObj.getTimezoneOffset() * 60 * 1000);

    const day = correctedDate.getDate();
    const month = correctedDate.getMonth() + 1;
    const year = correctedDate.getFullYear();

    const psychicNumber = calculatePsychicNumber(day);
    const destinyNumber = calculateDestinyNumber(day, month, year);
    const nameNumber = calculateNameNumber(name);
    
    setNumerologyData({ psychicNumber, destinyNumber, nameNumber });
    setScreen('numerologyResults');
  };
  
  const resetState = () => {
      setScreen('testSelection');
      setCurrentQuestionIndex(0);
      setAnswers({});
      setNumerologyData(null);
      setMoneyReikiCurrentQuestionIndex(0);
      setMoneyReikiAnswers({});
  }

  const renderScreen = () => {
    switch (screen) {
      case 'landing':
        return <LandingPage onStart={handleLandingStart} t={t} />;
      case 'signup':
        return <SignupScreen onSignup={handleAuthSuccess} onNavigateToLogin={navigateToLogin} t={t} />;
      case 'login':
        return <LoginScreen onLogin={handleAuthSuccess} onNavigateToSignup={navigateToSignup} t={t} />;
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} t={t} />;
      case 'testSelection':
        return <TestSelectionScreen onSelectTest={handleSelectTest} t={t} />;
      case 'questionnaire':
        return (
          <div className="w-full flex flex-col items-center">
            <ProgressBar current={currentQuestionIndex + 1} total={QUESTIONS.length} t={t} />
            <QuestionCard
              question={QUESTIONS[currentQuestionIndex]}
              answerOptions={ANSWER_OPTIONS}
              onAnswer={handleAnswer}
              language={language}
            />
          </div>
        );
      case 'moneyReikiQuestionnaire':
        return (
          <div className="w-full flex flex-col items-center">
            <ProgressBar current={moneyReikiCurrentQuestionIndex + 1} total={MONEY_REIKI_QUESTIONS.length} t={t} />
            <QuestionCard
              question={MONEY_REIKI_QUESTIONS[moneyReikiCurrentQuestionIndex]}
              answerOptions={ANSWER_OPTIONS}
              onAnswer={handleMoneyReikiAnswer}
              language={language}
            />
          </div>
        );
      case 'numerologyInput':
        return <VedicNumerologyInput onSubmit={handleNumerologySubmit} t={t} />;
      case 'chakraResults':
        return <ResultsDisplay answers={answers} onBack={resetState} t={t} language={language} />;
      case 'numerologyResults':
        return numerologyData && <NumerologyResults data={numerologyData} onBack={resetState} t={t} language={language} />;
      case 'moneyReikiResults':
        return <MoneyReikiResults answers={moneyReikiAnswers} onBack={resetState} t={t} language={language} />;
      default:
        return <LandingPage onStart={handleLandingStart} t={t} />;
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 bg-cover bg-center" style={{backgroundImage: "url('/background.jpg')"}}>
       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
       <LanguageSwitcher language={language} setLanguage={setLanguage} t={t} />
       <div className="relative z-10 w-full flex flex-col items-center justify-center">
         {renderScreen()}
       </div>
    </main>
  );
};

export default App;
import React from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import "./index.css";

export default function App() {
  return <WelcomeScreen />;
}

