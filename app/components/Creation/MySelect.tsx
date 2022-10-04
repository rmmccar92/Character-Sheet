import type { FC } from "react";

interface MySelectProps {
  onChange: (...args: any) => any;
}

const MySelect: FC<MySelectProps> = ({ onChange }) => {
  return (
    <>
      <select className="alignment-select" onChange={(e) => onChange?.(e)}>
        <option value="lg">Lawful Good</option>
        <option value="ng">Neutral Good</option>
        <option value="cg">Chaotic Good</option>
        <option value="ln">Lawful Neutral</option>
        <option value="n">Neutral</option>
        <option value="cn">Chaotic Neutral</option>
        <option value="le">Lawful Evil</option>
        <option value="ne">Neutral Evil</option>
        <option value="ce">Chaotic Evil</option>
      </select>
      <label>Alignment</label>
    </>
  );
};
export default MySelect;
