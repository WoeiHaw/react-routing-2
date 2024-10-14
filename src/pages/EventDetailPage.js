import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event Id: {params.id}</p>
    </>
  );
}

export default EventDetailPage;
