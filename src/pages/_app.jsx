import LanguageContextProvider from "@/context/LanguageContext"
import "../assets/style/main.scss"


export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <Component {...pageProps} />
    </LanguageContextProvider>
  )
}
