import { For } from 'solid-js';
import {
  r,
  roots,
  c,
  compounds,
  phonemes,
  getPhonemes,
  consonants1,
  vowels,
  consonants2,
} from '../lang';

let rootsArray = Object.entries(roots);
let compoundsArray = Object.entries(compounds);

function Index() {
  return (
    <>
      <div>
        <details>
          <summary>
            <strong>Phonemes: {phonemes.length}</strong>
          </summary>
          <table class="table-fixed">
            <thead>
              <For each={[''].concat(consonants1)}>
                {(c1) => <th class="px-2">{c1}</th>}
              </For>
            </thead>
            <tbody>
              <For each={vowels}>
                {(v) => (
                  <tr>
                    <th class="px-2">{v}</th>
                    <For each={consonants1}>
                      {(c1) => (
                        <td class="border px-2">
                          <For each={consonants2}>
                            {(c2) => (
                              <span>
                                {c1 + v + c2}
                                <br />
                              </span>
                            )}
                          </For>
                        </td>
                      )}
                    </For>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </details>
      </div>
      <div>
        <details>
          <summary>
            <strong>Roots: {rootsArray.length}</strong>
          </summary>
          <For each={rootsArray}>
            {([id, root]) => {
              return (
                <div>
                  {r[id]} - {id} - {root.is}
                </div>
              );
            }}
          </For>
        </details>
      </div>
      <div>
        <details>
          <summary>
            <strong>Compounds: {compoundsArray.length}</strong>
          </summary>
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
        </details>
      </div>
    </>
  );
}

export default Index;
