
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProfileCard() {
  return (
    <Card className="overflow-hidden rounded-2xl border-0 shadow-xl shadow-blue-100">
      <div className="h-3 bg-blue-600" />

      <CardHeader className="items-center pt-8 text-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-blue-100 bg-blue-600 text-5xl font-bold text-white shadow-lg">
          R
        </div>

        <CardTitle className="mt-4 text-2xl font-bold text-slate-900">
          บูรพากร สร้อยทอง
        </CardTitle>

        <p className="text-sm text-blue-600">
          Nickname: Rifle
        </p>
      </CardHeader>

      <CardContent className="space-y-4 px-6 pb-8">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-slate-400">STUDENT ID</p>
          <p className="mt-1 font-bold text-slate-800">
            6714421017
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-slate-400">MAJOR</p>
          <p className="mt-1 font-bold text-slate-800">
            เทคโนโลยีสารสนเทศ
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-slate-400">UNIVERSITY</p>
          <p className="mt-1 font-bold text-slate-800">
            มหาวิทยาลัยราชภัฏรำไพพรรณี
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
