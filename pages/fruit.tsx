import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { RadioButton, RadioGroup } from "../components";

const Fruit: NextPage = ({
  fruits,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const label = `Choose your favorite from the following ${fruits?.length} fruits：`;

  return (
    <RadioGroup name="fruit-selection" label={label} horizontal>
      {fruits?.map((item) => (
        <RadioButton value={item} label={item} key={item} />
      ))}
    </RadioGroup>
  );
};

export default Fruit;

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const fruits = await fetchFruit();
    // Pass data to the page via props
    return { props: { fruits } };
  } catch (e) {
    throw e;
  }
};

export const fetchFruit = async () => {
  try {
    const result = await fetch("http://localhost:4000/fruits");
    const data = await result.json();
    return data.fruits;
  } catch (e) {
    return null;
  }
};
