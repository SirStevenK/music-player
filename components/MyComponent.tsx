type Props = {
  text: string;
};

const MyComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <div>MyComponent</div>
      <div>{props.text}</div>
    </div>
  );
};

export default MyComponent;
