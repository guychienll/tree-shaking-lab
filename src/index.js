import * as utils from "./util";

const process = (a, b) => {
    return utils.add(a, b) / utils.add(a, b);
};

console.log(process(1, 2));
