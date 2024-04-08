export default function ReviewDetalhes({params}: {
    params:{
        produtosID: string;
        reviewID: string;
    }

}){
    return <h1>
        Review {params.reviewID} do produto {params.produtosID}
    </h1>
}