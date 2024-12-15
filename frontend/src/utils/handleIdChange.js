"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleIdChange = void 0;
const handleIdChange = (value, setId) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) || value === "") {
        setId(value === "" ? "" : parsedValue);
    }
};
exports.handleIdChange = handleIdChange;
