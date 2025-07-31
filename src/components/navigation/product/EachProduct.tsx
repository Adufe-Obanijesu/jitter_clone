import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import {IProduct} from "@/data/navigation/product";
import {cn} from "@/utils/tailwind";

export default function EachProduct({
  product
}: { product: IProduct }) {

  return (
    <div
      className={cn("hover:scale-[.97] dropdown-card rounded-[20px] p-[30px] h-[185px] w-full flex items-end bg-light-grey", `${product.bg}`, `${product.text_color}`)}
    >
      <div className="space-y-2">
        <h3 className="text-xl font-extrabold">{product.text}</h3>
        <div className="flex items-center gap-1.5">
          <Link href={product.href} className="font-semibold">
            Learn more
          </Link>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
