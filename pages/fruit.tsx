import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { RadioButton, RadioGroup } from "../components";

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Fetch data from external API
    const res = await fetch("http://localhost:4000/fruits");
    const data = await res.json();

    // Pass data to the page via props
    return { props: { fruits: data.fruits } };
  } catch (e) {
    return e;
  }
};

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
