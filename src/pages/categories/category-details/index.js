import { Link, useLoaderData, useParams } from "react-router-dom";

function CategoryDetails() {
  const { id } = useParams();
  const category = useLoaderData();
  const { name, phone, website } = category;
  return (
    <div>
      <Link to="/categories">Back</Link>
      <h3>Category Details</h3>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>website: {website}</p>
    </div>
  );
}

export default CategoryDetails;
