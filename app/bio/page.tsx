
import ProfileCard from "@/components/ProfileCard";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

export default function BioPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">

      <SectionTitle
        subtitle="About Me"
        title="My Biography"
        description="ทำความรู้จักกับฉันผ่านประวัติส่วนตัวและข้อมูลการศึกษา"
      />

      <div className="grid items-start gap-8 md:grid-cols-2">

        <ProfileCard />

        <div className="space-y-6">

          <Card className="rounded-2xl border-0 shadow-md">
            <CardContent className="p-7">
              <h2 className="mb-4 text-xl font-bold text-blue-700">
                Personal Information
              </h2>

              <div className="space-y-4 text-slate-600">
                <p>
                  <strong className="text-slate-900">ชื่อ-นามสกุล:</strong>
                  {" "}บูรพากร สร้อยทอง
                </p>
                <p>
                  <strong className="text-slate-900">ชื่อเล่น:</strong>
                  {" "}ไรเฟิ้ล
                </p>
                <p>
                  <strong className="text-slate-900">รหัสนักศึกษา:</strong>
                  {" "}6714421017
                </p>
                <p>
                  <strong className="text-slate-900">สาขา:</strong>
                  {" "}เทคโนโลยีสารสนเทศ
                </p>
                <p>
                  <strong className="text-slate-900">มหาวิทยาลัย:</strong>
                  {" "}มหาวิทยาลัยราชภัฏรำไพพรรณี
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-md">
            <CardContent className="p-7">
              <h2 className="mb-4 text-xl font-bold text-blue-700">
                My Interests
              </h2>

              <div className="flex flex-wrap gap-3">
                {["Technology", "Web Development", "Programming", "Design"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  );
}
