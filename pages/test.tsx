import type { InferGetStaticPropsType, NextPage } from "next";
import { RadioButton, RadioGroup } from "../components";

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:4000/test");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { fruits: data.fruits } };
}

const Test: NextPage = ({
  fruits,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const label = `Choose your favorite from the following ${fruits?.length} fruits：`;

  return (
    <RadioGroup name="fruit-selection" label={label} horizontal>
      {fruits?.map((item) => (
        <RadioButton value={item} label={item} key={item} />
      ))}
    </RadioGroup>
  );
};

export default Test;
