import Card from "@/components/Card";
import { ItemProps } from "@/types";
import axios from "axios";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

const HomePage: NextPage = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [hiddenItems, setHiddenItems] = useState<string[]>([]);

  const hideItem = useCallback((id: string) => {
    setHiddenItems((hiddenItems) => [...hiddenItems, id]);
  }, []);

  useEffect(() => {
    axios.get<ItemProps[]>("/api/getItems").then((res) => setItems(res.data));
  }, []);

  return (
    <>
      <div className="container mx-auto pt-4">
        <h1 className="text-center font-bold font-display text-2xl mb-4">
          Music Player
        </h1>
        <div className="grid grid-cols-3 justify-items-center">
          {items
            .filter((item) => !hiddenItems.includes(item.id))
            .map((item) => (
              <Card key={item.id} {...item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
