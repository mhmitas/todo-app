import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mt-4 space-y-10">
      <Link href="https://mail.google.com/mail/?tab=rm&ogbl">
        <div className="text-4xl font-black flex items-center justify-center gap-2">
          <Image src={"/assets/gamil.png"} height={50} width={50} alt="Gmail-logo" />
          <span>Check Mail</span>
        </div>
      </Link>
    </section>
  );
}
