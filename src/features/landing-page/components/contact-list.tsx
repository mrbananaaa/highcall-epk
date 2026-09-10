"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CONTACT_LIST, LINK_URLS } from "@/config/constants";
import {
  SiInstagram,
  SiWhatsapp,
  type IconType,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useRef } from "react";

interface ContactInfoProps {
  Icon: IconType;
  title: string;
  contact: string;
  url: string;
}

interface AnimatedElement extends HTMLElement {
  animation?: gsap.core.Tween;
}

export function ContactInfo({ Icon, title, contact, url }: ContactInfoProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const scaleTextElements =
        gsap.utils.toArray<AnimatedElement>(".scale-text");

      scaleTextElements.forEach((el) => {
        el.animation = gsap.to(el, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
          color: "#ffb4a8",
          paused: true,
        });
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = (e: React.MouseEvent<AnimatedElement>) =>
    e.currentTarget.animation?.play();
  const handleMouseLeave = (e: React.MouseEvent<AnimatedElement>) =>
    e.currentTarget.animation?.reverse();

  return (
    <div
      ref={containerRef}
      className="reveal-stagger flex items-start space-x-4"
    >
      <div>
        <Icon size={18} />
      </div>

      <div className="flex flex-col space-y-2">
        <h2 className="cursor-default font-display text-sm font-light tracking-widest text-primary">
          {title}
        </h2>

        <h1
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="scale-text pl-1 font-display text-3xl font-semibold"
        >
          <Link target="_blank" href={url}>
            {contact}
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default function ContactList() {
  return (
    <div className="grid grid-rows-2 gap-5">
      {(
        [
          [
            SiWhatsapp,
            "WhatsApp",
            `${CONTACT_LIST.phoneNumber}`,
            `${LINK_URLS.WA}/${CONTACT_LIST.phoneNumber}`,
          ],
          [
            SiInstagram,
            "Instagram",
            `@${CONTACT_LIST.igUsername}`,
            `${LINK_URLS.IG}/${CONTACT_LIST.igUsername}`,
          ],
        ] as const
      ).map(([Icon, title, contact, url], i) => (
        <ContactInfo
          key={`${i}-${title}`}
          Icon={Icon}
          title={title}
          contact={contact}
          url={url}
        />
      ))}
    </div>
  );
}
