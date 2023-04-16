import Image from "next/image";
import { FormSignIn } from "./form-sign-in";
import { PageView } from "@/app/components/page-view";

export default function Home() {
  return (
    <PageView>
      <>
        <aside className="h-full w-1/3 flex flex-col items-center justify-center bg-surface p-10">
          <FormSignIn />
        </aside>
        <section className="w-full h-screen flex justify-center items-center ">
          <Image
            src={"/illustration2.svg"}
            width={640}
            height={600}
            alt="illustration"
          />
        </section>
      </>
    </PageView>
  );
}
