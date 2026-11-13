
import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import ProfileCard from "@/components/ProfileCard";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">

      <section className="grid items-center gap-12 md:grid-cols-2">

        <div>
          <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            WELCOME TO MY WEBSITE
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Hello, I'm
            <span className="block text-blue-600">
              Rifle!
            </span>
          </h1>

          <p className="mt-6 max-w-lg leading-8 text-slate-500">
            ยินดีต้อนรับเข้าสู่เว็บไซต์โปรไฟล์ประจำรายวิชาของฉัน
            เว็บไซต์นี้จัดทำขึ้นเพื่อแนะนำข้อมูลส่วนตัว
            ประวัติการศึกษา และผลงานที่ได้รับมอบหมายในรายวิชา
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/bio"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              About Me
            </Link>

            <Link
              href="/assignment"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              My Assignments
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <ProfileCard />
        </div>

      </section>

      <section className="mt-24">
        <SectionTitle
          subtitle="Explore Website"
          title="Explore My Profile"
          description="เลือกดูข้อมูลที่ต้องการได้จากเมนูด้านล่าง"
        />

        <div className="grid gap-6 md:grid-cols-2">

          <Link href="/bio">
            <Card className="h-full rounded-2xl border-0 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                  👨‍🎓
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  My Biography
                </h2>
                <p className="mt-3 leading-7 text-slate-500">
                  ข้อมูลส่วนตัว ประวัติการศึกษา และความสนใจของฉัน
                </p>
                <p className="mt-5 font-semibold text-blue-600">
                  Learn More →
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/assignment">
            <Card className="h-full rounded-2xl border-0 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                  📚
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  My Assignments
                </h2>
                <p className="mt-3 leading-7 text-slate-500">
                  รวบรวมงานที่ได้รับมอบหมายและผลงานในรายวิชา
                </p>
                <p className="mt-5 font-semibold text-blue-600">
                  View Assignments →
                </p>
              </CardContent>
            </Card>
          </Link>

        </div>
      </section>
    </main>
  );
}
