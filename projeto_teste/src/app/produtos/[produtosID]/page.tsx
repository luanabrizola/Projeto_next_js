export default function DeatlhesProdutos({
    params,

}: {
    params:{produtosID: string};

}){
    return <h1>Detalhes dos produtos{params.produtosID}</h1>
}