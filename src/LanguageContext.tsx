import React, { createContext, useState, useContext } from 'react';

export const languageContext: React.Context<any> = createContext();

export function useLanguage() {
	return useContext(languageContext)
}
export function LanguageProvider({ children }: {
	children: React.ReactChild
	| React.ReactChild[]
}) {
	const [language, setLanguage] = useState('en');

	return (
		<languageContext.Provider value={[language, setLanguage]}>
			{children}
		</languageContext.Provider>
	)
}
