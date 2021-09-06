import { roots, compounds } from "../lang";

let rootsArray = Object.entries(roots);
let compoundsArray = Object.entries(compounds);

function Index() {
  return (
    <>
      <h2>Roots: {rootsArray.length}</h2>
      <h2>Compounds: {compoundsArray.length}</h2>
    </>
  );
}

export default Index;
