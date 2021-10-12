/* Constante que recebe a chave criada no TMDB*/
const API_KEY = '4dd5676bd71f3e4365c6ec774827e042';

/*Constante que recebe o diretorio da API, que vai buscar cada categoria*/
const API_BASE = 'https://api.themoviedb.org/3';



/* Função auxiliar que vai entra na url para pegar o resultado esperado e retorna
sempre que for solicitado, vai iterar na lista abaixo, individualmente*/

/* A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. 
Ela também fornece o método global fetch() (en-US) que fornece 
uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
segundo o MDN */

/* função assincronica */
const basicFetch = async (urlreceive) => {
    /* Requisição e concatenaçao do api_base e da funçao assincronica*/
    const request = await fetch(`${API_BASE}${urlreceive}`);
    /*pegando o json da requisiçao acima(resultado) */
    const json = await request.json();
    return json;

}

/* Lista que vai conter titulo, legenda e categoria*/
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            },
            {
                slug: 'topedrated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'Action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: []
            },

        ];
    }
}