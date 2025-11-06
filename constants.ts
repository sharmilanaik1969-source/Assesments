import { Question, AnswerOption, Chakra } from './types';

export const APP_NAME = "Sharmilas Divine Blessings - Chakra Test";

export const CHAKRAS: Chakra[] = [
  { id: 'root', name: 'Root Chakra', color: '#EF4444' },
  { id: 'sacral', name: 'Sacral Chakra', color: '#F97316' },
  { id: 'solar', name: 'Solar Plexus Chakra', color: '#EAB308' },
  { id: 'heart', name: 'Heart Chakra', color: '#22C55E' },
  { id: 'throat', name: 'Throat Chakra', color: '#3B82F6' },
  { id: 'third-eye', name: 'Third Eye Chakra', color: '#6366F1' },
  { id: 'crown', name: 'Crown Chakra', color: '#8B5CF6' },
];

export const QUESTIONS: Question[] = [
  // Root Chakra
  { id: 1, text: { en: "I feel grounded, stable, and secure in my life.", hi: "मैं अपने जीवन में आधारित, स्थिर और सुरक्षित महसूस करता/करती हूँ।", mr: "मला माझ्या जीवनात स्थिर, सुरक्षित आणि जमिनीवर असल्यासारखे वाटते." }, chakra: 'root' },
  { id: 2, text: { en: "I have a strong connection to my body and the physical world.", hi: "मेरा मेरे शरीर और भौतिक दुनिया से एक मजबूत संबंध है।", mr: "माझे माझ्या शरीराशी आणि भौतिक जगाशी एक मजबूत नाते आहे." }, chakra: 'root' },
  { id: 3, text: { en: "I trust in my ability to meet my basic needs.", hi: "मुझे अपनी मूलभूत आवश्यकताओं को पूरा करने की अपनी क्षमता पर भरोसा है।", mr: "माझ्या मूलभूत गरजा पूर्ण करण्याच्या माझ्या क्षमतेवर माझा विश्वास आहे." }, chakra: 'root' },

  // Sacral Chakra
  { id: 4, text: { en: "I allow myself to feel and express my emotions freely.", hi: "मैं खुद को अपनी भावनाओं को स्वतंत्र रूप से महसूस करने और व्यक्त करने की अनुमति देता/देती हूँ।", mr: "मी स्वतःला माझ्या भावना मोकळेपणाने अनुभवण्यास आणि व्यक्त करण्यास परवानगी देतो/देते." }, chakra: 'sacral' },
  { id: 5, text: { en: "I embrace pleasure and creativity in my daily life.", hi: "मैं अपने दैनिक जीवन में आनंद और रचनात्मकता को अपनाता/अपनाती हूँ।", mr: "मी माझ्या दैनंदिन जीवनात आनंद आणि सर्जनशीलता स्वीकारतो/स्वीकारते." }, chakra: 'sacral' },
  { id: 6, text: { en: "My relationships are healthy and fulfilling.", hi: "मेरे रिश्ते स्वस्थ और संतोषजनक हैं।", mr: "माझे नातेसंबंध निरोगी आणि समाधानकारक आहेत." }, chakra: 'sacral' },

  // Solar Plexus Chakra
  { id: 7, text: { en: "I am confident in my abilities and personal power.", hi: "मुझे अपनी क्षमताओं और व्यक्तिगत शक्ति पर विश्वास है।", mr: "मला माझ्या क्षमतांवर आणि वैयक्तिक सामर्थ्यावर विश्वास आहे." }, chakra: 'solar' },
  { id: 8, text: { en: "I can set clear boundaries and stand up for myself.", hi: "मैं स्पष्ट सीमाएँ निर्धारित कर सकता/सकती हूँ और अपने लिए खड़ा हो सकता/सकती हूँ।", mr: "मी स्पष्ट सीमा निश्चित करू शकतो/शकते आणि स्वतःसाठी उभे राहू शकतो/शकते." }, chakra: 'solar' },
  { id: 9, text: { en: "I am motivated and have a strong sense of purpose.", hi: "मैं प्रेरित हूँ और मेरे पास उद्देश्य की एक मजबूत भावना है।", mr: "मी प्रेरित आहे आणि माझ्याकडे उद्देशाची तीव्र भावना आहे." }, chakra: 'solar' },

  // Heart Chakra
  { id: 10, text: { en: "I give and receive love easily.", hi: "मैं आसानी से प्यार देता/देती और प्राप्त करता/करती हूँ।", mr: "मी सहजपणे प्रेम देतो/देते आणि घेतो/घेते." }, chakra: 'heart' },
  { id: 11, text: { en: "I feel compassion for myself and others.", hi: "मैं अपने और दूसरों के प्रति करुणा महसूस करता/करती हूँ।", mr: "मला स्वतःबद्दल आणि इतरांबद्दल सहानुभूती वाटते." }, chakra: 'heart' },
  { id: 12, text: { en: "I am able to forgive and let go of resentment.", hi: "मैं माफ करने और नाराजगी को छोड़ने में सक्षम हूँ।", mr: "मी क्षमा करण्यास आणि द्वेष सोडून देण्यास सक्षम आहे." }, chakra: 'heart' },

  // Throat Chakra
  { id: 13, text: { en: "I express my truth with clarity and confidence.", hi: "मैं अपनी सच्चाई को स्पष्टता और आत्मविश्वास के साथ व्यक्त करता/करती हूँ।", mr: "मी माझे सत्य स्पष्टपणे आणि आत्मविश्वासाने व्यक्त करतो/करते." }, chakra: 'throat' },
  { id: 14, text: { en: "I am a good listener.", hi: "मैं एक अच्छा श्रोता हूँ।", mr: "मी एक चांगला श्रोता आहे." }, chakra: 'throat' },
  { id: 15, text: { en: "I feel heard and understood when I communicate.", hi: "जब मैं संवाद करता/करती हूँ तो मुझे सुना और समझा हुआ महसूस होता है।", mr: "जेव्हा मी संवाद साधतो/साधते, तेव्हा माझे ऐकले जाते आणि समजले जाते असे मला वाटते." }, chakra: 'throat' },

  // Third Eye Chakra
  { id: 16, text: { en: "I trust my intuition and inner guidance.", hi: "मुझे अपनी अंतर्ज्ञान और आंतरिक मार्गदर्शन पर भरोसा है।", mr: "माझा माझ्या अंतर्ज्ञानावर आणि आंतरिक मार्गदर्शनावर विश्वास आहे." }, chakra: 'third-eye' },
  { id: 17, text: { en: "I am open to new ideas and perspectives.", hi: "मैं नए विचारों और दृष्टिकोणों के लिए खुला/खुली हूँ।", mr: "मी नवीन कल्पना आणि दृष्टिकोनांसाठी खुला/खुली आहे." }, chakra: 'third-eye' },
  { id: 18, text: { en: "I have a clear vision for my future.", hi: "मेरे पास अपने भविष्य के लिए एक स्पष्ट दृष्टि है।", mr: "माझ्याकडे माझ्या भविष्यासाठी एक स्पष्ट दृष्टी आहे." }, chakra: 'third-eye' },

  // Crown Chakra
  { id: 19, text: { en: "I feel a strong connection to a higher power or consciousness.", hi: "मैं एक उच्च शक्ति या चेतना से एक मजबूत संबंध महसूस करता/करती हूँ।", mr: "मला उच्च शक्ती किंवा चेतनेशी एक मजबूत संबंध जाणवतो." }, chakra: 'crown' },
  { id: 20, text: { en: "I feel a sense of unity with the world around me.", hi: "मैं अपने आसपास की दुनिया के साथ एकता की भावना महसूस करता/करती हूँ।", mr: "मला माझ्या सभोवतालच्या जगाशी एकतेची भावना जाणवते." }, chakra: 'crown' },
  { id: 21, text: { en: "I am open to spiritual wisdom and insight.", hi: "मैं आध्यात्मिक ज्ञान और अंतर्दृष्टि के लिए खुला/खुली हूँ।", mr: "मी आध्यात्मिक ज्ञान आणि अंतर्दृष्टीसाठी खुला/खुली आहे." }, chakra: 'crown' },
];

