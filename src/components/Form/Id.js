import BaseUrl from "./Url";
// const BaseUrl = `https://sheet.best/api/sheets/e499384a-e045-4e80-b780-1abf0a4763d6/tabs/Data`;

const getNextId = async () => {
  try {
    const response = await fetch(BaseUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (data.length === 0) {
      return 1;
    }

    const lastObject = data[data.length - 1];
    const lastId = parseInt(lastObject.id, 10);

    return lastId + 1;
  } catch (error) {
    console.error("There was an error fetching data:", error);
    return 1;
  }
};

export default getNextId;
