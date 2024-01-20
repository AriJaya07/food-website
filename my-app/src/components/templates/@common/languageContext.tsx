'use client' // This is a client component 👈🏽

import React, { createContext, useContext, useState } from 'react';

// @ts-ignore
const LanguageContext = createContext();

// @ts-ignore
export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('eng');

	const changeLanguage = (newLanguage: any): void => {
		setLanguage(newLanguage);
	};

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}

	return context;
};

// Add the dependencies array for ESLint
useLanguage.dependencies = [LanguageContext];
