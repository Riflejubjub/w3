
import SectionTitle from "@/components/SectionTitle";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const assignments = [
  {
    number: "01",
    title: "Course Profile Website",
    description:
      "สร้างเว็บไซต์โปรไฟล์รายวิชา ประกอบด้วยหน้า Home, Bio และ Assignment โดยใช้ Next.js และ Shadcn UI",
    status: "Completed",
    category: "Web Development",
  },
  {
    number: "02",
    title: "Personal Biography",
    description:
      "จัดทำหน้าเว็บไซต์แสดงประวัติส่วนตัว ข้อมูลการศึกษา และความสนใจ",
    status: "In Progress",
    category: "Personal Profile",
  },
  {
    number: "03",
    title: "Course Assignment",
    description:
      "รวบรวมรายละเอียดและแสดงรายการงานที่ได้รับมอบหมายในรายวิชา",
    status: "In Progress",
    category: "Assignment",
  },
];

export default function AssignmentPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">

      <SectionTitle
        subtitle="My Work"
        title="My Assignments"
        description="รายการงานและผลงานที่ได้รับมอบหมายในรายวิชา"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {assignments.map((assignment) => (
          <Card
            key={assignment.number}
            className="rounded-2xl border-0 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <CardHeader>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-3xl font-extrabold text-blue-200">
                  {assignment.number}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    assignment.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {assignment.status}
                </span>
              </div>

              <CardTitle className="text-lg text-slate-900">
                {assignment.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="mb-5 min-h-20 text-sm leading-7 text-slate-500">
                {assignment.description}
              </p>

              <div className="border-t pt-4">
                <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                  {assignment.category}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}

      </div>
    </main>
  );
}
