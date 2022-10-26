import type { InferGetServerSidePropsType, NextPage } from "next";
import { useState } from "react";
import { RadioButton, RadioGroup } from "../components";

const Framework: NextPage = ({
  frameworks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selected, setSelected] = useState("");

  const handleChange = (value: string) => {
    const info = { selected: value };

    selectFramework(info).then((data) => {
      console.log(data);
      setSelected(data.data);
    });
  };

  const label = `Choose your favorite from the following ${frameworks?.length} JS-Frameworks/Libs`;

  return (
    <>
      <RadioGroup
        name="framework-selection"
        label={label}
        onChange={handleChange}
      >
        {frameworks?.map((item) => (
          <RadioButton value={item} label={item} key={item} />
        ))}
      </RadioGroup>
      <div className="flex justify-start items-baseline h-8">{selected}</div>
    </>
  );
};

export default Framework;

// This gets called on every request
export async function getServerSideProps() {
  const frameworks = await fetchFrameworks();
  return { props: { frameworks } };
}

export const fetchFrameworks = async () => {
  try {
    const result = await fetch("http://localhost:4000/jsframeworks");
    const data = await result.json();
    return data.frameworks;
  } catch (e) {
    return null;
  }
};

export const selectFramework = async (info: { selected: string }) => {
  try {
    return fetch("http://localhost:4000/jsframeworks", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((res) => res.json());
  } catch (e) {
    return null;
  }
};
