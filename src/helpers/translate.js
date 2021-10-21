export function translateHelper(textId, language) {
  if (language === 'english') {
    if (textId === 'welcome_message') {
      return 'Welcome'
    } else if (textId === 'sign_in') {
      return 'Sign In'
    } else if (textId === 'main_title') {
      return 'Borderless. Everything in the world of series, movies and beyond.'
    } else if (textId === 'subtitle') {
      return 'Watch it from anywhere, at the time of your choice.'
    } else if (textId === 'signin_label') {
      return 'Ready to venture out? Just enter your email in the field below to register or reset your subscription.'
    } else if (textId === 'signup-bottom') {
      return 'Get Started'
    }
  } else if (language === 'portuguese') {
    if (textId === 'welcome_message') {
      return 'Bem-Vindo'
    } else if (textId === 'sign_in') {
      return 'Entrar'
    } else if (textId === 'main_title') {
      return 'Sem fronteiras. Tudo que há no mundo de séries, filmes e além.'
    } else if (textId === 'subtitle') {
      return 'Assista de todo lugar, na hora de sua preferência.'
    } else if (textId === 'signin_label') {
      return 'Pronto para se aventurar? Basta colocar seu email no campo abaixo para se cadastrar ou reiniciar sua assinatura.'
    } else if (textId === 'signup-bottom') {
      return 'Vamos lá'
    }
  }
}