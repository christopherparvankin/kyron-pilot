export interface ContactInfo {
  _id: string;
  title: string;
  address: string;
  suite?: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email?: string;
  hours?: string;
}

export function formatAddress(contactInfo: ContactInfo): string {
  const parts = [contactInfo.address];

  if (contactInfo.suite) {
    parts.push(contactInfo.suite);
  }

  parts.push(
    `${contactInfo.city}, ${contactInfo.state} ${contactInfo.zipCode}`
  );

  return parts.join("\n");
}

export function formatPhoneNumber(phone: string): string {
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Format as (XXX) XXX-XXXX
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  }

  return phone;
}
