import { shops } from "@/app/constants/constants";

export default function AboutId({ params: { id } }: IAboutIdProps) {
  const shopInfo = shops.find((shopInfo) => shopInfo.id === id);
  return (
    <h3>
      Something about {shopInfo?.name || "This shop does not exist in DB"}
    </h3>
  );
}
