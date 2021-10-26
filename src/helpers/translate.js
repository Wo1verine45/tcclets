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
    } else if (textId === 'login-input') {
      return 'Email or phone number'
    } else if (textId === 'password') {
      return 'Password'
    } else if (textId === 'show') {
      return 'Show'
    } else if (textId === 'hide') {
      return 'Hide'
    } else if (textId === 'first_time') {
      return 'First time here?'
    } else if (textId === 'sigmudn_freud') {
      return 'Register now'
    } else if (textId === 'email-require') {
      return 'Email is required!'
    } else if (textId === 'registration-title') {
      return 'Subscribing to LetsFlix is ​​very easy! To start watching, enter your password.'
    } else if (textId === 'enter_password') {
      return 'Enter your password'
    } else if (textId === 'confirm') {
      return 'Confirm'
    } else if (textId === 'password-required') {
      return 'Password is required'
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
    } else if (textId === 'login-input') {
      return 'Email ou número de telefone'
    } else if (textId === 'password') {
      return 'Senha'
    } else if (textId === 'show') {
      return 'Mostrar'
    } else if (textId === 'hide') {
      return 'Ocultar'
    } else if (textId === 'first_time') {
      return 'Primeira vez aqui?'
    } else if (textId === 'sigmudn_freud') {
      return 'Cadastra-se agora'
    } else if (textId === 'email-require') {
      return 'O email é obrigatório.'
    } else if (textId === 'registration-title') {
      return 'Assinar a LetsFlix é muito fácil! Para começar a assistir informe sua senha.'
    } else if (textId === 'enter_password') {
      return 'Informe a senha'
    } else if (textId === 'confirm') {
      return 'Confirmar'
    } else if (textId === 'password-required') {
      return 'Coloque a senha'
    }
  }
}