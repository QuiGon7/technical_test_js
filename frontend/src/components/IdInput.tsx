import React from "react";

interface IdInputProps {
  id: number | "";
  onChange: (value: string) => void;
}

const IdInput: React.FC<IdInputProps> = ({ id, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="id" className="block text-sm font-medium mb-1 text-black">
        User ID:
      </label>
      <input
        type="text"
        id="id"
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
        value={id === "" ? "" : id}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default IdInput;
