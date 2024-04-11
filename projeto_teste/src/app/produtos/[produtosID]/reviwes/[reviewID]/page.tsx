import { notFound } from "next/navigation";

export default function ReviewDetalhes({params}: {
    params:{
        produtosID: string;
        reviewID: string;
    }

}){
    if (parseInt(params.reviewID) > 1000) {
        notFound();
    }
    return <h1>
        Review {params.reviewID} do produto {params.produtosID}
    </h1>
}