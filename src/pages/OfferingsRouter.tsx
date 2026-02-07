import { Navigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import OfferingPage from "./offerings/OfferingPage";
import { offerings } from "./offerings/content";

function normalizeSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function OfferingsRouter() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <NotFound />;
  }

  const normalized = normalizeSlug(slug);

  if (normalized !== slug) {
    return <Navigate to={`/offerings/${normalized}`} replace />;
  }

  const offering = offerings[normalized];
  if (!offering) {
    return <NotFound />;
  }

  return <OfferingPage offering={offering} />;
}
