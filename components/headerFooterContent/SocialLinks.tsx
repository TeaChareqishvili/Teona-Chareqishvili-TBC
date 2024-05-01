import { socilaLinkData } from "../projectData";
import Link from "next/link";

import { SocialLinksProps } from "@/app/interface";

const SocialLinks = ({
  justifyContent,
  marginRight = "10px",
}: SocialLinksProps) => {
  return (
    <div>
      <p
        className="text-base text-white mb-3"
        style={{ fontFamily: "tbc-helvetica-light" }}
      >
        Find Us
      </p>
      <div
        className="flex items-center"
        style={{ justifyContent: justifyContent }}
      >
        {socilaLinkData.map((item) => (
          <div key={item.id} style={{ marginRight: marginRight }}>
            <Link href={item.address} target="_blank" rel="noreferrer">
              {item.link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SocialLinks };
