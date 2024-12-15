interface CreateInterestFieldProps {
  value: string;
  onChange: (value: string) => void;
  onRemove?: () => void;
  isRequired: boolean;
}

const CreateInterestField: React.FC<CreateInterestFieldProps> = ({
  value,
  onChange,
  onRemove,
  isRequired,
}) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="text"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 text-black"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={isRequired}
      />
      {onRemove && (
        <button
          type="button"
          className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={onRemove}
        >
          -
        </button>
      )}
    </div>
  );
};

export default CreateInterestField;
