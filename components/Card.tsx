import NextImage from "next/image";
import { ItemProps } from "@/types";

type Props = ItemProps;

const Card: React.FC<Props> = (props) => {
  return (
    <div
      className="bg-main rounded-md shadow-BOX flex items-center mb-4 p-2 cursor-pointer hover:bg-sub"
      style={{ width: "300px" }}
    >
      <div className="flex justify-center">
        <NextImage
          className="rounded-md"
          src={`/${props.image}`}
          height={100}
          width={100}
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col items-center">
        <span className="font-bold font-display">{props.name}</span>
        <span className="">{props.type}</span>
        <span className="">{props.artist}</span>
      </div>
    </div>
  );
};

export default Card;
