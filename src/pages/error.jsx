import { useRouter } from "solid-app-router";

function Error() {
  return useRouter()[1].replace("/");
}

export default Error;
