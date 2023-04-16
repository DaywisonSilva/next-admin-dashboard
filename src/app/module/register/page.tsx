"useclient";
import Image from "next/image";
import { FormSignUp } from "./form-sign-up";
import { PageView } from "@/app/components/page-view";

export default function Home() {
  return (
    <PageView>
      <>
        <aside className="h-full w-1/3 flex flex-col items-center justify-center bg-surface p-10">
          <FormSignUp />
        </aside>
        <section className="w-full h-screen flex justify-center items-center ">
          <Image
            src={"/illustration.svg"}
            width={700}
            height={400}
            alt="illustration"
          />
        </section>
      </>
    </PageView>
  );
}
