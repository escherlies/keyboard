import fs from 'fs';
import nyquist_4 from "./enryco_nyquist_rev3_4.json";


const fill = Array(12).fill("KC_NO");

const main = () => {
  const json = nyquist_4
  const path = "./enryco_nyquist_rev3_5.json";
  const result = { ...json }

  result["layout"] = "LAYOUT_ortho_5x12"

  json.layers.forEach((layer, index) => {
    result.layers[index] = [...fill, ...layer];
  });

  fs.writeFileSync(path, JSON.stringify(result, null, 2));
}


main();

