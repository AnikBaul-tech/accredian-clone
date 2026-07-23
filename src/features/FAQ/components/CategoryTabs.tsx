interface Props {
  active: string;
  onChange: (value: string) => void;
}

const tabs = [
  {
    label: "About the Course",
    value: "course",
  },
  {
    label: "About the Delivery",
    value: "delivery",
  },
  {
    label: "Miscellaneous",
    value: "misc",
  },
];

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`
            rounded-xl
            border
            px-8
            py-4
            font-semibold
            transition

            ${
              active === tab.value
                ? "bg-white text-blue-600 shadow-lg"
                : "text-slate-600 hover:bg-slate-50"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
