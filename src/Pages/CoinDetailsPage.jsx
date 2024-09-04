import { useParams } from "react-router-dom";

function CointdetailsPage(){

  const {coinId} = useParams();
  return (
    <div>
      <h1>coin details page { coinId }</h1>
    </div>
  )
};

export default CointdetailsPage;