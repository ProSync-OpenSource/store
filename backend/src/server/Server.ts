import APP from "../app/App.ts";

const PORT: number = 2345;

APP.listen(PORT, () => console.log(`It is running: http://localhost:${PORT}`));
