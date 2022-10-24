import type { InferGetServerSidePropsType, NextPage } from "next";
import { RadioButton, RadioGroup } from "../components";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:4000/jsframeworks");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { frameworks: data.frameworks } };
}

const Framework: NextPage = ({
  frameworks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const handleChange = (value: string) => {
    const info = { selected: value };

    fetch("http://localhost:4000/jsframeworks", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const label = `Choose your favorite from the following ${frameworks?.length} JS-Frameworks/Libs`;

  return (
    <RadioGroup
      name="framework-selection"
      label={label}
      onChange={handleChange}
    >
      {frameworks?.map((item) => (
        <RadioButton value={item} label={item} key={item} />
      ))}
    </RadioGroup>
  );
};

export default Framework;
