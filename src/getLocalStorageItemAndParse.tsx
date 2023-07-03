export const getLocalStorageItemAndParse = (localStorageItemKey: string) => {
    const savedJson = localStorage.getItem(localStorageItemKey);
    const parsed = JSON.parse(savedJson  || "[]");
    return parsed;
  }
  //ma zwracać typ który będzie podany <> (generics)