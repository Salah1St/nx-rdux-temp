interface Props {
  order: number;
  type: string;
  percentage: number | string;
}

export default function ScopeItem({ order, type, percentage }: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className="rounded-full w-2 h-2 bg-[#27462C]"></div>
        <div>{`Scope ${order} - ${type}`}</div>
      </div>
      <div>{`${percentage} %`}</div>
    </div>
  );
}
