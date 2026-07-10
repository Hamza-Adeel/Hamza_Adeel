import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center bg-[#0B0B0B]">
    <div className="w-100 bg-gradient-to-b from-[#000000] to-[#2E2D2D] mt-25 border-2 rounded-4xl border-green-500 px-2 mb-2">

      <section className="relative flex flex-col items-center">
        <div className="text-center">
          <h3 className="text-8xl font-bold text-green-500 mb-6">404</h3>
          <p className="font-bold text-[32px] text-white mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[18px] text-white mb-4">
            Page cannot be found! We’ll have it figured out in no time.
          </p>
          <p className="text-[18px] text-white mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-green-500 text-black text-[18px] font-bold px-6 py-2 mb-2 rounded hover:bg-green-600">
              Go to home
            </button>
          </Link>
        </div>
      </section>
    </div>
    </div>
  );
}