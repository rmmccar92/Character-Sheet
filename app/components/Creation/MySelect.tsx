import type { FC } from "react";

interface MySelectProps {
  onChange: (...args: any) => any;
}

const MySelect: FC<MySelectProps> = ({ onChange }) => {
  return (
    <>
      <select className="alignment-select" onChange={(e) => onChange?.(e)}>
        <option value="LG">Lawful Good</option>
        <option value="NG">Neutral Good</option>
        <option value="CG">Chaotic Good</option>
        <option value="LN">Lawful Neutral</option>
        <option value="N">Neutral</option>
        <option value="CN">Chaotic Neutral</option>
        <option value="LE">Lawful Evil</option>
        <option value="NE">Neutral Evil</option>
        <option value="CE">Chaotic Evil</option>
      </select>
      <label>Alignment</label>
    </>
  );
};
export default MySelect;
