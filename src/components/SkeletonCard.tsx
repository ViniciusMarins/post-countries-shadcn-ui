import { Skeleton } from "./ui/skeleton";

function SkeletonCard() {
  return (
    <div className="max-w-[300px] w-full flex flex-col gap-2">
      <Skeleton className="w-24 h-4 my-2" />
      <Skeleton className="w-48 h-4" />
      <Skeleton className="w-[250px] h-[200px] mt-4 mb-2" />
      <Skeleton className="w-28 h-4 my-2" />
      <Skeleton className="w-32 h-4" />
    </div>
  );
}

export default SkeletonCard;
