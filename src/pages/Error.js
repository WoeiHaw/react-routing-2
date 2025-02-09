import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  let title = "An error occured!";
  let message = "Something Went Wrong";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found";
    message = "Could not find resource or page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;
