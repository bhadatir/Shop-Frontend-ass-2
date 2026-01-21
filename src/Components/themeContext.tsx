// import { createContext } from 'react';
// import { useState } from 'react';

// const ThemeContext = createContext(null);

// type ThemeContextType = {
//     theme: string;
//     toggleTheme: () => void;
// };

// export default function themeContext({children}: {children : React.ReactNode}){

//     const [theme, setTheme] = useState("light");

//     const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//     };

//     return(
//         <ThemeContext.Provider value={{theme,toggleTheme}}>
//             { children }
//         </ThemeContext.Provider>
//     );
// }
