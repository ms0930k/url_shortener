import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function RedirectPage({
  params,
}: {
  params: Promise<{
    shortCode: string;
  }>;
}) {
  const { shortCode } = await params;

  const { data: link, error } =
    await supabase
      .from("links")
      .select("*")
      .eq("short_code", shortCode)
      .single();

  if (error || !link) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          404 - Link Not Found
        </h1>
      </div>
    );
  }

  try {
    await supabase
      .from("clicks")
      .insert([
        {
          link_id: link.id,
        },
      ]);

    await supabase
      .from("links")
      .update({
        click_count:
          (link.click_count ?? 0) + 1,
      })
      .eq("id", link.id);
  } catch (err) {
    console.error(err);
  }

  redirect(link.original_url);
}