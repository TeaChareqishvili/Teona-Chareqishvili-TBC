interface Props {
  fontSize: string;
  display: string;
}

export default function ContactData({ fontSize, display }: Props) {
  return (
    <>
      <div className="mt-4 text-center text-sm text-gray-300">
        <h2
          className="text-[white] text-[32px] mb-[20px]"
          style={{ fontSize: fontSize, display: display }}
        >
          Contact us
        </h2>
        <p
          className="text-white cursor-pointer mb-[15px] lg:text-[22px] "
          style={{ fontSize: fontSize }}
        >
          Rustaveli Avenu
        </p>
        <p
          className="text-white cursor-pointer mb-[15px] lg:text-[22px] "
          style={{ fontSize: fontSize }}
        >
          Tbilisi, Georgia
        </p>
        <p
          className="text-white  cursor-pointer mb-[15px] lg:text-[22px]"
          style={{ fontSize: fontSize }}
        >
          Email: contact@viatlityzone.com
        </p>
        <p
          className="text-white  cursor-pointer mb-[15px] lg:text-[22px]"
          style={{ fontSize: fontSize }}
        >
          Phone: (995) 599 557799
        </p>
      </div>
    </>
  );
}
