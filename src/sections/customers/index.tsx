import Image from "next/image";

export default function Customers() {
  return (
    <div className="space-y-10">
      <p className="text-[15px] text-dark text-center">
        <strong>Over 20,000 creative teams use Jitter</strong> to create
        stunning animations online.
      </p>

      <div className="flex items-center justify-around">
        <Image
          src="/icons/perplexity.png"
          width={125}
          height={35}
          alt="perplexity"
        />
        <Image
          src="/icons/perplexity.png"
          width={125}
          height={35}
          alt="perplexity"
        />
        <Image
          src="/icons/perplexity.png"
          width={125}
          height={35}
          alt="perplexity"
        />
        <Image
          src="/icons/perplexity.png"
          width={125}
          height={35}
          alt="perplexity"
        />
      </div>
    </div>
  );
}
