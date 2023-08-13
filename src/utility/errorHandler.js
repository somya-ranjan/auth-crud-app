import toaster from "./toaster";

export default function* errorHandler({ response = "" }) {
  if (
    response !== undefined &&
    response !== undefined &&
    response.status !== undefined
  ) {
    if (response.status === 500) {
      toaster.error(response.data.message);
    }
    if (response.status === 400) {
      toaster.error(response.data.message);
    }
    if (response.status === 403) {
      toaster.error(response.data.message);
    }

    if (response.status === 401) {
      // yield put(logoutAction({ forceLogout: true }));
      toaster.error("user force logout");
    } else if (
      response.data &&
      response.data.message !== undefined &&
      response.data.message !== "" &&
      typeof response.data.message === "string"
    ) {
      if (response.data && response.data.data && response.data.data.type) {
        toaster.error(response.data.message);
      } else {
        toaster.error(response.data.message);
      }
    } else {
      toaster.error("Server error! Please try again.");
    }
  } else {
    toaster.error("Something went wrong! Please try again.");
  }
}
