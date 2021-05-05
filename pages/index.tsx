import Card from "@/components/Card";
import MyComponent from "@/components/MyComponent";
import { ItemProps } from "@/types";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";

const HomePage: NextPage = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    axios.get<ItemProps[]>("/api/getItems").then((res) => setItems(res.data));
  }, []);

  const newTab = useMemo(() => {
    return items.filter((e) =>
      e.name.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  }, [items, inputValue]);

  return (
    <>
      <div className="container mx-auto pt-4">
        <h1 className="text-center font-bold font-display text-2xl mb-4">
          Music Player
        </h1>
        <MyComponent text={inputValue}></MyComponent>
        <div className="flex justify-center mb-4">
          <input
            className="rounded-md border border-gray font-body"
            style={{ width: "320px" }}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
        </div>
        <div className="grid grid-cols-3 justify-items-center">
          {newTab.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
