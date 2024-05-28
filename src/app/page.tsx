import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main className="px-6 py-12 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[url('/assets/logo.png')] h-[300px] bg-no-repeat bg-center	bg-cover w-[300px]"></div>
        <h3 className="text-2xl">유통기한 알림 서비스 아차!</h3>
      </div>
      <Landing />
    </main>
  );
}
