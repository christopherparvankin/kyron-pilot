import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { formatPhoneNumber } from "@/lib/contactUtils";

export default async function ContactInfo() {
  const contactInfo = await client.fetch(queries.getContactInfo);

  if (!contactInfo) {
    // Fallback to hardcoded values if no contact info is found
    return (
      <>
        <a
          href="tel:561-964-8221"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: "500",
            padding: "4px 8px",
          }}
        >
          Call Us: 561-964-8221
        </a>
      </>
    );
  }

  return (
    <a
      href={`tel:${contactInfo.phone}`}
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "0.9rem",
        fontWeight: "500",
        padding: "4px 8px",
      }}
    >
      Call Us: {formatPhoneNumber(contactInfo.phone)}
    </a>
  );
}
