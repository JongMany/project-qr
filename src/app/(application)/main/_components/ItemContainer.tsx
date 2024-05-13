"use client";
import Item from "@/app/(application)/main/_components/Item";
import { Category, ItemEntity } from "@/entity/Item";
import { useItemStore } from "@/stores/useItemStore";
import { differenceInCalendarDays, subDays } from "date-fns";

export default function ItemContainer() {
  const { items, categoryFilter, expirationSortOption } = useItemStore();
  const result = sortItemsByExpiration(
    filterItems(items, categoryFilter),
    expirationSortOption
  );

  return (
    <section className="h-[70vh] overflow-y-scroll scrollbar-hide flex flex-col items-center pb-4">
      {result.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
}

function filterItems(items: ItemEntity[], filter: Category | "전체") {
  if (filter === "전체") return items;
  return items.filter((item) => item.category === filter);
}

function sortItemsByExpiration(
  items: ItemEntity[],
  order: "ascending" | "descending"
) {
  return items.sort((a, b) => {
    if (order === "ascending")
      return differenceInCalendarDays(a.expirationDate, b.expirationDate);
    return differenceInCalendarDays(b.expirationDate, a.expirationDate);
  });
}
