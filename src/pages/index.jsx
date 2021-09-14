import { For } from 'solid-js';
import { r, roots, c, compounds } from '../lang';

let rootsArray = Object.entries(roots);
let compoundsArray = Object.entries(compounds);

function Index() {
  return (
    <>
      <div>
        <h2>Roots: {rootsArray.length}</h2>
        <For each={rootsArray}>
          {([id, root]) => {
            return (
              <div>
                {r[id]} - {id} - {root.is}
              </div>
            );
          }}
        </For>
      </div>
      <div>
        <h2>Compounds: {compoundsArray.length}</h2>
        <For each={compoundsArray}>
          {([id, compound]) => {
            return (
              <div>
                {c[id]} - {id} -
                <For each={compound.is}>
                  {(num) => {
                    return <span>{num}.</span>;
                  }}
                </For>
              </div>
            );
          }}
        </For>
      </div>
    </>
  );
}

export default Index;
