export interface Question {
  id: number;
  text: { [key in Language]: string };
  chakra: string;
}

export interface AnswerOption {
  text: { [key in Language]: string };
  value: number;
}

export interface Chakra {
  id: string;
  name: string;
  color: string;
}

export interface ChakraScore {
    chakraId: string;
    name: string;
    score: number;
    color: string;
}

export interface NumerologyData {
  psychicNumber: number;
  destinyNumber: number;
  nameNumber: number;
}

export type Screen = 'landing' | 'signup' | 'login' | 'welcome' | 'testSelection' | 'questionnaire' | 'numerologyInput' | 'chakraResults' | 'numerologyResults' | 'moneyReikiQuestionnaire' | 'moneyReikiResults';

export type Language = 'en' | 'hi' | 'mr';

export interface Translations {
  [key: string]: {
    // Language
    selectLanguage: string;

    // Landing Page
    landingTitle: string;
    landingSubtitle: string;
    landingCTA: string;
    servicesTitle: string;
    chakraServiceTitle: string;
    chakraServiceDesc: string;
    numerologyServiceTitle: string;
    numerologyServiceDesc: string;
    moneyReikiServiceTitle: string;
    moneyReikiServiceDesc: string;
    developerCredit: string;
    visitWebsiteCTA: string;
    visitWebsiteLink: string;

    // Signup Screen
    signupTitle: string;
    nameLabel: string;
    passwordLabel: string;
    signupButton: string;
    signupToLoginPrompt: string;
    loginLink: string;

    // Login Screen
    loginTitle: string;
    emailLabel: string;
    continueButton: string;
    invalidEmailError: string;
    loginToSignupPrompt: string;
    signupLink: string;


    // Welcome Screen
    welcomeTitle: string;
    welcomeSubtitle: string;
    startButton: string;
    learnMoreCTA: string;
    
    // Test Selection
    selectTestTitle: string;
    chakraTestButton: string;
    numerologyTestButton: string;
    moneyReikiTestButton: string;
    exploreServicesCTA: string;
    
    // Chakra Test
    progress: string;
    of: string;
    chakraResultsTitle: string;

    // Numerology Test
    dateOfBirthLabel: string;
    fullNameLabel: string;
    calculateButton: string;
    numerologyResultsTitle: string;
    numerologyPsychic: string;
    numerologyDestiny: string;
    numerologyName: string;
    
    // Money Reiki Test
    moneyReikiResultsTitle: string;

    // Common
    backButton: string;
    backToSelectionButton: string;
    downloadPdfButton: string;
    downloadingPdfButton: string;
    bookConsultationButton: string;
    loading: string;
    error: string;

    // Feedback
    feedbackPrompt: string;
    feedbackYes: string;
    feedbackNo: string;
    feedbackThanks: string;
  };
}