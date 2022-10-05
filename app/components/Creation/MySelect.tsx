import type { FC } from "react";
import { useEffect } from "react";
import { alignmentMap } from "~/utils/constants";

interface MySelectProps {
  onChange: (...args: any) => any;
}

const MySelect: FC<MySelectProps> = ({ onChange }) => {
  const getOptions = (data: any) =>
    Object.keys(data).reduce((acc: any[], curr) => {
      acc.push({
        value: curr.charAt(0) + curr.slice(1),
        name: data[curr],
      });
      return acc;
    }, []);

  const alignments = getOptions(alignmentMap);

  return (
    <>
      <select className="alignment-select" onChange={(e) => onChange?.(e)}>
        {alignments.map((alignment) => (
          <option key={alignment.value} value={alignment.value}>
            {alignment.name}
          </option>
        ))}
      </select>
      <label>Alignment</label>
    </>
  );
};
export default MySelect;
