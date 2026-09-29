import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/**
 * Sanity webhook target so published stories appear immediately instead of within 5 minutes.
 * sanity.io/manage → API → Webhooks: POST to https://<domain>/api/revalidate,
 * filter `_type == "post"`, projection `{ _type, "slug": slug.current }`,
 * secret = SANITY_REVALIDATE_SECRET.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ message: "Revalidation is not configured" }, { status: 500 });

  const { isValidSignature, body } = await parseBody<{ _type?: string; slug?: string }>(req, secret);
  if (!isValidSignature) return NextResponse.json({ message: "Invalid signature" }, { status: 401 });

  revalidateTag("post");
  revalidatePath("/stories");
  if (body?.slug) revalidatePath(`/stories/${body.slug}`);
  return NextResponse.json({ revalidated: true, slug: body?.slug ?? null });
}
