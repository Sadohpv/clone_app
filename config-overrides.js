
// Ghi đè cấu hình webpack tại đây
const { override, useBabelRc } = require("customize-cra");


module.exports = override(
    useBabelRc()
);

