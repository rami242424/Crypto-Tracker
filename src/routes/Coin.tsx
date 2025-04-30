import { useParams } from "react-router-dom";

interface IParams {
    coinId: string;
}
function Coin()  {
    // const params = useParams();
    // console.log(params);
    // const { coinId } = useParams<{coinId:string}>();
    const { coinId } = useParams<IParams>();

    return (
    <>
        <h1>coin : {coinId} </h1>
    </>
    );
}

export default Coin;