import * as utils from "./utils";

const utilsFnMap = {
    add: "add",
};

const process = (a, b) => {
    return utils[utilsFnMap.add](a, b) / utils[utilsFnMap.add](a, b);
};

console.log(process(1, 2));