export const MONEY_REIKI_QUESTIONS: Question[] = [
  // Worthiness and Beliefs
  { id: 101, text: { en: "I believe I am truly worthy of financial abundance and prosperity.", hi: "मेरा मानना है कि मैं वास्तव में वित्तीय प्रचुरता और समृद्धि के योग्य हूँ।", mr: "माझा विश्वास आहे की मी खरोखरच आर्थिक विपुलता आणि समृद्धीसाठी पात्र आहे." }, chakra: 'money-reiki' },
  { id: 102, text: { en: "I see money as a positive energy and a tool for creating good in my life and the lives of others.", hi: "मैं पैसे को एक सकारात्मक ऊर्जा और अपने और दूसरों के जीवन में अच्छा करने के लिए एक उपकरण के रूप में देखता/देखती हूँ।", mr: "मी पैशाला एक सकारात्मक ऊर्जा आणि माझ्या व इतरांच्या जीवनात चांगले निर्माण करण्याचे साधन म्हणून पाहतो/पाहते." }, chakra: 'money-reiki' },
  { id: 103, text: { en: "I trust in the universe's abundance and its ability to provide for all my needs.", hi: "मुझे ब्रह्मांड की प्रचुरता और मेरी सभी जरूरतों को पूरा करने की उसकी क्षमता पर भरोसा है।", mr: "माझा विश्वाच्या विपुलतेवर आणि माझ्या सर्व गरजा पुरवण्याच्या क्षमतेवर विश्वास आहे." }, chakra: 'money-reiki' },
  // Emotional Relationship with Money
  { id: 104, text: { en: "I feel joy and ease when spending money on things that nourish me.", hi: "जब मैं उन चीजों पर पैसा खर्च करता/करती हूँ जो मुझे पोषित करती हैं, तो मुझे खुशी और सहजता महसूस होती है।", mr: "जेव्हा मी माझ्या पोषणासाठीच्या गोष्टींवर पैसे खर्च करतो/करते, तेव्हा मला आनंद आणि सहजता वाटते." }, chakra: 'money-reiki' },
  { id: 105, text: { en: "I am open and grateful when receiving money, gifts, or opportunities.", hi: "मैं पैसा, उपहार या अवसर प्राप्त करते समय खुला/खुली और आभारी रहता/रहती हूँ।", mr: "पैसे, भेटवस्तू किंवा संधी स्वीकारताना मी मनमोकळा/मनमोकळी आणि कृतज्ञ असतो/असते." }, chakra: 'money-reiki' },
  { id: 106, text: { en: "I feel calm and confident about my financial future.", hi: "मैं अपने वित्तीय भविष्य के बारे में शांत और आत्मविश्वासी महसूस करता/करती हूँ।", mr: "मला माझ्या आर्थिक भविष्याबद्दल शांत आणि आत्मविश्वास वाटतो." }, chakra: 'money-reiki' },
  // Actions and Mindset
  { id: 107, text: { en: "I celebrate my financial successes, both big and small.", hi: "मैं अपनी वित्तीय सफलताओं का जश्न मनाता/मनाती हूँ, चाहे वह बड़ी हो या छोटी।", mr: "मी माझ्या लहान-मोठ्या आर्थिक यशाचा आनंद साजरा करतो/करते." }, chakra: 'money-reiki' },
  { id: 108, text: { en: "I am proactive about creating financial flow and opportunities in my life.", hi: "मैं अपने जीवन में वित्तीय प्रवाह और अवसर पैदा करने के बारे में सक्रिय हूँ।", mr: "मी माझ्या जीवनात आर्थिक प्रवाह आणि संधी निर्माण करण्याबद्दल सक्रिय आहे." }, chakra: 'money-reiki' },
  { id: 109, text: { en: "I release old family beliefs or past experiences that limit my financial potential.", hi: "मैं पुरानी पारिवारिक मान्यताओं या पिछले अनुभवों को छोड़ता/छोड़ती हूँ जो मेरी वित्तीय क्षमता को सीमित करते हैं।", mr: "मी जुन्या कौटुंबिक समजुती किंवा भूतकाळातील अनुभव सोडून देतो/देते जे माझ्या आर्थिक क्षमतेला मर्यादित करतात." }, chakra: 'money-reiki' },
];


export const ANSWER_OPTIONS: AnswerOption[] = [
  { text: { en: 'Strongly Disagree', hi: 'दृढ़ता से असहमत', mr: 'पूर्णपणे असहमत' }, value: 1 },
  { text: { en: 'Disagree', hi: 'असहमत', mr: 'असहमत' }, value: 2 },
  { text: { en: 'Neutral', hi: 'तटस्थ', mr: 'तटस्थ' }, value: 3 },
  { text: { en: 'Agree', hi: 'सहमत', mr: 'सहमत' }, value: 4 },
  { text: { en: 'Strongly Agree', hi: 'दृढ़ता से सहमत', mr: 'पूर्णपणे सहमत' }, value: 5 },
];