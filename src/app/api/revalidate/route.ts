import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ message: "Revalidation is not configured" }, { status: 500 });

  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const slug = body?.slug as string | undefined;

  revalidatePath("/stories");
  revalidatePath("/research");
  if (slug) revalidatePath(`/stories/${slug}`);

  return NextResponse.json({ revalidated: true, slug: slug ?? null });
}
