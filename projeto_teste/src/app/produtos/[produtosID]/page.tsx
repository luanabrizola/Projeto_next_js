type Props = {
    params: {
        productID: string
    }
}

export const generalMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params.productID}`, 
    };
};

export default function DetalhesProdutos({ params }: Props) {
    return <h1>Detalhes dos produtos {params.productID}</h1>; 
}
