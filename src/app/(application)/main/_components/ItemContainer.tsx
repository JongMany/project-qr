"use client";
import Item from "@/app/(application)/main/_components/Item";
import { useSearchContext } from "@/app/(application)/main/_components/ItemList";
import { Category, ItemEntity } from "@/entity/Item";
import { useItemStore } from "@/stores/useItemStore";
import { differenceInCalendarDays, subDays } from "date-fns";

export default function ItemContainer() {
  const { items, categoryFilter, expirationSortOption } = useItemStore();
  const { query } = useSearchContext();
  // TODO: 커링으로 해결하자
  const result = findItemsByQuery(
    sortItemsByExpiration(
      filterItems(items, categoryFilter),
      expirationSortOption
    ),
    query.trim()
  );

  return (
    <section className="h-[77vh] overflow-y-scroll scrollbar-hide flex flex-col items-center pb-4">
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

function findItemsByQuery(items: ItemEntity[], query: string) {
  console.log(query);
  if (query.length === 0) return items;
  const regEx = new RegExp(query, "i"); // 대소문자 구분 없이 검색
  return items.filter((item) => regEx.test(item.name));
}
